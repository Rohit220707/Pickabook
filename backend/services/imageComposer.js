import sharp from "sharp";

export async function composeImage(faceImageUrl) {
  console.log("Mock composer: returning face image directly");

  const res = await fetch(faceImageUrl);
  const faceBuffer = Buffer.from(await res.arrayBuffer());

  console.log("Composing final image...");

  const outputPath = `outputs/final-${Date.now()}.png`;

  await sharp("assets/base.png")
    .composite([
      {
        input: faceBuffer,
        top: 120,
        left: 180,
        resize: { width: 200 },
      },
    ])
    .toFile(outputPath);

  console.log("Image created:", outputPath);

  return faceImageUrl;
}
