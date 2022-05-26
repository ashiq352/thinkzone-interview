import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./signup.css";
export const SignUp = () => {
  const [item, setItem] = useState([]);
  const [data, setData] = useState({
    id: "",
    nm: "",
    num: "",
    add: "",
  });

  //   useEffect(() => {}, [data]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };
  //   console.log("data:", data);

  const handleSubmit = (e) => {
    localStorage.setItem("storeData", JSON.stringify(data));
    const items = JSON.parse(localStorage.getItem("storeData"));
    if (items) {
      setItem([...item, items]);
    }
  };
  //console.log("items:", item);

  return (
    <div>
      <form action="" className="form" onSubmit={handleSubmit}>
        <input id="id" onChange={handleChange} type="number" />
        <input id="nm" onChange={handleChange} type="text" />
        <input id="num" onChange={handleChange} type="number" />
        <input id="add" onChange={handleChange} type="text" />
        <input
          className="submit"
          onClick={handleSubmit}
          value="Submit"
          type="button"
        />
      </form>
      <div>
        {item.map((elem) => (
          <div className="showdata" key={elem.id}>
            <p>{elem.nm}-</p>
            <p>{elem.num}-</p>
            <p>{elem.add}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
