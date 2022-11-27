const express = require("express");
// const helmet = require("helmet");
// const morgan = require("morgan");
const path = require("path");
//const routes = require("./routes");

const app = express();

// app.use(helmet());

// Sets up request body JSON parsing
app.use(express.json());

// Tells express about the client folder
app.use(express.static(path.join(__dirname, "../client")));

// index html
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../client/index.html"));
});

app.get("/map", (req, res) => {
	const api = process.env.GOOGLE_MAPS_API_KEY;
	res.send(api);
});

// Sends a 404 error if no end points match the end points.
app.use((req, res) => {
	res.status(404).json({
		message: "Route Not Found",
	});
});

// Sets the PORT variable to either the port it is hosted on through Heroku OR port 500
const PORT = process.env.PORT || 5001;

// Starts listening on the PORT variable
app.listen(PORT, () => {
	console.log(`The application is running on ${PORT}`);
});