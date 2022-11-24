import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Page.css";
import Card from "../component/atoms/card/Card";

function Page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        console.log(res);
        setData(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="page-product">
      {data.map(({ id, title, image, price }) => (
        <Card id={id} title={title} image={image} price={price} />
      ))}
    </section>
  );
}

export default Page;
