// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {HelloWorld} from "../src/Hello.sol";

contract HelloTest is Test {
    HelloWorld public hello;

    function setUp() public {
        hello = new HelloWorld();
    }

    function test_greeting() public {
        assertEq(hello.greet(), "Hello World!");

    }

    function test_set_greeting() public {
        hello.setGreeting("Hi World!");
        assertEq(hello.greet(), "Hi World!");
    }
}
