export const productModel = (sequelize: any, DataTypes: any) => {
  const Product = sequelize.define("product", {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      field: "id",
    },
    name: {
      type: DataTypes.STRING,
      field: "name",
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      field: "price",
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      field: "description",
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING,
      field: "image_url",
      allowNull: false,
    },
  });
  return Product;
};
