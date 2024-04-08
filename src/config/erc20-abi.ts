export const erc20EventsAbi = [
	'event Transfer(address from, address to, uint256 value)',
	'event Approval(address owner, address spender, uint256 value)'
];

export const ERC_20_NAME = ["function name() view returns (string)"];
export const ERC_20_SYMBOL = ["function symbol() view returns (string)"];
export const ERC_20_DECIMALS = ["function decimals() view returns (uint8)"];
export const ERC_20_TOTAL_SUPPLY = ["function totalSupply() view returns (uint256)"];
export const ERC_20_BALANCE_OF = ["function balanceOf(address account) view returns (uint256)"];
export const ERC_20_TRANSFER = ["function transfer(address to, uint256 value)"];
export const ERC_20_TRANSFER_FROM = ["function transferFrom(address from, address to, uint256 value)"];
export const ERC_20_APPROVE = ["function approve(address spender, uint256 value)"];
export const ERC_20_ALLOWANCE = ["function allowance(address owner, address spender) view returns (uint256)"];
export const ERC_20_INCREASE_ALLOWANCE = ["function increaseAllowance(address spender, uint256 addedValue)"];
export const ERC_20_DECREASE_ALLOWANCE = ["function decreaseAllowance(address spender, uint256 subtractedValue)"];
