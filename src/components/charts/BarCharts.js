import React, { useState, useEffect } from "react";
import { AgChartsReact } from "ag-charts-react";
import Skeleton from "react-loading-skeleton";
import Loading from "../layout/Loading";

const BarCharts = () => {
  const [HorizontalBarData, setHorizontalChart] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const baseUrl = "/vrm/summary";
  const apiKey = "9f5f7eed-5924-440f-8913-aabdf45b03e7";

  useEffect(() => {
    const fetchSummary = async () => {
      await fetch(`${baseUrl}`, {
        method: "GET",
        headers: {
          "x-api-key": `${apiKey}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            response.json().then((json) => {
              setHorizontalChart(json);
              setLoading(true)
              setError(null);
            });
          }
        })
        .catch((err) => {
          setError(err.message);
          setHorizontalChart(null);
          console.log(error);
        });
    };
    fetchSummary();
  }, [baseUrl, apiKey]);

  // console.log("HorizontalBarData is ",HorizontalBarData)

  let optionsData = [
    {
      quarter: "Low",
      Risk: HorizontalBarData?.vendorsByRiskCategories["Very Low"],
    },
    {
      quarter: "Moderate",
      Risk: HorizontalBarData?.vendorsByRiskCategories.Moderate,
    },
    { quarter: "High", Risk: HorizontalBarData?.vendorsByRiskCategories.HIGH },
  ];

  var options = {
    title: {
      text: "Vendors by Criticality Rating",
    },
    subtitle: {
      text: "Criticality",
    },

    data: optionsData,
    theme: {
      overrides: {
        bar: {
          series: {
            highlightStyle: {
              item: {
                fill: "#253978",
                stroke: "none",
                strokeWidth: 0,
              },
              series: {
                dimOpacity: 0.2,
                strokeWidth: 0,
              },
            },
          },
        },
      },
    },
    series: [
      {
        type: "bar",
        xKey: "quarter",
        yKey: "Risk",
        fill: "gray",
        strokeWidth: 0,
      },
    ],
    legend: {
      enabled: false,
    },
  };

  return (

    <div>{loading ? <AgChartsReact options={options} /> : <Skeleton height={300}/>}</div>

  );
};

export default BarCharts;
