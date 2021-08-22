import React, { useState, useEffect } from "react";
import { socket } from "../services/socket";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    socket.on("products", (data) => {
      console.log(data);
    });
  }, []);

  return (
    <div className="container">
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre de Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Foto</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item: any, index: number) => (
            <tr key={index}>
              <th scope="row">{item.id}</th>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <img
                  style={{
                    objectFit: "cover",
                    width: 100 + "%",
                    height: "50px",
                  }}
                  src={item.thumbnail}
                  alt={item.title}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ProductsList;
