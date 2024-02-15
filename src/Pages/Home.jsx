import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { FormControl, MenuItem, Select } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Cart from "../Component/Cart";
import Carousel from "../Component/Carousel";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const [foodCat, setFoodCat] = useState([]);
  console.log(foodCat);
  const [foodItems, setFoodItems] = useState([]);
  console.log(foodItems);
  const [search, setSearch] = useState("");
  console.log(search);
  const loadFoodItems = async () => {
    let response = await fetch("http://localhost:2906/api/getfooddata", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    // console.log(response[1][0].CategoryName)
    setFoodItems(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadFoodItems();
  }, []);

  return (
    <Fragment>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel search={search} setSearch={setSearch} />
      </div>
      <div className="container">
        {foodCat !== null ? (
          foodCat.map((d) => {
            return (
              <div className="row mb-3">
                <div key={d._id} className="fs-3 m-3">
                  {d.CategoryName}
                </div>
                <hr />
                {foodItems !== null ? (
                  foodItems
                    .filter(
                      (items) =>
                        items.CategoryName === d.CategoryName &&
                        items.Name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((fiitem) => {
                      return (
                        <div
                          key={fiitem._id}
                          className="col-12 col-md-6 col-lg-3"
                        >
                          <Cart
                          foodItem={fiitem}
                            foodName={fiitem.Name}
                            item={fiitem}
                            options={fiitem.options[0]}
                            ImgSrc={fiitem.Img}
                          />
                        </div>
                      );
                    })
                ) : (
                  <div>No Such Data</div>
                )}
              </div>
            );
          })
        ) : (
          <div>":":":":"</div>
        )}
        <Cart />
      </div>
      <div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;
