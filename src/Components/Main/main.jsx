import { React, useState } from "react";
import "./main.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Todo from "../Todo/todo";

export default function Main() {
  const [items, setItems] = useState([
    "Walk the dog",
    "Pick up Joe",
    "Go to the supermarket",
  ]);

  const [item, setItem] = useState();

  function addItems(item) {
    setItems((previousValue) => {
      return [...previousValue, item];
    });
    setItem("");
  }

  function removeItem(itemIndex) {
    setItems((previousValue) => {
      return previousValue.filter(
        (eachItem, eachItemIndex) => eachItemIndex !== itemIndex
      );
    });
  }

  return (
    <div className="main">
      <h1 className="mainHeading">What is on the calendar today??</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        className="inputMain"
      >
        <TextField
          fullWidth
          label="Add your items!"
          id="fullWidth"
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
      </Box>
      <Button
        variant="contained"
        style={{ position: "absolute", top: "40%", left: "45%" }}
        onClick={() => addItems(item)}
      >
        Add
      </Button>
      <div className="items">
        {items.map((eachItem, index) => (
          <div>
            <Todo data={eachItem} key={index} />
            <Button
              onClick={() => {
                removeItem(index);
              }}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
