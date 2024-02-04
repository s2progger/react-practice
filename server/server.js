import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import moviesRouter from "./routes/movies.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3500, () => {
  console.log("Server is running on port 3500");
});

app.get("/", (req, res) => {
  res.json({ message: "Hello, world!" });
});

app.use("/movies", moviesRouter);

export default app;
