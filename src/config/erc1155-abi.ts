export const ERC_1155_EVENTS = [
	'event TransferSingle(address operator, address from, address to, uint256 id, uint256 value)',
	'event TransferBatch(address operator, address from, address to, uint256[] ids, uint256[] values)',
	'event ApprovalForAll(address account, address operator, bool approved)',
	'event URI(string value, uint256 id)'
]; 

export const ERC_1155_URI = ["function uri(uint256 _tokenId) view returns (string memory)"];
export const ERC_1155_BALANCE_OF = ["function balanceOf(address account, uint256 id) view returns (uint256)"];
export const ERC_1155_BALANCE_OF_BATCH = ["function balanceOfBatch(address[] accounts, uint256[] ids) view returns (uint256 [])"];
export const ERC_1155_SET_APPROVAL = ["function setApprovalForAll(address operator, bool approved)"];
export const ERC_1155_SAFE_TRANSFER_FROM = ["function safeTransferFrom(address from, address to, uint256 id, uint256 value, bytes calldata data)"];
export const ERC_1155_SAFE_BATCH_TRANSFER_FROM = ["function safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] amounts, bytes data)"];
export const ERC_1155_IS_APPROVED_ALL = ["function isApprovedForAll(address account, address operator) view returns (bool)"];
