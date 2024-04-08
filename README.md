# ERC Token Utils

This is a basic wrapper around Ethers.js with static methods for interacting with ERC-20, ERC-721, or ERC-1155 contracts.

## Basics

1. Import the protocol you want to interact with.
2. Pass in a contract address with a provider and then you can call any of the static methods.

### How To Use

```js
import {ERC20} from "erc-token-utils"
const contractAddress = "0x.....";
const provider = new ethers.JsonRpcProvider("RPC_URL_ADDRESS");
const balance = await ERC20.getName(contractAddress, provider);
const balance = await ERC20.getSymbol(contractAddress, provider);
const balance = await ERC20.getDecimals(contractAddress, provider);
const balance = await ERC20.getTotalSupply(contractAddress, provider);
const balance = await ERC20.balanceOf(contractAddress, provider);
const balance = await ERC20.transferFrom(contractAddress, provider);
```
