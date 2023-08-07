import * as dotenv from "dotenv";
dotenv.config();
import { Sequelize, DataTypes } from "sequelize";
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_DEPLOY}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

//checking if connection is done
sequelize
  .authenticate()
  .then(() => {
    console.log(`Database connected`);
  })
  .catch((err: Object) => {
    console.log(err);
  });

export const db = { Sequelize, sequelize, user: [], product: [] };

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//connecting to model
import { productModel } from "./models/product";
import { userModel } from "./models/user";

db.user = userModel(sequelize, DataTypes);
db.product = productModel(sequelize, DataTypes);

//exporting the module
