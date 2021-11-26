const returnTheFirstName = (fullName: string | undefined): string =>
  fullName?.split(" ").slice(0, 1).join(" ") ?? "";

const returnTheSurname = (fullName: string | undefined): string =>
  fullName?.split(" ").slice(1).join(" ") ?? "";

export {returnTheFirstName, returnTheSurname}
