import express from "express";
import "express-async-errors";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config(); 

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(morgan("dev"));

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets: Planets = [
  { id: 1, name: "Earth" },
  { id: 2, name: "Mars" },
];

app.get("/", (req, res) => {
  res.status(200).json(planets);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});




console.log(process.env);