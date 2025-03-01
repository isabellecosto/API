import express from "express";
import User from "./models/User.js";
import Order from "./models/Order.js";
import Product from "./models/Product.js";
import cors from "cors";
import syncTableDatabase from "./database/sync-table-database.js";

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.get("/users", async (request, response) => {
  const user = await User.findAll();
  return response.status(200).json(user);
});

app.post("/user", async (request, response) => {
  try {
    const { username, email, password } = request.body;
    const user = await Product.create({ username, email, password });
    return response
      .status(200)
      .json({ message: `Usuário cadastrado com sucesso`, data: user });
  } catch (error) {
    return response
      .status(500)
      .json(`Não foi possível cadastrar o usuário: ${error.message}`);
  };
});

app.get("/products", async (request, response) => {
  const products = await Product.findAll();
  return response.status(200).json(products);
});

app.get("/product/:id", async (request, response) => {
  const products = await Product.findByPk(request.params.id);
  return response.status(200).json(products);
});

app.post("/product", async (request, response) => {
  try {
    const { name, brand, description } = request.body;
    const product = await Product.create({ name, brand, description });
    return response
      .status(200)
      .json({ message: `Produto cadastrado com sucesso`, data: product });
  } catch (error) {
    return response
      .status(500)
      .json(`Não foi possível cadastrar o produto ${error.message}`);
  }
});

app.delete("/product/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json("Produto não encontrado");
    }
    await product.destroy();
    return res.status(200).json("Produto deletado com sucesso!");
  } catch (error) {
    return res.status(500).json(`Erro ao deletar o produto: ${error.message}`);
  }
});

app.put("/product/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findOne({ where: { id: productId } });
    if (!product) {
      return res.status(404).json("Produto não encontrado");
    } 
    const { brand, name, description } = req.body;
    product.set({
      brand,
      name,
      description,
    })
    await product.save();
    return res.status(200).json("Produto atualizado com sucesso!");
  } catch (error) {
    return res.status(500).json(`Erro ao atualizar o produto: ${error.message}`);
  }
})

const initServer = async () => {
  try {
    await syncTableDatabase();
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
    console.log("Database synced");
  } catch (error) {
    console.error("Unable to sync the database:", error);
  }
};

initServer();
