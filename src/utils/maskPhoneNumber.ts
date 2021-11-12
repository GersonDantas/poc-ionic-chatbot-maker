export function maskToPhoneNumber(phoneNumber: string): string {
    phoneNumber = phoneNumber.replace(/\D/g, "")
    phoneNumber = phoneNumber.replace(/^(\d)/, "($1")
    phoneNumber = phoneNumber.replace(/(.{3})(\d)/, "$1)$2")
    phoneNumber = phoneNumber.replace(/(.{3})(\d)/, "$1 $2")
    if (phoneNumber.length === 9) {
        phoneNumber = phoneNumber.replace(/(.{1})$/, "-$1")
    } else if (phoneNumber.length === 10) {
        phoneNumber = phoneNumber.replace(/(.{2})$/, "-$1")
    } else if (phoneNumber.length === 11) {
        phoneNumber = phoneNumber.replace(/(.{3})$/, "-$1")
    } else if (phoneNumber.length === 12) {
        phoneNumber = phoneNumber.replace(/(.{4})$/, "-$1")
    } else if (phoneNumber.length > 12) {
        phoneNumber = phoneNumber.replace(/(.{4})$/, "-$1")
    }
    return phoneNumber;
}