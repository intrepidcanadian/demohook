const address = "0x0000000000000000000000000000000000000090";
const number = BigInt(address);

// Calculate lengths
const hexLength = address.length - 2; // subtract 2 for '0x' prefix
const byteLength = hexLength / 2;      // each byte is represented by 2 hex characters
const bitLength = byteLength * 8;      // each byte is 8 bits

console.log("Address:", address);
console.log("Decimal (base 10):", number.toString(10));
console.log("Binary (base 2):", number.toString(2));
console.log("Hexadecimal (base 16):", number.toString(16));
console.log("\nLengths:");
console.log("Hex length (excluding 0x):", hexLength);
console.log("Byte length:", byteLength);
console.log("Bit length:", bitLength); 