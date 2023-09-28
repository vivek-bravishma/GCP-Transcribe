import axios from "axios";

export default function routes(app) {
	app.get("/",loggerMW, (req, res) => {
		try {
			res.send('Api working. Visit "/api-docs" for api documentation.');
		} catch (error) {
			/*
          #swagger.responses[500] = {
            schema: { error: "true", message: "Internal Server Error" },
          };
      */
			console.log("/ - Error=> ", error.message);
			res.status(500).send({
				error: true,
				message: "Internal Server Error",
			});
		}
	});

	app.get("/stream-audio", async (req, res) => {
		console.log("stream-audio called");
		// const audioUrl =
		// 	"https://voicemailpoctesting.blob.core.windows.net/voicemail/nikita.wav";

		const audioUrl =
			"https://storage.googleapis.com/knf-demo-buck/nikita%20(11).wav";

		try {
			const response = await axios.get(audioUrl, {
				responseType: "stream",
			});
			const audioStream = response.data;

			res.setHeader("Content-Type", "audio/wav");

			audioStream.pipe(res);
		} catch (error) {
			/*
        #swagger.responses[500] = {
          schema: { error: "true", message: "Internal Server Error" },
        };
      */
			console.error(error);
			res.status(500).send({
				error: "true",
				message: "Internal Server Error",
			});
		}
	});
}

function loggerMW(req, res, next) {
	console.log("wassup from loggerMW ===> ");
	next();
}

/*
  #swagger.responses[201] = {
    schema: { error: "false", data: { "token": "jwtToken" } },
  };
*/
