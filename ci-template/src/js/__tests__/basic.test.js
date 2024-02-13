import { cleanPhoneNumber } from '../basic';

test('Clean phone number', () => {
    expect(cleanPhoneNumber('8 (927) 000-00-00')).toBe('+79270000000');
    expect(cleanPhoneNumber('+79600000000')).toBe('+79600000000');
    expect(cleanPhoneNumber('7 960 000 00 00')).toBe('+79600000000');
    expect(cleanPhoneNumber('+86 000 000 0000')).toBe('+860000000000');
});
