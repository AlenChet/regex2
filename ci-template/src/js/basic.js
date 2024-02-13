export function cleanPhoneNumber(phoneNumber) {
  const digits = phoneNumber.split(/[^\d]+/g).join('');
  return `+${digits.length === 11 ? '7'.concat(digits.slice(1)) : digits}`;
}