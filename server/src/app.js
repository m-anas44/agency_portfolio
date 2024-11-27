import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors());

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Import user router
import userRouter from "./router/user.router.js";
import newsletterRouter from "./router/newsletter.router.js";

// Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/newsletters", newsletterRouter);
export { app };
