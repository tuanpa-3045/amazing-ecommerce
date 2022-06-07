import React from "react";
import "./styles.scss";

function Categories() {
  const categories = [
    {
      title: "Appliances",
    },
    {
      title: "Audio",
    },
    {
      title: "Cameras & Camcorders",
    },
    {
      title: "Car Electronics & GPS",
    },
    {
      title: "Cell Phones",
    },
    {
      title: "Computers & Tablets",
    },
    {
      title: " Health, Fitness & Beauty",
    },
    {
      title: "Office & School Supplies",
    },
    {
      title: "TV & Home Theater",
    },
    {
      title: "Video Games",
    },
  ];
  return (
    <div className="categories">
      <h3>Show results for</h3>
      {categories.map((item, index) => (
        <li key={index}>{item.title}</li>
      ))}
    </div>
  );
}

export default Categories;
