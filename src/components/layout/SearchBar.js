import React, { useEffect, useState } from "react";
import "../../css/SearchBar.css";
import { FaSearch, FaWindowClose } from "react-icons/fa";
import $ from "jquery";
import { Link } from "react-router-dom";

function SearchBar({}) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [SearchByName, setSearchByName] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

 

  const handleFilter = (event) => {
    const searchWord = event.target.value;

    setWordEntered(searchWord);
    const newFilter = SearchByName.filter((value) => {
      nodataDisplay();
      return value.vendor_name.toLowerCase().includes(
        searchWord.toLowerCase()
      );
    });

    if (searchWord === "") {
      setFilteredData([]);
      $("#NoDataAvialable").hide();
    } else {
      setFilteredData(newFilter);
    }
  };

  const nodataDisplay = () => {
    //console.log(filteredData.length)
    if (filteredData.length === 0) {
      $("#NoDataAvialable").show();
    } else {
      $("#NoDataAvialable").hide();
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const baseUrl = "/vrm/vendors?q=";
  const apiKey =  "9f5f7eed-5924-440f-8913-aabdf45b03e7";

  useEffect(() => {
    const fetchSearchByname = async () => {
      await fetch(`${baseUrl}${wordEntered}`, {
        method: "GET",
        headers: {
          "x-api-key" : `${apiKey}` 
        },
      })
        .then((response) => {
          if (response.ok) {
            response.json().then((json) => {
              setSearchByName(json);
              setError(null);
              setLoading(true);
              console.log(loading);
            });
          }
        })
        .catch((err) => {
          setError(err.message);
          setSearchByName(null);
          console.log(error);
        });
    };
    fetchSearchByname();
  }, [baseUrl,apiKey]); 

 // console.log("Searchdata is " ,SearchByName)

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          id="myList"
          type="text"
          placeholder="Search by name"
          value={wordEntered}
          onChange={handleFilter}
          autoComplete="off"
        
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <FaSearch size={24} />
          ) : (
            <FaWindowClose id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 ? (
        <div key={filteredData} className="dataResult">
          {filteredData.slice(0, 15).map((value) => {
            return (
              <div id="hoverDisplay" key={value.id}>
                <Link
                  className="dataItem"
                  to={`/userList` + `?name=${value.vendor_name}`}
                  data={value.vendor_name}
                >
                  <div>{value.vendor_name}</div>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div id="NoDataAvialable" className="dataResult Not_found">
          Not found
        </div>
      )}
    </div>
  );
}

export default SearchBar;
