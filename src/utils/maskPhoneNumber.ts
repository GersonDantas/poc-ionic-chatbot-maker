export function maskToPhoneNumber(phoneNumber: string): string {
  let numberWithMask = phoneNumber;
  numberWithMask = numberWithMask.replace(/[^0-9]/g, '');
  numberWithMask = numberWithMask.replace(/\D/g, '');
  numberWithMask = numberWithMask.replace(/^(\d)/, '($1');
  numberWithMask = numberWithMask.replace(/(.{3})(\d)/, '$1)$2');
  numberWithMask = numberWithMask.replace(/(.{3})(\d)/, '$1 $2');
  if (numberWithMask.length > 12) {
    numberWithMask = numberWithMask.replace(/(.{4})$/, '-$1');
  }
  return numberWithMask;
}
