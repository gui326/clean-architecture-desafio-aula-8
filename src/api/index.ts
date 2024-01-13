import { ProductController } from "../controllers/product";
import { DbConnection } from "../interfaces/dbconnection";

import { Request, Response } from "express";

export class MainApi {
  private dbConnection: DbConnection;

  constructor(dbConnection: DbConnection) {
    this.dbConnection = dbConnection;
  }

  start() {
    const express = require("express");
    const bodyParser = require("body-parser");

    const app = express();
    app.use(bodyParser.json());
    const port = 3000;

    app.get("/products", async (req: Request, res: Response) => {
      res.setHeader("Content-type", "application/json");

      try {
        const allProducts = await ProductController.getAllProducts(
          this.dbConnection
        );

        res.status(200).send(allProducts);
      } catch (error) {
        res.status(400).send({ message: error });
      }
    });

    app.post("/products", async (req: Request, res: Response) => {
      res.setHeader("Content-type", "application/json");

      try {
        const { name } = req.body;

        const result = await ProductController.createProduct(
          name,
          this.dbConnection
        );

        res.status(201).send({ message: "Produto criado com sucesso." });
      } catch (error) {
        res.status(400).send({ message: error });
      }
    });

    app.get("/", async (req: Request, res: Response) => {
      return res.status(200).send({ message: "OK" });
    });

    app.listen(port, () => {
      console.log(`Clean Arch listening on port ${port}`);
    });
  }
}
