import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
);

const db = mongoose.connection;

const handleOpen = () => console.log("Connted to DB")
const handleError = (error) => console.log(`Error on DB conntion:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);