import { BigNumber } from "mathjs";
import { ethers } from "ethers";
import {
	ERC_1155_URI,
	ERC_1155_BALANCE_OF,
	ERC_1155_BALANCE_OF_BATCH,
	ERC_1155_SET_APPROVAL,
	ERC_1155_SAFE_TRANSFER_FROM,
	ERC_1155_SAFE_BATCH_TRANSFER_FROM,
	ERC_1155_IS_APPROVED_ALL,
} from "../config/erc1155-abi";

export class ERC1155 {

	private constructor() {
	}

	public static async uri(tokenId: string, contractAddress: string, provider: ethers.Provider): Promise<string> {
		try {
			const contract = new ethers.Contract(contractAddress, ERC_1155_URI, provider);
			return await contract.uri(tokenId);
		} catch (error) {
			console.error(error);
		}
	}

	public static async balanceOf(addressToCheck: string, tokenId: string, contractAddress: string, provider: ethers.Provider): Promise<BigNumber> {
		try {
			const contract = new ethers.Contract(contractAddress, ERC_1155_BALANCE_OF, provider);
			return await contract.balanceOf(addressToCheck, tokenId);
		} catch (error) {
			console.error(error);
		}
	}

	public static async balanceOfBatch(addresses: string[], tokenIds: string[], contractAddress: string, provider: ethers.Provider): Promise<BigNumber[]> {
		try {
			const contract = new ethers.Contract(contractAddress, ERC_1155_BALANCE_OF_BATCH, provider);
			return await contract.balanceOfBatch(addresses, tokenIds);
		} catch (error) {
			console.error(error);
		}
	}

	public static async setApprovalForAll(operator: string, approved: boolean, contractAddress: string, signer: ethers.Signer): Promise<unknown> {
		try {
			const contract = new ethers.Contract(contractAddress, ERC_1155_SET_APPROVAL, signer);
			return await contract.setApprovalForAll(operator, approved);
		} catch (error) {
			console.error(error);
		}
	}

	public static async safeTransferFrom(from: string, to: string, tokenId: string, value: string, data: string, contractAddress: string, signer: ethers.Signer): Promise<unknown> {
		try {
			const contract = new ethers.Contract(contractAddress, ERC_1155_SAFE_TRANSFER_FROM, signer);
			return await contract.safeTransferFrom(from, to, tokenId, value, data);
		} catch (error) {
			console.error(error);
		}
	}

	public static async safeBatchTransferFrom(from: string, to: string, tokenIds: string[], values: string[], data: string, contractAddress: string, signer: ethers.Signer): Promise<unknown> {
		try {
			const contract = new ethers.Contract(contractAddress, ERC_1155_SAFE_BATCH_TRANSFER_FROM, signer);
			return await contract.safeBatchTransferFrom(from, to, tokenIds, values, data);
		} catch (error) {
			console.error(error);
		}
	}

	public static async isApprovedForAll(account: string, operator: string, contractAddress: string, provider: ethers.Provider): Promise<boolean> {
		try {
			const contract = new ethers.Contract(contractAddress, ERC_1155_IS_APPROVED_ALL, provider);
			return await contract.isApprovedForAll(account, operator);
		} catch (error) {
			console.error(error);
		}
	}
}