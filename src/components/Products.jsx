import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let r = await fetch("http://localhost:8080/Products");
      let d = await r.json();
      console.log(d);
      setProd(d);
    };
    fetchData();
  }, []);

  return (
    <div>
     <h2> Products</h2>
      <div>
        <table className="product">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>More Details</th>
            </tr>
          </thead>
          <tbody>
            {prod.map((d) => (
              <tr key={d.id}>
                <td>{d.name}</td>
                <td>{d.price}</td>
                <td><Link to={`/products/${d.id}`}>More Details</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
            
  );
};

export default Products;
