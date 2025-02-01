import { DataTypes } from "sequelize";
import sequelizeConnection from "../database/database.js";

const Product = sequelizeConnection.define("Product", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stock: {            
        type: DataTypes.INTEGER,
        allowNull: false
    },
})

export default Product;