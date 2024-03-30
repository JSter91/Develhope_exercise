import express from "express";
import "express-async-errors";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

import {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById,
  createImage
} from "./controllers/planets.js";

import { logIn, signUp } from "./controllers/users.js";

import multer from "multer";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads")
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }

})
const upload = multer({ storage })

const port = process.env.PORT;
const app = express();

app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"))


app.use(express.json());
app.use(morgan("dev"));

// ottenere tutti i pianeti
app.get("/api/planets", getAll);

// ottenere un pianeta specifico
app.get("/api/planets/:id", getOneById);

// aggiunge un nuovo pianeta
app.post("/api/planets", create);

// modifica un pianeta
app.put("/api/planets/:id", updateById);

// elimina un pianeta
app.delete("/api/planets/:id", deleteById);

// upload dell'immagine
app.post("/api/planets/:id/image", upload.single("image"), createImage)

app.post("/api/users/login", logIn)
app.post("/api/users/signup", signUp )


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
