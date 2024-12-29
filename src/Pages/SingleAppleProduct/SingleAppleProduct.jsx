import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Four0Four from "../Four0Four/Four0Four";
import axios from "axios";
function SingleAppleProduct() {
  const { url } = useParams();

  const [product, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://apple-react-backend.onrender.com/iphone")
      .then((response) => {
        return response.data;
      })
      .then((products) => {
        const singleProduct = products.filter(
          (Product) => Product.product_url == url
        );
        setProducts(() => singleProduct);
      })
      .catch((error) => {
        console.log("error.message");
      });
  }, []);

  if (product.length) {
    return (
      <div>
        <section className="internal-page-wrapper top-100">
          <div className="container">
            {product?.map((product) => {
              let id = product.product_url;
              let title = product.product_name;
              let img = product.Product_img;
              let Brief = product.Product_brief_description;
              let StartPrice = product.Starting_price;
              let PriceRange = product.Price_range;
              let details = product.Product_description;

              return (
                <div key={id} className="bottom-100">
                  <div className="row justify-content-center text-center bottom-50">
                    <div className="col-12">
                      <div className="title-wraper bold">{title}</div>
                      <div className="brief-description">{Brief}</div>
                    </div>
                  </div>

                  <div className="row justify-content-center text-center product-holder h-100">
                    <div className={`col-sm-12 col-md-6 my-auto`}>
                      <div className="starting-price">
                        {`Starting at ${StartPrice}`}
                      </div>
                      <div className="monthly-price">{PriceRange}</div>
                      <div className="product-details">{details}</div>
                    </div>

                    <div className={`col-sm-12 col-md-6`}>
                      <div className="prodict-image">
                        <img src={img} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return <Four0Four />;
  }
}

export default SingleAppleProduct;
