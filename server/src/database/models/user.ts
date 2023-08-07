export const userModel = (sequelize: any, DataTypes: any) => {
  const User = sequelize.define(
    "users",
    {
      email: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        field: "email",
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "name",
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "password",
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      googleId: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
  return User;
};
