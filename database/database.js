import { Sequelize } from "sequelize";

const sequelizeConnection = new Sequelize("shop_dc", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    logging: false,
});

const testConnection = async () => {
    try {
        await sequelizeConnection.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

testConnection();

export default sequelizeConnection;
