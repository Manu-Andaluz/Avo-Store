/* Users */

export type User = {
  email: string;
  password: string;
  name: string;
  isAdmin: Boolean;
  googleId: string | null;
};

export type UserResponse = {
  command: string;
  rowCount: number;
  oid: null;
  rows: User[];
  fields: [];
  _parsers: [];
  _types: {};
  RowCtor: null;
  rowAsArray: boolean;
};

export type UserError = {
  length: number;
  name: string;
  severity: string;
  code: string;
  detail: string;
  schema: string;
  table: string;
  constraint: string;
  file: string;
  line: string;
  routine: string;
};

/* Products */

export type Url = string;

export type TProduct = {
  id: string | number;
  name: string;
  price: number;
  image: Url;
  desciption: string;
  stock: number;
  quantity: number;
};

export type ProductResponse = {
  command: string;
  rowCount: number;
  oid: null;
  rows: TProduct[];
  fields: [];
  _parsers: [];
  _types: {};
  RowCtor: null;
  rowAsArray: boolean;
};