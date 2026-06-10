import Resume from "../models/Resume.js";

export const uploadResume =
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message:
            "Resume file required",
        });
      }

      const resume =
        await Resume.create({
          user: req.user._id,

          originalName:
            req.file.originalname,

          fileName:
            req.file.filename,

          filePath:
            req.file.path,
        });

      res.status(201).json({
        success: true,
        resume,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

export const getMyResumes =
  async (req, res) => {
    try {
      const resumes =
        await Resume.find({
          user: req.user._id,
        });

      res.status(200).json({
        success: true,
        resumes,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };