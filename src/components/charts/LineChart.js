import React, { useState, useEffect } from 'react'
import { AgChartsReact } from 'ag-charts-react';
import Skeleton from 'react-loading-skeleton';


const LineChart = () => {

  const [LinechartData, setLineChart] = useState()
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const baseUrl = "/vrm/history";
  const apiKey =  "9f5f7eed-5924-440f-8913-aabdf45b03e7";

  useEffect(() => {
    const fetchSummary = async () => {
      await fetch(`${baseUrl}`, {
        method: "GET",
        headers: {
          "x-api-key" : `${apiKey}` 
        },
      })
        .then((response) => {
          if (response.ok) {
            response.json().then((json) => {
              setLineChart(json);
              setLoading(true)
              setError(null);
            });
          }
        })
        .catch((err) => {
          setError(err.message);
          setLineChart(null);
          console.log(error);
        });
    };
    fetchSummary();
  }, [baseUrl,apiKey]); 

  var  options= {
    autoSize:true,
    title: {
      text: 'Count of High Risk Vendors - Annually',
    },
    subtitle: {
      text: 'Criticality',
    },
    data: LinechartData,
    series: [
      {
        stroke: 'blue',
        xKey: 'quarter',
        yKey: '2022',
        marker: {
          fill: 'blue',
          stroke: 'blue',
        }
      },
      {
        xKey: 'quarter',
        yKey: '2021',
        stroke: 'red',
        marker: {
          fill: 'red',
          stroke: 'red',
        }
      },
    ],
    legend: {
      position: 'right'
    },
  }
  return (
    <div>
      <div>
        {loading ? (
          <AgChartsReact options={options} />
        ) : (
          <Skeleton height={300} />
        )}
      </div>
    </div>
  );
}

export default LineChart
