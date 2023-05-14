import React from "react";
import "./home.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="mainHome">
      <h1 className="headingHome">Welcome to the to do list app</h1>
      <Button
        variant="outline-primary"
        className="btn1"
        onClick={() => navigate("/main")}
      >
        Get Started
      </Button>{" "}
    </div>
  );
}
