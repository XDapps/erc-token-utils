import { BigNumber } from "mathjs";
import { ethers } from "ethers";
import {
	ERC_721_BALANCE_OF,
	ERC_721_OWNER_OF_ABI,
	ERC_721_TRANSFER_FROM,
	ERC_721_SAFE_TRANSFER_FROM,
	ERC_721_APPROVE_FUNCTION,
	ERC_721_GET_APPROVED,
	ERC_721_SET_APPROVAL_FOR_ALL,
	ERC_721_IS_APPROVED_FOR_ALL,
	ERC_721_TOKEN_URI,

} from "../config/erc721-abi";

export class ERC721 {
	private constructor() {
	}

	public static async getBalanceOf(owner: string, contractAddress: string, provider: ethers.Provider): Promise<BigNumber> {
	try {
		const contract = new ethers.Contract(contractAddress, ERC_721_BALANCE_OF, provider);
		return await contract.balanceOf(owner);
	} catch (error) {
		console.error(error);
	}
	}

	public static async ownerOf(tokenId: string, contractAddress: string, provider: ethers.Provider): Promise<string> {
	try {
		const contract = new ethers.Contract(contractAddress, ERC_721_OWNER_OF_ABI, provider);
		return await contract.ownerOf(tokenId);
	} catch (error) {
		console.error(error);
	}
	}

	public static async transferFrom(from: string, to: string, tokenId: string, contractAddress: string, provider: ethers.Provider): Promise<unknown> {
	try {
		const contract = new ethers.Contract(contractAddress, ERC_721_TRANSFER_FROM, provider);
		return await contract.transferFrom(from, to, tokenId);
	} catch (error) {
		console.error(error);
	}
	}	

	public static async safeTransferFrom(from: string, to: string, tokenId: string, data: string, contractAddress: string, provider: ethers.Provider): Promise<unknown> {
	try {
		const contract = new ethers.Contract(contractAddress, ERC_721_SAFE_TRANSFER_FROM, provider);
		return await contract.safeTransferFrom(from, to, tokenId, data);
	} catch (error) {
		console.error(error);
	}
	}

	public static async approve(to: string, tokenId: string, contractAddress: string, provider: ethers.Provider): Promise<unknown> {
	try {
		const contract = new ethers.Contract(contractAddress, ERC_721_APPROVE_FUNCTION, provider);
		return await contract.approve(to, tokenId);
	} catch (error) {
		console.error(error);
	}
	}

	public static async getApproved(tokenId: string, contractAddress: string, provider: ethers.Provider): Promise<string> {
	try {
		const contract = new ethers.Contract(contractAddress, ERC_721_GET_APPROVED, provider);
		return await contract.getApproved(tokenId);
	} catch (error) {
		console.error(error);
	}
	}

	public static async setApprovalForAll(operator: string, approved: boolean, contractAddress: string, provider: ethers.Provider): Promise<unknown> {
	try {
		const contract = new ethers.Contract(contractAddress, ERC_721_SET_APPROVAL_FOR_ALL, provider);
		return await contract.setApprovalForAll(operator, approved);
	} catch (error) {
		console.error(error);
	}
	}

	public static async isApprovedForAll(owner: string, operator: string, contractAddress: string, provider: ethers.Provider): Promise<boolean> {
	try {
		const contract = new ethers.Contract(contractAddress, ERC_721_IS_APPROVED_FOR_ALL, provider);
		return await contract.isApprovedForAll(owner, operator);
	} catch (error) {
		console.error(error);
	}
	}

	public static async tokenURI(tokenId: string, contractAddress: string, provider: ethers.Provider): Promise<string> {
	try {
		const contract = new ethers.Contract(contractAddress, ERC_721_TOKEN_URI, provider);
		return await contract.tokenURI(tokenId);
	} catch (error) {
		console.error(error);
	}
	}
}