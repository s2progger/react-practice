import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const movies = await prisma.movies.findMany({
    select: {
      MovieID: true,
      Title: true,
      Rating: true,
      Genre: {
        select: {
          genre: true,
        },
        where: {
          genre: {
            not: "",
          },
        },
      },
    },
  });
  res.json(movies);
});

router.post("/", async (req, res) => {
  const { Title, Rating } = req.body;
  const movie = await prisma.movies.create({
    data: {
      Title,
      Rating,
    },
  });
  res.json(movie);
});

export default router;
