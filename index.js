const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const path = require("path");
const imageSizes = require("./imageSizes");
const sharp = require("sharp");
const inputDirectory = `${__dirname}/assets/images`; // Replace with your input directory
const outputDirectory = `${__dirname}/assets/processedImages`; // Replace with your output directory

async function processImage(imagePath) {
  const filename = path.basename(imagePath);
  const image = sharp(imagePath);

  for (const size of imageSizes) {
    const { name, width, height, formatOptions } = size;
    const outputPath = path.join(
      outputDirectory,
      `${filename}-${name}.${formatOptions?.format || "jpg"}`
    );

    try {
      await image
        .clone() // Create a clone to avoid modifying the original image
        .resize(width, height, {
          fit: "inside", // Adjust fit as needed
        })
        .toFormat(formatOptions?.format || "jpg", formatOptions?.options)
        .toFile(outputPath);
      console.log(`Created ${outputPath}`);
    } catch (error) {
      console.error(`Error processing image: ${error}`);
    }
  }
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/process", async (req, res) => {
  const files = fs.readdirSync(inputDirectory);
  console.log(files);
  for (const file of files) {
    const imagePath = path.join(inputDirectory, file);
    await processImage(imagePath);
  }
  res.status(200).json({ data: "Image processed successfully" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
