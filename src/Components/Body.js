import ResCard from "./ResCard";
import React, { useState, useEffect } from "react";
import ResList from "../utils/mockData";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(ResList);
  const [buttonText, setButtonText] = useState("Top Rated Restaurants");


  // useEffect(()=>{
  //   fetchData();
  // }, []);

  // const fetchData = async() => {
  //   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.50014797615297&lng=78.54048427194355&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

  //   const json = await data.json();
  //   console.log(json);
  //   setRestaurantList(json);
  // }


  const toggleBtn = () => {
    if (buttonText === "Top Rated Restaurants") {
      const filteredRestaurantList = restaurantList.filter(
        (info) => info.info.avgRating > 4
      );
      setRestaurantList(filteredRestaurantList);
      setButtonText("Show all Restaurants");
    } else {
      setButtonText("Top Rated Restaurants");
      setRestaurantList(ResList);
    }
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={toggleBtn}>
          {buttonText}
        </button>
      </div>

      <div className="res-container">
        {restaurantList.map((info) => (
          <ResCard key={info.info.id} resData={info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
