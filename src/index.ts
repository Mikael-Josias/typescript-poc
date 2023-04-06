import routes from "./routes/index";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(5000, () => {
    console.log("Server started on port 5000");
})