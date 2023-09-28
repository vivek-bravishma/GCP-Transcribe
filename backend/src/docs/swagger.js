import swaggerAutogen from "swagger-autogen";
import config from "../utils/config.js";
global.CONFIG = config[process.env.NODE_ENV];

const doc = {
	info: {
		version: "1.0.0",
		title: "GCP CRUD",
		description: "GCP Project",
	},
	host: CONFIG.DOCS_URL.split("//")[1],
	basePath: "/",
	schemes: [`${CONFIG.DOCS_URL.split("://")[0]}`],
	consumes: ["application/json"],
	produces: ["application/json"],
	tags: [],
	securityDefinitions: {},
	definitions: {},
};

const outputFile = "./swagger_output.json";
const endpointsFile = ["../routes.js"];

export default swaggerAutogen(outputFile, endpointsFile, doc).then((res) => {
	console.log("Api Documentation Completed");
	// console.log("res=> ", res);
});
