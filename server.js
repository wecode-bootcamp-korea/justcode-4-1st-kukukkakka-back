const http = require("http");
const express = require("express");
// const { PrismaClient } = require("@prisma/client");
const routes = require("./routes");
const dotenv = require("dotenv");

// const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(routes);

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

const server = http.createServer(app);
dotenv.config();
// const PORT = process.env.PORT;
const PORT = 8000;

const start = async () => {
  try {
    server.listen(8000, () => console.log(`Server is listening on ${PORT}`));
  } catch (err) {
    console.error(err);
    await prisma.$disconnect();
  }
};

start();
