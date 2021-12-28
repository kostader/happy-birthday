import React, { useState } from "react";
import Button from "@mui/material/Button";
import { getFormControlUnstyledUtilityClasses, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";
import Confetti from "react-confetti";
import Swal from "sweetalert2";

const usestyles = makeStyles((theme) => ({
  box: {
    backgroundColor: "#f48fb1",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    justifyItems: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    verticalAlign: "middle",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "25px",
  },
  button: {
    width: "50%",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    marginTop: "30px",
    padding: "0 30px",
  },
}));

export default function ContainedButton() {
  const classes = usestyles();

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("Зая, для поздравления");

  const greetMyLove = () => {
    setShow(true);
    setTitle("С днём рождения, любимая!");
    Swal.fire({
      title:
        "И пусть по жизни будут рядом лишь верные с тобой друзья, Всегда поддержит и поможет любимая твоя семья. С днем рожденья поздравляю, Счастья, радости желаю!",
      width: 700,
      padding: "3em",
      color: "#64b5f6",
      background:
        "#fff url(https://i.ibb.co/3r98HgL/Katya-Phone-Collage3-Resized.png)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://tenor.com/bwxpF.gif")
        left top
        no-repeat
      `,
    });
  };

  return (
    <Container maxWidth="sm">
      <Box className={classes.box}>
        <Paper className={classes.paper} elevation={3}>
          <h1>{title}</h1>
          <Button
            className={classes.button}
            onClick={greetMyLove}
            variant="contained"
          >
            Нажми на эту кнопку
          </Button>
          {show ? <Confetti /> : null}
        </Paper>
      </Box>
    </Container>
  );
}
