import React from "react";
import CardItem from "./CardItem";
import Pagination from "../Pagination";
import "./styles.scss";

const products = [
  {
    name: "3-Year Unlimited Cloud Storage Service Activation Card - Other",
    description:
      "Enjoy 3 years of unlimited Cloud storage service with this activation card, which allows you to remotely access your favorite music, movies and other media via a compatible device and enables private file sharing with loved ones.",
    brand: "Pogoplug",
    categories: ["Best Buy Gift Cards", "Entertainment Gift Cards"],
    hierarchicalCategories: {
      lvl0: "Best Buy Gift Cards",
      lvl1: "Best Buy Gift Cards > Entertainment Gift Cards",
    },
    type: "Online data backup",
    price: 69,
    price_range: "50 - 100",
    image: "https://cdn-demo.algolia.com/bestbuy/1696302_sc.jpg",
    url: "http://www.bestbuy.com/site/3-year-unlimited-cloud-storage-service-activation-card-other/1696302.p?id=1219066776306&skuId=1696302&cmp=RMX&ky=1uWSHMdQqBeVJB9cXgEke60s5EjfS6M1W",
    free_shipping: true,
    popularity: 10000,
    rating: 2,
    objectID: "1696302",
  },
];

function Content() {
  const results = 123456;
  const time = 3;
  const renderProduct = (products) => {
    const ArrayProduct = [];
    for (let i = 0; i < 16; i++) {
      ArrayProduct.push(<CardItem product={products[0]} key={i} />);
    }
    return ArrayProduct;
  };

  return (
    <div className="container-content">
      <div className="content-header">
        <p>
          {results.toLocaleString()} results found in {time} ms
        </p>
        <div>
          <label>
            Sort by
            <select>
              <option value="0" defaultChecked>
                Featured
              </option>
              <option value="1">Price asc.</option>
              <option value="2">Price desc.</option>
            </select>
          </label>
        </div>
      </div>
      <div className="row">{renderProduct(products)}</div>
      <Pagination />
    </div>
  );
}

export default Content;
