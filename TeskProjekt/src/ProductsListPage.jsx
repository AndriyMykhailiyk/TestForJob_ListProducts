import React, { useState } from "react";
import { ListProducts } from "./Products";
import "./Products.scss";
import { numberSortAscending } from "num-sort";
import AboutCard from "./AboutCard/AboutCard";

const ProductsList = () => {
  const [Detailes, SetDetailes] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [filteredByCategory, setFilteredByCategory] = useState(false);
  const [filteredProducts, setFilteredFruits] = useState(ListProducts);
  const [seeDeatiles, SetseeDeatiles] = useState(false);
  const [seeDeatilescategory, SetseeDeatilescategory] = useState(false);
  const [CansleModale, SetCansleModale] = useState(false);
  const [valueInpeut, SetValueInput] = useState("");

  const HandleSeeCategory = () => {
    SetseeDeatilescategory(!seeDeatilescategory);
  };

  const HandleSeePrise = () => {
    SetseeDeatiles(!seeDeatiles);
  };

  const HandleSeeModale = (item) => {
    setSelectedMovie(item.id === selectedMovie ? null : item.id);
    SetCansleModale(!CansleModale);
  };

  const HandleSeeDetailes = (item) => {
    SetDetailes(!Detailes);
    setSelectedMovie(item.id === selectedMovie ? null : item.id);
  };

  const filterByCategory = () => {
    const fruitsCategory = ListProducts.filter(
      (item) => item.category === "fruits"
    );
    setFilteredFruits(fruitsCategory);
    SetseeDeatilescategory(true);
  };

  const filterByVagatables = () => {
    const vagatablesCategory = ListProducts.filter(
      (item) => item.category === "vagatables"
    );
    setFilteredFruits(vagatablesCategory);
    setFilteredByCategory(true);
  };

  const filterByLowPrise = () => {
    const sortedProducts = [...ListProducts].sort((a, b) => a.prise - b.prise);
    setFilteredFruits(sortedProducts);
  };

  const filterByHowrise = () => {
    const sortedProducts = [...ListProducts].sort((a, b) => b.prise - a.prise);
    setFilteredFruits(sortedProducts);
  };

  const handleSearch = (e) => {
    SetValueInput(e.currentTarget.value);

    const filtered = ListProducts.filter((item) =>
      item.name.includes(e.currentTarget.value)
    );
    setFilteredFruits(filtered);
  };

  return (
    <>
      <section>
        <div style={{ backgroundColor: "#1D252B", padding: "1vw", color: "#B3BEC5" }}>
          <div className="wrapper_btn">
            <button onClick={HandleSeeCategory} className="prise_btn">
              Filter products by category
            </button>

            {seeDeatilescategory ? (
              <div className="wrapper_prise">
                <button onClick={filterByCategory}>Fruits</button>
                <button onClick={filterByVagatables}>Vagatables</button>
              </div>
            ) : null}
            <br />
            <button onClick={HandleSeePrise} className="prise_btn">
              Sort products by price
            </button>
            {seeDeatiles ? (
              <div className="wrapper_prise">
                <button onClick={filterByLowPrise}>low to high</button>
                <button onClick={filterByHowrise}>high to low</button>
              </div>
            ) : null}
          </div>

          <input
          className="input"
            type="text"
            placeholder="Name..."
            onChange={handleSearch}
            value={valueInpeut}
          />

          
        </div>

        {filteredProducts.length > 0 ? (
          <ul
            style={{
              justifyContent: "center",
              flexWrap: "wrap",
              listStyle: "none",
              display: "flex",
              margin: 0,
              padding: 0,
            }}
          >
            {filteredProducts.map((item) => (
              <li key={item.id} className="li_element">
                <p>
                  <span>Назва:</span> {item.name}
                </p>
                <p>
                  <span>Ціна:</span> {item.prise}
                </p>
                <p>
                  <span>Категорія:</span> {item.category}
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img src={item.image} className="Img" alt={item.name} />
                </div>
                <div className="btn_wrapper">
                  <button
                    className="btn_detailes"
                    onClick={() => HandleSeeModale(item)}
                  >
                    Деталі
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : filteredByCategory ? (
          <p>No products found in this category</p>
        ) : null}

        {CansleModale ? (
          <AboutCard
            filteredProducts={filteredProducts}
            HandleSeeModale={HandleSeeModale}
            selectedMovie={selectedMovie}
          />
        ) : null}
      </section>
    </>
  );
};

export default ProductsList;
