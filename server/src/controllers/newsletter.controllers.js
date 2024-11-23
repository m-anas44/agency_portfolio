import { Newsletter } from "../models/newsletter.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const postLetter = asyncHandler(async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw new ApiError(400, "Email required");
  }

  const newLetter = await Newsletter.create({ email });
  if (!newLetter) {
    throw new ApiError(500, "Failed to create newsletter");
  }

  res
    .status(201)
    .json(
      new ApiResponse(
        201,
        newLetter,
        "User subscribed to newsletter successfully"
      )
    );
});

const getLetterEmails = asyncHandler(async (req, res) => {
  const letters = await Newsletter.find();
  if (!letters) {
    throw new ApiError(404, "No newsletters found");
  }
  res.status(200).json(new ApiResponse(200, letters, "Newsletter emails"));
});

export { postLetter, getLetterEmails };
