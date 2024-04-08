export const erc721EventsAbi = [
	'event ApprovalForAll(address owner, address operator, bool approved)',
	'event Approval(address owner, address approved, uint256 tokenId)',
	'event Transfer(address from, address to, uint256 tokenId)'
];

export const ERC_721_BALANCE_OF = ["function balanceOf(address owner) external view returns (uint256 balance)"];
export const ERC_721_OWNER_OF_ABI = ["function ownerOf(uint256 tokenId) external view returns (address owner)"];
export const ERC_721_TRANSFER_FROM = ["function transferFrom(address from,address to,uint256 tokenId)"];
export const ERC_721_SAFE_TRANSFER_FROM = ["safeTransferFrom(address from, address to, uint256 tokenId, bytes data)"];
export const ERC_721_APPROVE_FUNCTION = ["function approve(address to, uint256 tokenId) external"];
export const ERC_721_GET_APPROVED = ["function getApproved(uint256 tokenId) external view returns (address operator)"];
export const ERC_721_SET_APPROVAL_FOR_ALL = ["function setApprovalForAll(address operator, bool approved)"];
export const ERC_721_IS_APPROVED_FOR_ALL = ["function isApprovedForAll(address owner, address operator) external view returns (bool)"];
export const ERC_721_TOKEN_URI = ["function tokenURI(uint256 tokenId) public view returns (string memory)"];