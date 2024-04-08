import { ethers } from "ethers";
import {
	ERC_20_NAME,
	ERC_20_SYMBOL,
	ERC_20_DECIMALS,
	ERC_20_TOTAL_SUPPLY,
	ERC_20_BALANCE_OF,
	ERC_20_TRANSFER,
	ERC_20_TRANSFER_FROM,
	ERC_20_APPROVE,
	ERC_20_ALLOWANCE,
	ERC_20_INCREASE_ALLOWANCE,
	ERC_20_DECREASE_ALLOWANCE
} from "../config/erc20-abi";
import { BigNumber } from "mathjs";
export class ERC20 {
	private constructor() {
	}
	
	public static async getName(contractAddress: string, provider: ethers.AbstractProvider): Promise<string> {
		try {
			const contract = new ethers.Contract(contractAddress, ERC_20_NAME, provider);
			return await contract.name();
		} catch (error) {
			console.error(error);
		}
	}

	public static async getSymbol(contractAddress: string, provider: ethers.AbstractProvider): Promise<string> {
		try {
			const contract = new ethers.Contract(contractAddress, ERC_20_SYMBOL, provider);
			return await contract.symbol();
		} catch (error) {
			console.error(error);
		}
	}

	public static async getDecimals(contractAddress: string, provider: ethers.AbstractProvider): Promise<number> {
		try {
			const contract = new ethers.Contract(contractAddress, ERC_20_DECIMALS, provider);
			return await contract.decimals();
		} catch (error) {
			console.error(error);
		}
	}

	public static async getTotalSupply(contractAddress: string, provider: ethers.AbstractProvider): Promise<BigNumber> {
		try {
			const contract = new ethers.Contract(contractAddress, ERC_20_TOTAL_SUPPLY, provider);
			return await contract.totalSupply();
		} catch (error) {
			console.error(error);
		}
	}

	public static async getBalanceOf(account: string, contractAddress: string, provider: ethers.Provider): Promise<BigNumber> {
		try {
			const provide = new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/your_infura_project_id");
			this.getTotalSupply(contractAddress, provide)
			const contract = new ethers.Contract(contractAddress, ERC_20_BALANCE_OF, provider);
			return await contract.balanceOf(account);
		} catch (error) {
			console.error(error);
		}
	}

	public static async transfer(to: string, value: string, contractAddress: string, provider: ethers.Provider): Promise<unknown> {
		try {
			const contract = new ethers.Contract(contractAddress, ERC_20_TRANSFER, provider);
			return await contract.transfer(to, value);
		} catch (error) {
			console.error(error);
		}
	}

	public static async transferFrom(from: string, to: string, value: string, contractAddress: string, provider: ethers.Provider): Promise<unknown> {
		try {
			const contract = new ethers.Contract(contractAddress, ERC_20_TRANSFER_FROM, provider);
			return await contract.transferFrom(from, to, value);
		} catch (error) {
			console.error(error);
		}
	}

	public static async approve(spender: string, value: string, contractAddress: string, provider: ethers.Provider): Promise<unknown> {
		try {
			const contract = new ethers.Contract(contractAddress, ERC_20_APPROVE, provider);
			return await contract.approve(spender, value);
		} catch (error) {
			console.error(error);
		}
	}

	public static async allowance(owner: string, spender: string, contractAddress: string, provider: ethers.Provider): Promise<BigNumber> {
		try {
			const contract = new ethers.Contract(contractAddress, ERC_20_ALLOWANCE, provider);
			return await contract.allowance(owner, spender);
		} catch (error) {
			console.error(error);
		}
	}

	public static async increaseAllowance(spender: string, addedValue: string, contractAddress: string, provider: ethers.Provider): Promise<unknown> {
		try {
			const contract = new ethers.Contract(contractAddress, ERC_20_INCREASE_ALLOWANCE, provider);
			return await contract.increaseAllowance(spender, addedValue);
		} catch (error) {
			console.error(error);
		}
	}

	public static async decreaseAllowance(spender: string, subtractedValue: string, contractAddress: string, provider: ethers.Provider): Promise<unknown> {
		try {
			const contract = new ethers.Contract(contractAddress, ERC_20_DECREASE_ALLOWANCE, provider);
			return await contract.decreaseAllowance(spender, subtractedValue);
		} catch (error) {
			console.error(error);
		}
	}
}