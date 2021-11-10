class User {
  private name: string;
  private subName?: string;
  private email: string;
  private phoneNumber: string;

  constructor(name: string, subName: string, email: string, phoneNumber: string) {
    this.name = name;
    this.subName = subName;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}

export {User}
