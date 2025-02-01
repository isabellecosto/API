import { DataTypes } from "sequelize";
import sequelizeConnection from "../database/database.js";
import Product from "./Product.js";

const ProductVariation = sequelizeConnection.define("ProductVariation", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    sale_price: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    size: {
        type: DataTypes.STRING,
        allowNull: false
    },
})


ProductVariation.belongsTo(Product, {
    foreignKey: {
        name: "productId",
        allowNull: false
    },
})