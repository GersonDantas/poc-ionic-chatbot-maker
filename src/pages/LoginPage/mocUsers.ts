import { User } from "src/store/dto";

export const users: User[] = [
  new User({
    id: "01",
    password: "12345",
    name: "Suri",
    subName: "dantas dos santos",
    email: "suri@gmail.com",
    phoneNumber: "(84) 9969-9876",
    // imgUserUrl: "https://ionicframework.com/docs/demos/api/avatar/avatar.svg",
    // imgMessageUrl: "https://ionicframework.com/docs/demos/api/avatar/avatar.svg"
  }),
];
