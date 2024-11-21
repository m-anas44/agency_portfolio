import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.error("Error in listening:", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log("server is running on port: ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.error("Error: ", error);
    throw error;
  });
