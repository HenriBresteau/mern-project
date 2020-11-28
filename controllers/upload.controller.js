const UserModel = require("../models/user.model");
const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);

module.exports.uploadProfil = async (req, res) => {
  try {
    if (
      //Format de l'image correct ?
      req.file.detectedMimeType !== "image/jpg" &&
      req.file.detectedMimeType !== "image/png" &&
      req.file.detectedMimeType !== "image/jpeg"
    ) {
      throw Error("Invalid file");
    }
    if (req.file.size > 500000) {
      throw Error("max size");
    }
  } catch (error) {
    return res.satuts(201).json(error);
  }

  const fileName= req.body.name +'.jpg';
  await pipeline(
      req.file.stream,
      fs.createWriteStream(
          `${__dirname}/../client/publics/uploads/profil/${fileName}`
      )
  )
};
