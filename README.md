## Building your first hook

Set up your forge file foundry project.

```shell
forge init
```

## Points Hook

1. We are going to issue points to everyone that buys a $MEME ERC20 tokens to users.
2. We are going to issue points to everyone that adds liquidity to the pool.

Anyone launching their own token can add this hook to their pool. We are just going to make sure it is an ETH/MEME pool.

## What and how of points

-- We are going to treat points as their own ERC20 token called `$POINTS` - we just mint every time we want to issue points to someone

-- Whenever someone adds liquidity, we will mint $POINTS equivalent to how much they spent 
-- Whenever someone buys purchases token for eth, we will mint $POINTS equivalent to how 20% of how much $ETH they spent








## Foundry

**Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust.**

Foundry consists of:

-   **Forge**: Ethereum testing framework (like Truffle, Hardhat and DappTools).
-   **Cast**: Swiss army knife for interacting with EVM smart contracts, sending transactions and getting chain data.
-   **Anvil**: Local Ethereum node, akin to Ganache, Hardhat Network.
-   **Chisel**: Fast, utilitarian, and verbose solidity REPL.

## Documentation

https://book.getfoundry.sh/

## Usage

### Build

```shell
$ forge build
```

### Test

```shell
$ forge test
```

### Format

```shell
$ forge fmt
```

### Gas Snapshots

```shell
$ forge snapshot
```

### Anvil

```shell
$ anvil
```

### Deploy

```shell
$ forge script script/Counter.s.sol:CounterScript --rpc-url <your_rpc_url> --private-key <your_private_key>
```

### Cast

```shell
$ cast <subcommand>
```

### Help

```shell
$ forge --help
$ anvil --help
$ cast --help
```
