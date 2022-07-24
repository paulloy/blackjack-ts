import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

if (!process.env.PORT) process.exit(1);

const PORT: number = parseInt(process.env.PORT as string);

const app = express();

/*
 *   App config
 */
app.use(helmet());
app.use(cors());
app.use(express.json());

/*
 *   Server
 */
app.listen(PORT, () => {
  console.log(`Riser Friends! Welcome to the banter show at port ${PORT}`);
});
