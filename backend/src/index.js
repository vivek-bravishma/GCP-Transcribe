import config from "./utils/config.js";
global.CONFIG = config[process.env.NODE_ENV ?? "PRODUCTION"];

console.log("===========================");
console.log("env PORT=> ", process.env.PORT);
console.log("env NODE_ENV=> ", process.env.NODE_ENV);
console.log("CONFIG=> ", CONFIG);

import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import routes from "./routes.js";
import swaggerFile from "./docs/swagger_output.json" assert { type: "json" };

const port = CONFIG.PORT || 5151;
const app = express();

console.log("port================> ", port);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
	res.setHeader("Cache-Control", "no-store");
	next();
});

app.listen(port, () => console.log(`Api server running ${CONFIG.URL}`));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

routes(app);
