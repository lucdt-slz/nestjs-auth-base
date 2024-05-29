export type UserModel = {
  id: string;
  email: string;
  fullName: string;
};
export type RequestsModel = Request & {
  user: UserModel;
};
