import Replicate from "replicate";
import fs from "fs";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function generateStylizedFace(imagePath) {
  console.log("Mock AI: returning placeholder image");
  return "https://placehold.co/512x512/png";
}
