import jwt from "jsonwebtoken";
import { User } from "../../../types";

export const generatheAuthToken = (user: User) => {
  const jwtSecretKey = process.env.JWT_SECRET_KEY;
  if (!jwtSecretKey) {
    throw Error("Missing key");
  }
  const token = jwt.sign(
    {
      email: user.email,
      name: user.name,
      password: user.password,
      isAdmin: user.isAdmin,
      googleId: user.googleId,
    },
    jwtSecretKey,
    { expiresIn: "2 days" }
  );

  return token;
};
