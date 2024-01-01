import express from "express";
import cors from "cors";
import { PORT, DOMAIN_ACEPTED} from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";

const app = express();

app.use(cors({
  origin: DOMAIN_ACEPTED,
}));
app.use(express.json());
app.use(indexRoutes);
app.use(taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
