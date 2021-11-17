import { UserProps } from "src/types/interfaces";


class User {
  id!: string;
  password!: string;
  name!: string;
  subName?: string;
  email!: string;
  phoneNumber!: string;
  imgUserUrl?: string;
  imgMessageUrl?: string;

  constructor({
    id,
    password,
    name,
    subName,
    email,
    phoneNumber,
    imgUserUrl,
    imgMessageUrl,
  }: UserProps) {
    this.id = id;
    this.password = password;
    this.name = name;
    this.subName = subName ?? "";
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.imgUserUrl = imgUserUrl ?? "https://ionicframework.com/docs/demos/api/avatar/avatar.svg";
    this.imgMessageUrl = imgMessageUrl ?? "https://cbmstgstaging.blob.core.windows.net/content/default/chatbot-default.jpg";
  }
}

export { User };
