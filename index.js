const { ethers } = require('ethers');

// Calculate keccak256 hash of "Unlocked"
const hash = ethers.keccak256(ethers.toUtf8Bytes("Unlocked"));

console.log("Input string: Unlocked");
console.log("keccak256 hash:", hash);

// Convert hash to uint256 (BigInt)
const uint256Value = BigInt(hash);
console.log("uint256 value:", uint256Value.toString());

// Calculate the slot value used in the Solidity library (hash - 1)
const slotValue = uint256Value - BigInt(1);
console.log("\nSlot Representations:");
console.log("Hex:", "0x" + slotValue.toString(16));
console.log("Decimal:", slotValue.toString());
console.log("Binary:", slotValue.toString(2));

// Hook flags demonstration
console.log("\nHook Flags in Contract Address:");
const ALL_HOOK_MASK = BigInt((1 << 14) - 1);
console.log("ALL_HOOK_MASK:", ALL_HOOK_MASK.toString(2));

// Hook flags with their bit positions
const HOOK_FLAGS = {
    BEFORE_INITIALIZE_FLAG: { shift: 13, value: BigInt(1 << 13) },
    AFTER_INITIALIZE_FLAG: { shift: 12, value: BigInt(1 << 12) },
    BEFORE_ADD_LIQUIDITY_FLAG: { shift: 11, value: BigInt(1 << 11) },
    AFTER_ADD_LIQUIDITY_FLAG: { shift: 10, value: BigInt(1 << 10) },
    BEFORE_REMOVE_LIQUIDITY_FLAG: { shift: 9, value: BigInt(1 << 9) },
    AFTER_REMOVE_LIQUIDITY_FLAG: { shift: 8, value: BigInt(1 << 8) },
    BEFORE_SWAP_FLAG: { shift: 7, value: BigInt(1 << 7) },
    AFTER_SWAP_FLAG: { shift: 6, value: BigInt(1 << 6) },
    BEFORE_DONATE_FLAG: { shift: 5, value: BigInt(1 << 5) },
    AFTER_DONATE_FLAG: { shift: 4, value: BigInt(1 << 4) },
    BEFORE_SWAP_RETURNS_DELTA_FLAG: { shift: 3, value: BigInt(1 << 3) },
    AFTER_SWAP_RETURNS_DELTA_FLAG: { shift: 2, value: BigInt(1 << 2) },
    AFTER_ADD_LIQUIDITY_RETURNS_DELTA_FLAG: { shift: 1, value: BigInt(1 << 1) },
    AFTER_REMOVE_LIQUIDITY_RETURNS_DELTA_FLAG: { shift: 0, value: BigInt(1 << 0) }
};

console.log("\nFlag Values and Their Binary Representations:");
console.log("---------------------------------------------");

for (const [flagName, flag] of Object.entries(HOOK_FLAGS)) {
    console.log(`\n${flagName}:`);
    console.log(`Shift value: ${flag.shift}`);
    console.log(`Binary: ${flag.value.toString(2).padStart(14, '0')}`);
    console.log(`Hex: 0x${flag.value.toString(16)}`);
    console.log(`Decimal: ${flag.value.toString()}`);
}

// Base contract address (146 bits of zeros, leaving 14 bits for flags)
const BASE_ADDRESS = BigInt("0x0000000000000000000000000000000000000000");

console.log("\nExample Contract Addresses for Each Hook Flag:");
console.log("---------------------------------------------");

for (const [flagName, flag] of Object.entries(HOOK_FLAGS)) {
    const address = BASE_ADDRESS | flag.value;
    console.log(`\n${flagName}:`);
    console.log(`Address: 0x${address.toString(16).padStart(40, '0')}`);
    console.log(`Binary: ${address.toString(2).padStart(160, '0')}`);
}

// Example of a contract with multiple flags enabled
console.log("\nExample with multiple flags enabled (BEFORE_SWAP and AFTER_SWAP):");
const multipleFlags = BASE_ADDRESS | HOOK_FLAGS.BEFORE_SWAP_FLAG.value | HOOK_FLAGS.AFTER_SWAP_FLAG.value;
console.log(`Address: 0x${multipleFlags.toString(16).padStart(40, '0')}`);
console.log(`Binary: ${multipleFlags.toString(2).padStart(160, '0')}`); 