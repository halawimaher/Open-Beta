const router = require("express").Router();
import initializeDatabase from "../src/controller";
import multer from "multer";
require("dotenv").config();

const multerStorage = multer.diskStorage({
  destination: "./public/images",
  filename: (req, file, cb) => {
    const { fieldname, originalname } = file;
    const date = Date.now();
    // filename will be: image-1345923023436343-filename.png
    const filename = `${fieldname}-${date}-${originalname}`;
    cb(null, filename);
  },
});

const upload = multer({ storage: multerStorage });

const start = async () => {
  const controller = await initializeDatabase();

  //Experience
  router.get("/", async (req, res) => {
    try {
      const expList = await controller.getExperienceList();
      res.send({
        success: true,
        expList,
      });
    } catch (error) {
      res.status(500).send("Server Error");
    }
  });

  //Experience
  router.get("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const experience = await controller.getExperienceByID(id);
      res.send({
        success: true,
        experience,
      });
    } catch (error) {
      res.status(500).send("Server Error");
    }
  });

  //Experience
  router.post("/new", upload.single("image"), async (req, res) => {
    try {
      const { role, company, start, end } = req.body;
      const image = req.file && req.file.filename;
      // console.log(role, company, start, end, image);
      const experience = await controller.createExperience(
        role,
        company,
        start,
        end,
        image
      );
      res.send({
        success: true,
        experience,
      });
    } catch (error) {
      res.status(500).send("Server Error");
    }
    // console.log("hhhhhhhhhhhhhhh");
  });

  //Experience
  router.delete("/delete/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const experience = await controller.deleteExperience(id);
      res.send({
        success: true,
        experience,
      });
    } catch (error) {
      res.status(500).send("Server Error");
    }
  });

  //Experience
  router.patch("/update/:id", upload.single("image"), async (req, res) => {
    try {
      const id = req.params.id;
      const { role, company, start, end } = req.body;
      const image = req.file && req.file.filename;
      // console.log(role, company, start, end, image);

      const experience = await controller.updateExperience(
        id,
        role,
        company,
        start,
        end,
        image
      );
      res.send({
        success: true,
        experience,
      });
    } catch (error) {
      res.status(500).send("Server Error");
    }
  });
};
start();

module.exports = router;
