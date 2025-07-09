import express from "express";
import cors from "cors";

const app = express();
const port = 3088;

app.use(cors());
app.use(express.json());

app.get("/ping", (_req, res) => {
  console.log("PINGED");
  res.status(200);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
