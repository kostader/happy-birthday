import "./App.css";
import React, { useState } from "react";
import { Button } from "@mui/material";
import Confetti from "react-confetti";
import Swal from "sweetalert2";



export default function App() {
  const [show, setShow] = useState(false)

  const greet = () => {
    setShow(true)
    Swal.fire({
      title:
        "И пусть по жизни будут рядом лишь верные с тобой друзья, Всегда поддержит и поможет любимая твоя семья. С днем рожденья поздравляю, Счастья, радости желаю!",
      // width: 700,
      padding: "3em",
      color: "#3a73d7",
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://tenor.com/bwxpF.gif")
        left top
        no-repeat
      `,
    });
  };


  return (
    <>
      <div className="App">
        <img
          src="https://res.cloudinary.com/dppewyhyo/image/upload/v1654509083/happy-birthday2_elz6tn.jpg"
          alt="Happy Birthday"
          width="400px"
        />
        <Button
          variant="text"
          color="inherit"
          onClick={greet}
        >
          Push the button
        </Button>
      </div>
      {show && <Confetti />}
    </>
  );
}
