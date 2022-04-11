import express from "express";
import db from "./config/database.js";
import router from "./routes/index.js";
import cors from "cors";

const app = express();

try{
    await db.authenticate();
    console.log("Connected")
}catch (error){
    console.log("Disconnected", error)
}

app.use(cors());
app.use(express.json());
app.use('/', router);

app.listen(5000, () => console.log('running port 5000'));