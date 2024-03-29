import express from "express";
import cors from "cors";
import GetRandomPositions from "./randomPositionsFunctionality/getRandomPositions.js";

// Setup app
const app = express();
const PORT = 5000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

// Middleware
app.use(cors());
app.use(express.json());

// Test routes
app.get("/test", (req, res) => test(req, res));
function test(req, res) {
	res.status(200).send({
		"Hello": "Hello"
	})
}

// Routes
app.post("/getRandomPositions", (req, res) => GetRandomPositions(req, res));
