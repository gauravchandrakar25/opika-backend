import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
const connectDb = require("./config/dbConnection");

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

//db connection
connectDb();

app.use(cors());
app.use(express.json());
app.use("/api", require("./route/user_route"));

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Opika TypeScript Server");
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
