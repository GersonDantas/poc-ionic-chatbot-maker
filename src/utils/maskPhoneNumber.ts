export function maskToPhoneNumber(phoneNumber: string): string {
  phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
  phoneNumber = phoneNumber.replace(/\D/g, '');
  phoneNumber = phoneNumber.replace(/^(\d)/, '($1');
  phoneNumber = phoneNumber.replace(/(.{3})(\d)/, '$1)$2');
  phoneNumber = phoneNumber.replace(/(.{3})(\d)/, '$1 $2');
  if (phoneNumber.length > 12) {
    phoneNumber = phoneNumber.replace(/(.{4})$/, '-$1');
  }
  if (phoneNumber.length > 15) {
    phoneNumber = phoneNumber.replace(/(.)$/, '');
  }
  return phoneNumber;
}
