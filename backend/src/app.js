import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/authRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";

const app = express();

const __filename = fileURLToPath(
  import.meta.url
);

const __dirname = path.dirname(
  __filename
);

app.use(cors());
app.use(express.json());

app.use(
  "/uploads",
  express.static(
    path.join(
      __dirname,
      "../uploads"
    )
  )
);

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/resumes",
  resumeRoutes
);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message:
      "AI Interview Platform API",
  });
});

export default app;