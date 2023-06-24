import { useContext, useEffect, useState } from "react";
import "../HomePage/HomePage.css";
import axios from "axios";
import { Cartcontext } from "../Context/Context";

const Homepage = () => {
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setdata(response.data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  },[]);
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);
  return (
    <div className="home">
      {data.map((item, index) => {
        item.quantity = 1;
        return (
          <div className="card" key={index}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <h3>$. {item.price}</h3>
            <button  className="btn btn-outline-dark" onClick={() => dispatch({ type: "ADD", payload: item })}>
              ADD TO CART
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;
