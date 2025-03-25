// SPDX-License-Identifier: MIT
// compiler version must be greater than or equal to 0.8.26 and less than 0.9.0
pragma solidity ^0.8.26;

contract HelloWorld {
    string private _greeting;

    constructor() {
        _greeting = "Hello World!";
    }

    function setGreeting(string memory newGreeting) public {
        _greeting = newGreeting;
    }

    function greet() public view returns (string memory) {
        return _greeting;
    }
}
