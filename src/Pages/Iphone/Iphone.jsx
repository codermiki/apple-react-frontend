import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Iphone() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/iphone")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setProducts(() => data);
      })
      .catch((error) => {
        setError(() => error.message);
      });
  }, []);

  if (error) {
    return <div className="text-center">Page is Temporary Not Available</div>;
  }

  return (
    <div>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold">Iphones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          {products?.map((product, index) => {
            let id = product.Product_id;
            let title = product.product_name;
            let img = product.Product_img;
            let Brief = product.Product_brief_description;
            let StartPrice = product.Starting_price;
            let PriceRange = product.Price_range;
            let productPage = `/iphone/${product.product_url}`; //iphone/iphone11pro

            let order1 = index % 2 === 0 ? 1 : 2; //1//2//1
            let order2 = index % 2 === 0 ? 2 : 1; //2//1//2

            return (
              <div
                key={id}
                className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
              >
                <div
                  className={`col-sm-12 col-md-6 my-auto order-md-${order1}`}
                >
                  <div className="product-title">{title}</div>
                  <div className="product-brief">{Brief}</div>
                  <div className="starting-price">
                    {`Starting at ${StartPrice}`}
                  </div>
                  <div className="monthly-price">{PriceRange}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={productPage}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`col-sm-12 col-md-6 order-md-${order2}`}>
                  <div className="prodict-image">
                    <img src={img} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
export default Iphone;
