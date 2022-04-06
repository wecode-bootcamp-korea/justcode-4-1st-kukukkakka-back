const http = require("http");
const express = require("express");
const cors = require("cors");
// const { PrismaClient } = require("@prisma/client");
const routes = require("./routes");
const dotenv = require("dotenv");
const cors = require("cors");
const prisma = new PrismaClient();
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(routes);

app.get("/ping", (req, res) => {
  try {
    res.json({ message: "pong" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const server = http.createServer(app);
const PORT = process.env.PORT;

const start = async () => {
  try {
    server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  } catch (err) {
    console.error(err);
    await prisma.$disconnect();
  }
};

start();
