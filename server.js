const http = require("http");
const express = require("express");
const cors = require("cors");
// const { PrismaClient } = require("@prisma/client");
const routes = require("./routes");
const dotenv = require("dotenv");

// const prisma = new PrismaClient();
const app = express();

// app.use(cors);
app.use(cors());
app.use(express.json());
app.use(routes);

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

const server = http.createServer(app);
dotenv.config();
const PORT = process.env.PORT;

const start = async () => {
  try {
    server.listen(8000, () => console.log(`Server is listening on 8000`));
  } catch (err) {
    console.error(err);
    await prisma.$disconnect();
  }
};

start();
