import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { basePath } = req.query;

  if (!basePath) {
    return res.status(400).json({ error: "Base path is required" });
  }

  const directoryPath = path.join(process.cwd(), "public", basePath);
  try {
    const files = fs.readdirSync(directoryPath);
    const imageFiles = files.filter((file) =>
      /\.(png|jpg|jpeg|gif|webp)$/i.test(file)
    );
    res.status(200).json(imageFiles);
  } catch (error) {
    console.error("Error reading directory:", error);
    res.status(500).json({ error: "Failed to read directory" });
  }
}
