import { DataTypes } from "sequelize";
import sequelizeConnection from "../database/database.js";
import ProductVariation from "./ProductVariation.js";
import Order from "./Order.js";

const OrderItens = sequelizeConnection.define("OrderItens", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
})

OrderItens.belongsTo(ProductVariation, {
    foreignKey: {
        name: "productVariationId",
        allowNull: false
    },
})

OrderItens.belongsTo(Order, {
    foreignKey: {
        name: "orderId",
        allowNull: false
    },
})