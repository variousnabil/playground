console.log('# Uint8Array');
// Uint8Array can only contain 0-255 range value.
// because 11111111 = 255
const array1 = new Uint8Array([1, 2, 3, 4, 2, 3, 4, 100, 2, 255, 256]);
console.log(array1);
console.log('accessing Uint8Array item =', array1[7]);

console.log('# Uint16Array');
// Uint16Array can only contain 0-65535 range value.
// because 1111111111111111 = 65535
const array2 = new Uint16Array([256, 1000, 60000, 65535, 65536]);
console.log(array2);

console.log('# buffer');
// buffer is a temporary data that being stored in computer memory (RAM).
// buffer can only contain UTF-8 value and Hexadecimal value. 
const buffer = Buffer.from('various');
console.log(`'various' =`, buffer);

const buffer2 = Buffer.from([0x76, 0x61, 0x72, 0x69, 0x6F, 0x75, 0x73, 0x6E, 0x61, 0x62, 0x69, 0x6C]);
console.log('(UTF-8) 0x76, 0x61, 0x72, 0x69, 0x6F, 0x75, 0x73, 0x6E, 0x61, 0x62, 0x69, 0x6C =', buffer2.toString());

const buffer3 = Buffer.from([9, 10, 32, 21, 34, 77]);
console.log(buffer3);
console.log('accessing array buffer item =', buffer3[2]);

const username = Buffer.from('variousnabil');
console.log(username.toString());
console.log(username.toString('hex'));
console.log(username.toString('base64'));

console.log(`'variousnabil' byte length =`, Buffer.byteLength('variousnabil'));