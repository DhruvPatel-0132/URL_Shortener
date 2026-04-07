import URL from "../models/url.model.js";
import { generateCode } from "../utils/generateCode.js";

export const createShortUrl = async (req, res) => {
  const { originalUrl, customCode } = req.body;

  const shortCode = customCode || generateCode();

  const exists = await URL.findOne({ shortCode });
  if (exists) {
    return res.status(400).json({ message: "Code already exists" });
  }

  const url = await URL.create({
    originalUrl,
    shortCode,
    user: req.user.id,
  });

  res.json({
    shortUrl: `http://localhost:3000/${shortCode}`,
  });
};

export const redirectUrl = async (req, res) => {
  const url = await URL.findOne({ shortCode: req.params.code });

  if (!url) return res.status(404).send("Not found");

  url.clicks++;
  await url.save();

  res.redirect(url.originalUrl);
};

export const getHistory = async (req, res) => {
  const data = await URL.find({ user: req.user.id });
  res.json(data);
};
