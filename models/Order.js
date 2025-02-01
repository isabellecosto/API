import { DataTypes } from "sequelize";
import sequelizeConnection from "../database/database.js";
import User from "./User.js";

const Order = sequelizeConnection.define("Order", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
})

Order.belongsTo(User, { 
    foreignKey: {
        name: "user_id",
        allowNull: false
    } 
});

export default Order;