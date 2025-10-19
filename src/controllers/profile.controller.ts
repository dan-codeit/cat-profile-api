import { Request, Response } from "express";
import { fetchCatFact } from "../service/catFact.service";
import { getCurrentUTCTimestamp } from "../utils/time.util";

export const getProfile = async (req: Request, res: Response) => {
  try {
    const fact = await fetchCatFact();

    const response = {
      status: "success",
      user: {
        email: process.env.EMAIL || "not_set@example.com",
        name: process.env.FULL_NAME || "Unknown",
        stack: process.env.STACK || "Node.js/Express",
      },
      timestamp: getCurrentUTCTimestamp(),
      fact,
    };

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch cat fact. Please try again later.",
    });
  }
};
