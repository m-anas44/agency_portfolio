import { Router } from "express";
import {
  getLetterEmails,
  postLetter,
} from "../controllers/newsletter.controllers.js";

const router = Router();
router.route("/newLetter").post(postLetter);
router.route("/getLetters").get(getLetterEmails);

export default router;
