import React, { useContext } from "react";
// import product context
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
  // get product from product context
  const products = useContext(ProductContext);

  // get only men's and women's clothings
  const filterProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  // console.log(filterProducts);
  // console.log(products);
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          <div>
            {filterProducts.map((product) => {
              return <div key={product.id}>{product.title}</div>;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
