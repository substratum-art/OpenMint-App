interface Input {
    indexed?: boolean
    internalType: string
    name: string
    type: string
    components?: Input[]
}

interface Output {
    internalType: string
    name: string
    type: string
}

interface ABIEntry {
    inputs?: Input[]
    stateMutability?: string
    type: string
    name?: string
    outputs?: Output[]
    anonymous?: boolean
}

interface Version {
    simpleName: string
    ABI: ABIEntry[]
    bytecode: string
}

interface VersionData {
    [key: string]: Version
}

const versionData: VersionData = {
    v0j0: {
        simpleName: 'Version 0',
        ABI: [
            { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'sender',
                        type: 'address',
                    },
                    {
                        internalType: 'uint256',
                        name: 'balance',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'needed',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'tokenId',
                        type: 'uint256',
                    },
                ],
                name: 'ERC1155InsufficientBalance',
                type: 'error',
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'approver',
                        type: 'address',
                    },
                ],
                name: 'ERC1155InvalidApprover',
                type: 'error',
            },
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'idsLength',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'valuesLength',
                        type: 'uint256',
                    },
                ],
                name: 'ERC1155InvalidArrayLength',
                type: 'error',
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'operator',
                        type: 'address',
                    },
                ],
                name: 'ERC1155InvalidOperator',
                type: 'error',
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'receiver',
                        type: 'address',
                    },
                ],
                name: 'ERC1155InvalidReceiver',
                type: 'error',
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'sender',
                        type: 'address',
                    },
                ],
                name: 'ERC1155InvalidSender',
                type: 'error',
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'operator',
                        type: 'address',
                    },
                    { internalType: 'address', name: 'owner', type: 'address' },
                ],
                name: 'ERC1155MissingApprovalForAll',
                type: 'error',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'account',
                        type: 'address',
                    },
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'operator',
                        type: 'address',
                    },
                    {
                        indexed: false,
                        internalType: 'bool',
                        name: 'approved',
                        type: 'bool',
                    },
                ],
                name: 'ApprovalForAll',
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [],
                name: 'CollectionUpdate',
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'uint256',
                        name: 'tokenId',
                        type: 'uint256',
                    },
                    {
                        indexed: false,
                        internalType: 'address',
                        name: 'fundsReceiverOverride',
                        type: 'address',
                    },
                ],
                name: 'FundsReceiverOverride',
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'previousOwner',
                        type: 'address',
                    },
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'newOwner',
                        type: 'address',
                    },
                ],
                name: 'OwnershipTransferred',
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'uint256',
                        name: 'tokenId',
                        type: 'uint256',
                    },
                    {
                        components: [
                            {
                                internalType: 'address',
                                name: 'currencyAddress',
                                type: 'address',
                            },
                            {
                                internalType: 'bool',
                                name: 'isTokenSaleActive',
                                type: 'bool',
                            },
                            {
                                internalType: 'uint8',
                                name: 'decimals',
                                type: 'uint8',
                            },
                            {
                                internalType: 'uint256',
                                name: 'tokenCost',
                                type: 'uint256',
                            },
                            {
                                internalType: 'uint256',
                                name: 'maxSupply',
                                type: 'uint256',
                            },
                            {
                                internalType: 'string',
                                name: 'tokenUri',
                                type: 'string',
                            },
                        ],
                        indexed: false,
                        internalType: 'struct RebelMint_v0j0.tokenData',
                        name: 'token',
                        type: 'tuple',
                    },
                ],
                name: 'TokenDeleted',
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        components: [
                            {
                                internalType: 'address',
                                name: 'currencyAddress',
                                type: 'address',
                            },
                            {
                                internalType: 'bool',
                                name: 'isTokenSaleActive',
                                type: 'bool',
                            },
                            {
                                internalType: 'uint8',
                                name: 'decimals',
                                type: 'uint8',
                            },
                            {
                                internalType: 'uint256',
                                name: 'tokenCost',
                                type: 'uint256',
                            },
                            {
                                internalType: 'uint256',
                                name: 'maxSupply',
                                type: 'uint256',
                            },
                            {
                                internalType: 'string',
                                name: 'tokenUri',
                                type: 'string',
                            },
                        ],
                        indexed: false,
                        internalType: 'struct RebelMint_v0j0.tokenData',
                        name: 'token',
                        type: 'tuple',
                    },
                ],
                name: 'TokenUpdate',
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'operator',
                        type: 'address',
                    },
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'from',
                        type: 'address',
                    },
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'to',
                        type: 'address',
                    },
                    {
                        indexed: false,
                        internalType: 'uint256[]',
                        name: 'ids',
                        type: 'uint256[]',
                    },
                    {
                        indexed: false,
                        internalType: 'uint256[]',
                        name: 'values',
                        type: 'uint256[]',
                    },
                ],
                name: 'TransferBatch',
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'operator',
                        type: 'address',
                    },
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'from',
                        type: 'address',
                    },
                    {
                        indexed: true,
                        internalType: 'address',
                        name: 'to',
                        type: 'address',
                    },
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: 'id',
                        type: 'uint256',
                    },
                    {
                        indexed: false,
                        internalType: 'uint256',
                        name: 'value',
                        type: 'uint256',
                    },
                ],
                name: 'TransferSingle',
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        indexed: false,
                        internalType: 'string',
                        name: 'value',
                        type: 'string',
                    },
                    {
                        indexed: true,
                        internalType: 'uint256',
                        name: 'id',
                        type: 'uint256',
                    },
                ],
                name: 'URI',
                type: 'event',
            },
            {
                inputs: [
                    { internalType: 'uint256', name: '', type: 'uint256' },
                ],
                name: 'allTokenData',
                outputs: [
                    {
                        internalType: 'address',
                        name: 'currencyAddress',
                        type: 'address',
                    },
                    {
                        internalType: 'bool',
                        name: 'isTokenSaleActive',
                        type: 'bool',
                    },
                    { internalType: 'uint8', name: 'decimals', type: 'uint8' },
                    {
                        internalType: 'uint256',
                        name: 'tokenCost',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'maxSupply',
                        type: 'uint256',
                    },
                    {
                        internalType: 'string',
                        name: 'tokenUri',
                        type: 'string',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [],
                name: 'artistName',
                outputs: [{ internalType: 'string', name: '', type: 'string' }],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'account',
                        type: 'address',
                    },
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                ],
                name: 'balanceOf',
                outputs: [
                    { internalType: 'uint256', name: '', type: 'uint256' },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    {
                        internalType: 'address[]',
                        name: 'accounts',
                        type: 'address[]',
                    },
                    {
                        internalType: 'uint256[]',
                        name: 'ids',
                        type: 'uint256[]',
                    },
                ],
                name: 'balanceOfBatch',
                outputs: [
                    { internalType: 'uint256[]', name: '', type: 'uint256[]' },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'account',
                        type: 'address',
                    },
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                    { internalType: 'uint256', name: 'value', type: 'uint256' },
                ],
                name: 'burn',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'account',
                        type: 'address',
                    },
                    {
                        internalType: 'uint256[]',
                        name: 'ids',
                        type: 'uint256[]',
                    },
                    {
                        internalType: 'uint256[]',
                        name: 'values',
                        type: 'uint256[]',
                    },
                ],
                name: 'burnBatch',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [],
                name: 'collectionDescription',
                outputs: [{ internalType: 'string', name: '', type: 'string' }],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [],
                name: 'collectionName',
                outputs: [{ internalType: 'string', name: '', type: 'string' }],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [],
                name: 'contractCode',
                outputs: [{ internalType: 'string', name: '', type: 'string' }],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    {
                        internalType: 'uint256',
                        name: 'tokenCost',
                        type: 'uint256',
                    },
                    {
                        internalType: 'address',
                        name: 'currencyAddress',
                        type: 'address',
                    },
                    {
                        internalType: 'uint256',
                        name: 'maxSupply',
                        type: 'uint256',
                    },
                    {
                        internalType: 'string',
                        name: 'tokenUri',
                        type: 'string',
                    },
                ],
                name: 'createToken',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [],
                name: 'defaultFundsReceiver',
                outputs: [
                    { internalType: 'address', name: '', type: 'address' },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [],
                name: 'deleteLastUnmintedToken',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                ],
                name: 'exists',
                outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [],
                name: 'getAllTokenDataJSON',
                outputs: [{ internalType: 'string', name: '', type: 'string' }],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [],
                name: 'getCollectionAndTokenDataJSON',
                outputs: [{ internalType: 'string', name: '', type: 'string' }],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [],
                name: 'getCollectionDataJSON',
                outputs: [{ internalType: 'string', name: '', type: 'string' }],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                ],
                name: 'getFundsReceiver',
                outputs: [
                    { internalType: 'address', name: '', type: 'address' },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                ],
                name: 'getSingleTokenDataJSON',
                outputs: [{ internalType: 'string', name: '', type: 'string' }],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [],
                name: 'getTokenCount',
                outputs: [
                    { internalType: 'uint256', name: '', type: 'uint256' },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'account',
                        type: 'address',
                    },
                    {
                        internalType: 'address',
                        name: 'operator',
                        type: 'address',
                    },
                ],
                name: 'isApprovedForAll',
                outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    { internalType: 'address', name: 'to', type: 'address' },
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                    {
                        internalType: 'uint256',
                        name: 'amount',
                        type: 'uint256',
                    },
                ],
                name: 'mint',
                outputs: [],
                stateMutability: 'payable',
                type: 'function',
            },
            {
                inputs: [],
                name: 'owner',
                outputs: [
                    { internalType: 'address', name: '', type: 'address' },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [],
                name: 'renounceOwnership',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [],
                name: 'royaltyBPS',
                outputs: [{ internalType: 'uint96', name: '', type: 'uint96' }],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                    {
                        internalType: 'uint256',
                        name: 'salePrice',
                        type: 'uint256',
                    },
                ],
                name: 'royaltyInfo',
                outputs: [
                    { internalType: 'address', name: '', type: 'address' },
                    { internalType: 'uint256', name: '', type: 'uint256' },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    { internalType: 'address', name: 'from', type: 'address' },
                    { internalType: 'address', name: 'to', type: 'address' },
                    {
                        internalType: 'uint256[]',
                        name: 'ids',
                        type: 'uint256[]',
                    },
                    {
                        internalType: 'uint256[]',
                        name: 'values',
                        type: 'uint256[]',
                    },
                    { internalType: 'bytes', name: 'data', type: 'bytes' },
                ],
                name: 'safeBatchTransferFrom',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    { internalType: 'address', name: 'from', type: 'address' },
                    { internalType: 'address', name: 'to', type: 'address' },
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                    { internalType: 'uint256', name: 'value', type: 'uint256' },
                    { internalType: 'bytes', name: 'data', type: 'bytes' },
                ],
                name: 'safeTransferFrom',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'operator',
                        type: 'address',
                    },
                    { internalType: 'bool', name: 'approved', type: 'bool' },
                ],
                name: 'setApprovalForAll',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        internalType: 'string',
                        name: '_collectionName',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: '_artistName',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: '_collectionDescription',
                        type: 'string',
                    },
                    {
                        internalType: 'address',
                        name: '_defaultFundsReceiver',
                        type: 'address',
                    },
                    {
                        internalType: 'uint96',
                        name: '_royaltyBPS',
                        type: 'uint96',
                    },
                ],
                name: 'setCollectionData',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                    {
                        internalType: 'address',
                        name: '_fundsReceiverOverride',
                        type: 'address',
                    },
                ],
                name: 'setFundsReceiverOverride',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        internalType: 'bytes4',
                        name: 'interfaceId',
                        type: 'bytes4',
                    },
                ],
                name: 'supportsInterface',
                outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [],
                name: 'totalSupply',
                outputs: [
                    { internalType: 'uint256', name: '', type: 'uint256' },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                ],
                name: 'totalSupply',
                outputs: [
                    { internalType: 'uint256', name: '', type: 'uint256' },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: 'newOwner',
                        type: 'address',
                    },
                ],
                name: 'transferOwnership',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        internalType: 'address',
                        name: '_defaultFundsReceiver',
                        type: 'address',
                    },
                    {
                        internalType: 'uint96',
                        name: '_royaltyBPS',
                        type: 'uint96',
                    },
                ],
                name: 'updateDefaultFundsReceiverAndRoyaltyBPS',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                    {
                        internalType: 'uint256',
                        name: 'tokenCost',
                        type: 'uint256',
                    },
                    {
                        internalType: 'address',
                        name: 'currencyAddress',
                        type: 'address',
                    },
                ],
                name: 'updateTokenCostAndCurrency',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                    {
                        internalType: 'bool',
                        name: 'isTokenSaleActive',
                        type: 'bool',
                    },
                ],
                name: 'updateTokenSaleStatus',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                    {
                        internalType: 'uint256',
                        name: 'newSupply',
                        type: 'uint256',
                    },
                ],
                name: 'updateTokenSupply',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                    {
                        internalType: 'string',
                        name: 'tokenUri',
                        type: 'string',
                    },
                ],
                name: 'updateTokenUri',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    { internalType: 'uint256', name: 'id', type: 'uint256' },
                ],
                name: 'uri',
                outputs: [{ internalType: 'string', name: '', type: 'string' }],
                stateMutability: 'view',
                type: 'function',
            },
        ],
        bytecode:
            '0x60c06040526004608090815263076306a360e41b60a052600690610023908261014f565b5034801561002f575f80fd5b5060408051602081019091525f815261004781610056565b5061005133610066565b610209565b6002610062828261014f565b5050565b600380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b634e487b7160e01b5f52604160045260245ffd5b600181811c908216806100df57607f821691505b6020821081036100fd57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561014a57805f5260205f20601f840160051c810160208510156101285750805b601f840160051c820191505b81811015610147575f8155600101610134565b50505b505050565b81516001600160401b03811115610168576101686100b7565b61017c8161017684546100cb565b84610103565b6020601f8211600181146101ae575f83156101975750848201515b5f19600385901b1c1916600184901b178455610147565b5f84815260208120601f198516915b828110156101dd57878501518255602094850194600190920191016101bd565b50848210156101fa57868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b6140ad806102165f395ff3fe608060405260043610610232575f3560e01c806382478db111610129578063bd85b039116100a8578063e985e9c51161006d578063e985e9c51461069b578063f242432a146106ba578063f2fde38b146106d9578063f41b86c9146106f8578063f5298aca14610729575f80fd5b8063bd85b0391461060a578063ca41920214610635578063d31af48414610654578063e2c6875c14610673578063e5326ab114610687575f80fd5b80639a741157116100ee5780639a7411571461055b578063a22cb4651461056f578063a25355951461058e578063aa7cd1be146105ad578063b9c9d93a146105d3575f80fd5b806382478db1146104d85780638da5cb5b146104f757806391c038ef146105145780639833d3b6146105335780639a6a275214610547575f80fd5b8063431d585c116101b55780635b2f515b1161017a5780635b2f515b146104695780635c44bfcb1461047d5780636b20c45414610491578063715018a6146104b057806378a89567146104c4575f80fd5b8063431d585c146103a657806347c330cc146103ba5780634e1273f4146103f15780634f558e791461041d578063526175931461044a575f80fd5b80631b2340cb116101fb5780631b2340cb146102ec5780631e1dcceb1461030b5780632a55205a1461032a5780632eb2c2d6146103685780632f7892af14610387575f80fd5b8062fdd58e1461023657806301ffc9a7146102685780630e89341c14610297578063156e29f6146102c357806318160ddd146102d8575b5f80fd5b348015610241575f80fd5b50610255610250366004613076565b610748565b6040519081526020015b60405180910390f35b348015610273575f80fd5b506102876102823660046130b3565b61076f565b604051901515815260200161025f565b3480156102a2575f80fd5b506102b66102b13660046130ce565b610793565b60405161025f9190613113565b6102d66102d1366004613125565b610845565b005b3480156102e3575f80fd5b50600554610255565b3480156102f7575f80fd5b506102d6610306366004613220565b610dab565b348015610316575f80fd5b506102b66103253660046130ce565b610ecf565b348015610335575f80fd5b506103496103443660046132cc565b611097565b604080516001600160a01b03909316835260208301919091520161025f565b348015610373575f80fd5b506102d6610382366004613378565b6110d9565b348015610392575f80fd5b506102d66103a1366004613424565b611138565b3480156103b1575f80fd5b506102b661123d565b3480156103c5575f80fd5b506103d96103d43660046130ce565b61126e565b6040516001600160a01b03909116815260200161025f565b3480156103fc575f80fd5b5061041061040b36600461344e565b6112e1565b60405161025f9190613549565b348015610428575f80fd5b506102876104373660046130ce565b5f90815260046020526040902054151590565b348015610455575f80fd5b506102d661046436600461355b565b6113ab565b348015610474575f80fd5b506102b66114a5565b348015610488575f80fd5b506102b6611531565b34801561049c575f80fd5b506102d66104ab366004613583565b61153e565b3480156104bb575f80fd5b506102d66115a2565b3480156104cf575f80fd5b50600b54610255565b3480156104e3575f80fd5b506102d66104f2366004613602565b6115b5565b348015610502575f80fd5b506003546001600160a01b03166103d9565b34801561051f575f80fd5b506102d661052e366004613630565b6116d8565b34801561053e575f80fd5b506102b6611830565b348015610552575f80fd5b506102d6611854565b348015610566575f80fd5b506102b6611ab9565b34801561057a575f80fd5b506102d6610589366004613662565b611ac4565b348015610599575f80fd5b506102d66105a836600461368c565b611ad3565b3480156105b8575f80fd5b506007546103d990600160601b90046001600160a01b031681565b3480156105de575f80fd5b506007546105f2906001600160601b031681565b6040516001600160601b03909116815260200161025f565b348015610615575f80fd5b506102556106243660046130ce565b5f9081526004602052604090205490565b348015610640575f80fd5b506102d661064f3660046132cc565b611d2e565b34801561065f575f80fd5b506102d661066e3660046136e8565b611f02565b34801561067e575f80fd5b506102b6611f7c565b348015610692575f80fd5b506102b6611f89565b3480156106a6575f80fd5b506102876106b5366004613721565b611f96565b3480156106c5575f80fd5b506102d66106d4366004613749565b611fc3565b3480156106e4575f80fd5b506102d66106f336600461379c565b612022565b348015610703575f80fd5b506107176107123660046130ce565b61209b565b60405161025f969594939291906137b5565b348015610734575f80fd5b506102d6610743366004613125565b612179565b5f818152602081815260408083206001600160a01b03861684529091529020545b92915050565b5f6001600160e01b0319821663152a902d60e11b14806107695750610769826121af565b6060600b82815481106107a8576107a86137fe565b905f5260205f20906004020160030180546107c290613812565b80601f01602080910402602001604051908101604052809291908181526020018280546107ee90613812565b80156108395780601f1061081057610100808354040283529160200191610839565b820191905f5260205f20905b81548152906001019060200180831161081c57829003601f168201915b50505050509050919050565b600b54821061086f5760405162461bcd60e51b81526004016108669061384a565b60405180910390fd5b600b8281548110610882576108826137fe565b5f918252602090912060049091020154600160a01b900460ff166108d95760405162461bcd60e51b815260206004820152600e60248201526d14d85b19481a5cc818db1bdcd95960921b6044820152606401610866565b600b82815481106108ec576108ec6137fe565b905f5260205f2090600402016002015481610912845f9081526004602052604090205490565b61091c9190613895565b111561095f5760405162461bcd60e51b815260206004820152601260248201527145786365656473206d617820737570706c7960701b6044820152606401610866565b5f600b8381548110610973576109736137fe565b5f9182526020822060049091020154600b80546001600160a01b0390921693508491869081106109a5576109a56137fe565b905f5260205f209060040201600101546109bf91906138a8565b90505f6109cb8561126e565b90506109df6003546001600160a01b031690565b6001600160a01b0316336001600160a01b031614610d0e576001600160a01b038316610ae657813414610a4b5760405162461bcd60e51b8152602060048201526014602482015273125b98dbdc9c9958dd081d985b1d59481cd95b9d60621b6044820152606401610866565b5f816001600160a01b0316346040515f6040518083038185875af1925050503d805f8114610a94576040519150601f19603f3d011682016040523d82523d5f602084013e610a99565b606091505b5050905080610ae05760405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b6044820152606401610866565b50610d0e565b604051636eb1769f60e11b8152336004820152306024820152839083906001600160a01b0383169063dd62ed3e90604401602060405180830381865afa158015610b32573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b5691906138bf565b1015610ba45760405162461bcd60e51b815260206004820152601760248201527f455243323020616c6c6f77616e636520746f6f206c6f770000000000000000006044820152606401610866565b6040516370a0823160e01b815233600482015283906001600160a01b038316906370a0823190602401602060405180830381865afa158015610be8573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c0c91906138bf565b1015610c525760405162461bcd60e51b815260206004820152601560248201527445524332302062616c616e636520746f6f206c6f7760581b6044820152606401610866565b6040516323b872dd60e01b81523360048201526001600160a01b038381166024830152604482018590528216906323b872dd906064016020604051808303815f875af1158015610ca4573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610cc891906138d6565b610d0c5760405162461bcd60e51b8152602060048201526015602482015274115490cc8c081d1c985b9cd9995c8819985a5b1959605a1b6044820152606401610866565b505b610d2886868660405180602001604052805f8152506121fe565b600b8581548110610d3b57610d3b6137fe565b905f5260205f20906004020160020154610d60865f9081526004602052604090205490565b03610da3575f600b8681548110610d7957610d796137fe565b5f91825260209091206004909102018054911515600160a01b0260ff60a01b199092169190911790555b505050505050565b610db3612259565b6103e8816001600160601b03161115610e055760405162461bcd60e51b81526020600482015260146024820152730a4def2c2d8e8f24084a0a640e8dede40d0d2ced60631b6044820152606401610866565b6001600160a01b038216610e5b5760405162461bcd60e51b815260206004820152601c60248201527f46756e64732072656365697665722063616e6e6f7420626520307830000000006044820152606401610866565b6001600160a01b038216600160601b026001600160601b038216176007556008610e858682613935565b506009610e928582613935565b50600a610e9f8482613935565b506040517f0563b49e0db45fc4d2081ffa14481cf6625855a9855e649ce091a4cda560c672905f90a15050505050565b600b546060908210610ef35760405162461bcd60e51b81526004016108669061384a565b5f610efd836122b3565b600b8481548110610f1057610f106137fe565b5f918252602090912060049091020154600160a01b900460ff16610f51576040518060400160405280600581526020016466616c736560d81b815250610f6f565b604051806040016040528060048152602001637472756560e01b8152505b610f9a600b8681548110610f8557610f856137fe565b905f5260205f209060040201600101546122b3565b610fcf600b8781548110610fb057610fb06137fe565b5f918252602090912060049091020154600160a81b900460ff166122b3565b611005600b8881548110610fe557610fe56137fe565b5f9182526020909120600490910201546001600160a01b03166014612342565b5f8881526004602052604090205461101c906122b3565b611047600b8a81548110611032576110326137fe565b905f5260205f209060040201600201546122b3565b600b8a8154811061105a5761105a6137fe565b905f5260205f209060040201600301604051602001611080989796959493929190613a74565b60408051601f198184030181529190529392505050565b6007545f9081908190612710906110b7906001600160601b0316866138a8565b6110c19190613be2565b90505f6110cd8661126e565b96919550909350505050565b336001600160a01b03861681148015906110fa57506110f88682611f96565b155b1561112b5760405163711bec9160e11b81526001600160a01b03808316600483015287166024820152604401610866565b610da386868686866124de565b600b5482106111595760405162461bcd60e51b81526004016108669061384a565b5f6111638361126e565b90506111776003546001600160a01b031690565b6001600160a01b0316336001600160a01b0316148061119e5750336001600160a01b038216145b6111d95760405162461bcd60e51b815260206004820152600c60248201526b155b985d5d1a1bdc9a5e995960a21b6044820152606401610866565b5f838152600c602090815260409182902080546001600160a01b0319166001600160a01b038616908117909155915191825284917f180115ec54349fd376fac05daf4a471cdea55da9e824dc76a6743faf5552edfb910160405180910390a2505050565b60605f611248612543565b6040516020016112589190613c01565b60408051601f1981840301815291905292915050565b600b545f9082106112915760405162461bcd60e51b81526004016108669061384a565b5f828152600c60205260409020546001600160a01b0316156112c9575f828152600c60205260409020546001600160a01b0316610769565b5050600754600160601b90046001600160a01b031690565b606081518351146113125781518351604051635b05999160e01b815260048101929092526024820152604401610866565b5f83516001600160401b0381111561132c5761132c613155565b604051908082528060200260200182016040528015611355578160200160208202803683370190505b5090505f5b84518110156113a35760208082028601015161137e90602080840287010151610748565b828281518110611390576113906137fe565b602090810291909101015260010161135a565b509392505050565b6113b3612259565b6103e8816001600160601b031611156114055760405162461bcd60e51b81526020600482015260146024820152730a4def2c2d8e8f24084a0a640e8dede40d0d2ced60631b6044820152606401610866565b6001600160a01b03821661145b5760405162461bcd60e51b815260206004820152601c60248201527f46756e64732072656365697665722063616e6e6f7420626520307830000000006044820152606401610866565b6001600160a01b038216600160601b026001600160601b038216176007556040517f0563b49e0db45fc4d2081ffa14481cf6625855a9855e649ce091a4cda560c672905f90a15050565b600980546114b290613812565b80601f01602080910402602001604051908101604052809291908181526020018280546114de90613812565b80156115295780601f1061150057610100808354040283529160200191611529565b820191905f5260205f20905b81548152906001019060200180831161150c57829003601f168201915b505050505081565b600680546114b290613812565b6001600160a01b038316331480159061155e575061155c8333611f96565b155b1561159257335b60405163711bec9160e11b81526001600160a01b0391821660048201529084166024820152604401610866565b61159d8383836125da565b505050565b6115aa612259565b6115b35f61261d565b565b6115bd612259565b600b5482106115de5760405162461bcd60e51b81526004016108669061384a565b600b82815481106115f1576115f16137fe565b905f5260205f20906004020160020154611616835f9081526004602052604090205490565b106116595760405162461bcd60e51b81526020600482015260136024820152724d696e74696e6720697320636f6d706c65746560681b6044820152606401610866565b80600b838154811061166d5761166d6137fe565b905f5260205f2090600402015f0160146101000a81548160ff0219169083151502179055505f80516020614058833981519152600b83815481106116b3576116b36137fe565b905f5260205f2090600402016040516116cc9190613c27565b60405180910390a15050565b6116e0612259565b600b5483106117015760405162461bcd60e51b81526004016108669061384a565b5f600b8481548110611715576117156137fe565b905f5260205f2090600402015f0160146101000a81548160ff02191690831515021790555081600b848154811061174e5761174e6137fe565b905f5260205f2090600402016001018190555080600b8481548110611775576117756137fe565b5f918252602082206004919091020180546001600160a01b0319166001600160a01b0393909316929092179091556117ac8261266e565b905080600b85815481106117c2576117c26137fe565b905f5260205f2090600402015f0160156101000a81548160ff021916908360ff1602179055505f80516020614058833981519152600b8581548110611809576118096137fe565b905f5260205f2090600402016040516118229190613c27565b60405180910390a150505050565b60605f61183b612543565b611843612743565b604051602001611258929190613cfc565b61185c612259565b600b5461189d5760405162461bcd60e51b815260206004820152600f60248201526e139bc81d1bdad95b9cc8195e1a5cdd608a1b6044820152606401610866565b600b545f906118ae90600190613d38565b5f818152600460205260409020549091501561191d5760405162461bcd60e51b815260206004820152602860248201527f43616e6e6f742064656c657465206120746f6b656e2077697468206d696e74656044820152676420737570706c7960c01b6064820152608401610866565b5f600b8281548110611931576119316137fe565b5f9182526020918290206040805160c081018252600490930290910180546001600160a01b038116845260ff600160a01b82048116151595850195909552600160a81b900490931690820152600182015460608201526002820154608082015260038201805491929160a0840191906119a990613812565b80601f01602080910402602001604051908101604052809291908181526020018280546119d590613812565b8015611a205780601f106119f757610100808354040283529160200191611a20565b820191905f5260205f20905b815481529060010190602001808311611a0357829003601f168201915b5050505050815250509050600b805480611a3c57611a3c613d4b565b5f8281526020812060045f199093019283020180546001600160b01b0319168155600181018290556002810182905590611a796003830182613011565b50509055817f4db95769eeb7e8089c4f9eda25e43905dc2c86a1a624382a8f9d3ca8abf41b6e82604051611aad9190613d5f565b60405180910390a25050565b60605f611248612743565b611acf338383612800565b5050565b611adb612259565b600754600160601b90046001600160a01b0316611b3a5760405162461bcd60e51b815260206004820152601760248201527f436f6c6c656374696f6e2064617461206e6f74207365740000000000000000006044820152606401610866565b5f8211611b935760405162461bcd60e51b815260206004820152602160248201527f4d617820737570706c79206d7573742062652067726561746572207468616e206044820152600360fc1b6064820152608401610866565b5f611b9d8461266e565b6040805160c0810182526001600160a01b0380881682525f6020830181815260ff808716958501958652606085018c8152608086018b815260a087018b8152600b80546001810182559652875160049096027f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db98101805496519a51909516600160a81b0260ff60a81b199a1515600160a01b026001600160a81b03199097169790981696909617949094179790971694909417815592517f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01dba83015593517f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01dbb8201559251939450909290917f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01dbc0190611cd49082613935565b5050600b80545f805160206140588339815191529250611cf690600190613d38565b81548110611d0657611d066137fe565b905f5260205f209060040201604051611d1f9190613c27565b60405180910390a15050505050565b611d36612259565b600b548210611d575760405162461bcd60e51b81526004016108669061384a565b600b8281548110611d6a57611d6a6137fe565b905f5260205f20906004020160020154811115611de55760405162461bcd60e51b815260206004820152603360248201527f4e657720737570706c792063616e6e6f7420626520686967686572207468616e6044820152722063757272656e74206d617820737570706c7960681b6064820152608401610866565b5f82815260046020526040902054811015611e685760405162461bcd60e51b815260206004820152603760248201527f4e657720737570706c792063616e6e6f74206265206c6f776572207468616e2060448201527f63757272656e746c79206d696e74656420737570706c790000000000000000006064820152608401610866565b5f828152600460205260409020548103611eba575f600b8381548110611e9057611e906137fe565b5f91825260209091206004909102018054911515600160a01b0260ff60a01b199092169190911790555b80600b8381548110611ece57611ece6137fe565b905f5260205f209060040201600201819055505f80516020614058833981519152600b83815481106116b3576116b36137fe565b611f0a612259565b600b548210611f2b5760405162461bcd60e51b81526004016108669061384a565b80600b8381548110611f3f57611f3f6137fe565b905f5260205f2090600402016003019081611f5a9190613935565b505f80516020614058833981519152600b83815481106116b3576116b36137fe565b600a80546114b290613812565b600880546114b290613812565b6001600160a01b039182165f90815260016020908152604080832093909416825291909152205460ff1690565b336001600160a01b0386168114801590611fe45750611fe28682611f96565b155b156120155760405163711bec9160e11b81526001600160a01b03808316600483015287166024820152604401610866565b610da38686868686612894565b61202a612259565b6001600160a01b03811661208f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610866565b6120988161261d565b50565b600b81815481106120aa575f80fd5b5f91825260209091206004909102018054600182015460028301546003840180546001600160a01b038516965060ff600160a01b8604811696600160a81b909604169491906120f890613812565b80601f016020809104026020016040519081016040528092919081815260200182805461212490613812565b801561216f5780601f106121465761010080835404028352916020019161216f565b820191905f5260205f20905b81548152906001019060200180831161215257829003601f168201915b5050505050905086565b6001600160a01b038316331480159061219957506121978333611f96565b155b156121a45733611565565b61159d838383612920565b5f6001600160e01b03198216636cdb3d1360e11b14806121df57506001600160e01b031982166303a24d0760e21b145b8061076957506301ffc9a760e01b6001600160e01b0319831614610769565b6001600160a01b03841661222757604051632bfa23e760e11b81525f6004820152602401610866565b60408051600180825260208201869052818301908152606082018590526080820190925290610da35f87848487612982565b6003546001600160a01b031633146115b35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610866565b60605f6122bf836129d5565b60010190505f816001600160401b038111156122dd576122dd613155565b6040519080825280601f01601f191660200182016040528015612307576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a850494508461231157509392505050565b60605f6123508360026138a8565b61235b906002613895565b6001600160401b0381111561237257612372613155565b6040519080825280601f01601f19166020018201604052801561239c576020820181803683370190505b509050600360fc1b815f815181106123b6576123b66137fe565b60200101906001600160f81b03191690815f1a905350600f60fb1b816001815181106123e4576123e46137fe565b60200101906001600160f81b03191690815f1a9053505f6124068460026138a8565b612411906001613895565b90505b6001811115612488576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110612445576124456137fe565b1a60f81b82828151811061245b5761245b6137fe565b60200101906001600160f81b03191690815f1a90535060049490941c9361248181613dc0565b9050612414565b5083156124d75760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610866565b9392505050565b6001600160a01b03841661250757604051632bfa23e760e11b81525f6004820152602401610866565b6001600160a01b03851661252f57604051626a0d4560e21b81525f6004820152602401610866565b61253c8585858585612982565b5050505050565b6060600660086009600a6125766007600c9054906101000a90046001600160a01b03166001600160a01b03166014612342565b60075461258b906001600160601b03166122b3565b6125b06125a06003546001600160a01b031690565b6001600160a01b03166014612342565b6040516020016125c69796959493929190613dd5565b604051602081830303815290604052905090565b6001600160a01b03831661260257604051626a0d4560e21b81525f6004820152602401610866565b61159d835f848460405180602001604052805f815250612982565b600380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b5f806001600160a01b0383161561273a57826001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156126bb573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906126df9190613f21565b905060128160ff1611156127355760405162461bcd60e51b815260206004820181905260248201527f43757272656e637920436f6e7472616374204e6f7420436f6d70617469626c656044820152606401610866565b610769565b50601292915050565b60408051808201909152600b81526a22746f6b656e73223a205b60a81b60208201526060905f5b600b548110156127ee578161277e82610ecf565b600b5461278d90600190613d38565b83106127a75760405180602001604052805f8152506127c2565b604051806040016040528060018152602001600b60fa1b8152505b6040516020016127d493929190613f41565b60408051601f19818403018152919052915060010161276a565b50806040516020016112589190613f67565b6001600160a01b0382166128285760405162ced3e160e81b81525f6004820152602401610866565b6001600160a01b038381165f81815260016020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0384166128bd57604051632bfa23e760e11b81525f6004820152602401610866565b6001600160a01b0385166128e557604051626a0d4560e21b81525f6004820152602401610866565b604080516001808252602082018690528183019081526060820185905260808201909252906129178787848487612982565b50505050505050565b6001600160a01b03831661294857604051626a0d4560e21b81525f6004820152602401610866565b604080516001808252602082018590528183019081526060820184905260a082019092525f6080820181815291929161253c918791859085905b61298e85858585612aac565b6001600160a01b0384161561253c57825133906001036129c757602084810151908401516129c0838989858589612abe565b5050610da3565b610da3818787878787612bdf565b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310612a135772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310612a3f576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310612a5d57662386f26fc10000830492506010015b6305f5e1008310612a75576305f5e100830492506008015b6127108310612a8957612710830492506004015b60648310612a9b576064830492506002015b600a83106107695760010192915050565b612ab884848484612cc6565b50505050565b6001600160a01b0384163b15610da35760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190612b029089908990889088908890600401613f83565b6020604051808303815f875af1925050508015612b3c575060408051601f3d908101601f19168201909252612b3991810190613fc7565b60015b612ba3573d808015612b69576040519150601f19603f3d011682016040523d82523d5f602084013e612b6e565b606091505b5080515f03612b9b57604051632bfa23e760e11b81526001600160a01b0386166004820152602401610866565b805181602001fd5b6001600160e01b0319811663f23a6e6160e01b1461291757604051632bfa23e760e11b81526001600160a01b0386166004820152602401610866565b6001600160a01b0384163b15610da35760405163bc197c8160e01b81526001600160a01b0385169063bc197c8190612c239089908990889088908890600401613fe2565b6020604051808303815f875af1925050508015612c5d575060408051601f3d908101601f19168201909252612c5a91810190613fc7565b60015b612c8a573d808015612b69576040519150601f19603f3d011682016040523d82523d5f602084013e612b6e565b6001600160e01b0319811663bc197c8160e01b1461291757604051632bfa23e760e11b81526001600160a01b0386166004820152602401610866565b612cd284848484612e02565b6001600160a01b038416612d76575f805b8351811015612d5d575f838281518110612cff57612cff6137fe565b602002602001015190508060045f878581518110612d1f57612d1f6137fe565b602002602001015181526020019081526020015f205f828254612d429190613895565b90915550612d5290508184613895565b925050600101612ce3565b508060055f828254612d6f9190613895565b9091555050505b6001600160a01b038316612ab8575f805b8351811015612df1575f838281518110612da357612da36137fe565b602002602001015190508060045f878581518110612dc357612dc36137fe565b60209081029190910181015182528101919091526040015f2080549190910390559190910190600101612d87565b506005805491909103905550505050565b8051825114612e315781518151604051635b05999160e01b815260048101929092526024820152604401610866565b335f5b8351811015612f33576020818102858101820151908501909101516001600160a01b03881615612ee5575f828152602081815260408083206001600160a01b038c16845290915290205481811015612ebf576040516303dee4c560e01b81526001600160a01b038a166004820152602481018290526044810183905260648101849052608401610866565b5f838152602081815260408083206001600160a01b038d16845290915290209082900390555b6001600160a01b03871615612f29575f828152602081815260408083206001600160a01b038b16845290915281208054839290612f23908490613895565b90915550505b5050600101612e34565b508251600103612fb35760208301515f906020840151909150856001600160a01b0316876001600160a01b0316846001600160a01b03167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628585604051612fa4929190918252602082015260400190565b60405180910390a4505061253c565b836001600160a01b0316856001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051613002929190614033565b60405180910390a45050505050565b50805461301d90613812565b5f825580601f1061302c575050565b601f0160209004905f5260205f209081019061209891905b80821115613057575f8155600101613044565b5090565b80356001600160a01b0381168114613071575f80fd5b919050565b5f8060408385031215613087575f80fd5b6130908361305b565b946020939093013593505050565b6001600160e01b031981168114612098575f80fd5b5f602082840312156130c3575f80fd5b81356124d78161309e565b5f602082840312156130de575f80fd5b5035919050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b602081525f6124d760208301846130e5565b5f805f60608486031215613137575f80fd5b6131408461305b565b95602085013595506040909401359392505050565b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f191681016001600160401b038111828210171561319157613191613155565b604052919050565b5f82601f8301126131a8575f80fd5b8135602083015f806001600160401b038411156131c7576131c7613155565b50601f8301601f19166020016131dc81613169565b9150508281528583830111156131f0575f80fd5b828260208301375f92810160200192909252509392505050565b80356001600160601b0381168114613071575f80fd5b5f805f805f60a08688031215613234575f80fd5b85356001600160401b03811115613249575f80fd5b61325588828901613199565b95505060208601356001600160401b03811115613270575f80fd5b61327c88828901613199565b94505060408601356001600160401b03811115613297575f80fd5b6132a388828901613199565b9350506132b26060870161305b565b91506132c06080870161320a565b90509295509295909350565b5f80604083850312156132dd575f80fd5b50508035926020909101359150565b5f6001600160401b0382111561330457613304613155565b5060051b60200190565b5f82601f83011261331d575f80fd5b813561333061332b826132ec565b613169565b8082825260208201915060208360051b860101925085831115613351575f80fd5b602085015b8381101561336e578035835260209283019201613356565b5095945050505050565b5f805f805f60a0868803121561338c575f80fd5b6133958661305b565b94506133a36020870161305b565b935060408601356001600160401b038111156133bd575f80fd5b6133c98882890161330e565b93505060608601356001600160401b038111156133e4575f80fd5b6133f08882890161330e565b92505060808601356001600160401b0381111561340b575f80fd5b61341788828901613199565b9150509295509295909350565b5f8060408385031215613435575f80fd5b823591506134456020840161305b565b90509250929050565b5f806040838503121561345f575f80fd5b82356001600160401b03811115613474575f80fd5b8301601f81018513613484575f80fd5b803561349261332b826132ec565b8082825260208201915060208360051b8501019250878311156134b3575f80fd5b6020840193505b828410156134dc576134cb8461305b565b8252602093840193909101906134ba565b945050505060208301356001600160401b038111156134f9575f80fd5b6135058582860161330e565b9150509250929050565b5f8151808452602084019350602083015f5b8281101561353f578151865260209586019590910190600101613521565b5093949350505050565b602081525f6124d7602083018461350f565b5f806040838503121561356c575f80fd5b6135758361305b565b91506134456020840161320a565b5f805f60608486031215613595575f80fd5b61359e8461305b565b925060208401356001600160401b038111156135b8575f80fd5b6135c48682870161330e565b92505060408401356001600160401b038111156135df575f80fd5b6135eb8682870161330e565b9150509250925092565b8015158114612098575f80fd5b5f8060408385031215613613575f80fd5b823591506020830135613625816135f5565b809150509250929050565b5f805f60608486031215613642575f80fd5b83359250602084013591506136596040850161305b565b90509250925092565b5f8060408385031215613673575f80fd5b61367c8361305b565b91506020830135613625816135f5565b5f805f806080858703121561369f575f80fd5b843593506136af6020860161305b565b92506040850135915060608501356001600160401b038111156136d0575f80fd5b6136dc87828801613199565b91505092959194509250565b5f80604083850312156136f9575f80fd5b8235915060208301356001600160401b03811115613715575f80fd5b61350585828601613199565b5f8060408385031215613732575f80fd5b61373b8361305b565b91506134456020840161305b565b5f805f805f60a0868803121561375d575f80fd5b6137668661305b565b94506137746020870161305b565b9350604086013592506060860135915060808601356001600160401b0381111561340b575f80fd5b5f602082840312156137ac575f80fd5b6124d78261305b565b60018060a01b0387168152851515602082015260ff8516604082015283606082015282608082015260c060a08201525f6137f260c08301846130e5565b98975050505050505050565b634e487b7160e01b5f52603260045260245ffd5b600181811c9082168061382657607f821691505b60208210810361384457634e487b7160e01b5f52602260045260245ffd5b50919050565b60208082526017908201527f546f6b656e20494420646f6573206e6f74206578697374000000000000000000604082015260600190565b634e487b7160e01b5f52601160045260245ffd5b8082018082111561076957610769613881565b808202811582820484141761076957610769613881565b5f602082840312156138cf575f80fd5b5051919050565b5f602082840312156138e6575f80fd5b81516124d7816135f5565b601f82111561159d57805f5260205f20601f840160051c810160208510156139165750805b601f840160051c820191505b8181101561253c575f8155600101613922565b81516001600160401b0381111561394e5761394e613155565b6139628161395c8454613812565b846138f1565b6020601f821160018114613994575f831561397d5750848201515b5f19600385901b1c1916600184901b17845561253c565b5f84815260208120601f198516915b828110156139c357878501518255602094850194600190920191016139a3565b50848210156139e057868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b5f81518060208401855e5f93019283525090919050565b5f8154613a1281613812565b600182168015613a295760018114613a3e57613a6b565b60ff1983168652811515820286019350613a6b565b845f5260205f205f5b83811015613a6357815488820152600190910190602001613a47565b505081860193505b50505092915050565b607b60f81b81526c113a37b5b2b72fb4b2111d101160991b60018201525f613a9f600e83018b6139ef565b7f222c202269735f746f6b656e5f73616c655f616374697665223a2000000000008152613acf601b82018b6139ef565b701610113a37b5b2b72fb1b7b9ba111d101160791b81529050613af5601182018a6139ef565b6f111610113232b1b4b6b0b639911d101160811b81529050613b1a60108201896139ef565b90507f222c202263757272656e63795f61646472657373223a202200000000000000008152613b4c60188201886139ef565b751116101131bab93932b73a2fb9bab838363c911d101160511b81529050613b7760168201876139ef565b711116101136b0bc2fb9bab838363c911d101160711b8152905060128101613b9f81876139ef565b6a111610113ab934911d101160a91b8152915050600b8101613bd2613bc48287613a06565b61227d60f01b815260020190565b9c9b505050505050505050505050565b5f82613bfc57634e487b7160e01b5f52601260045260245ffd5b500490565b607b60f81b81525f613c1660018301846139ef565b607d60f81b81526001019392505050565b602081525f825460018060a01b038116602084015260ff8160a01c161515604084015260ff8160a81c1660608401525060018301546080830152600283015460a083015260c08083015260e08201600384015f8154613c8581613812565b808552600182168015613c9f5760018114613cbb57613cef565b60ff1983166020870152602082151560051b8701019350613cef565b845f5260205f205f5b83811015613ce65781546020828a010152600182019150602081019050613cc4565b87016020019450505b5091979650505050505050565b607b60f81b81525f613d1160018301856139ef565b600b60fa1b8152613d2560018201856139ef565b607d60f81b815260010195945050505050565b8181038181111561076957610769613881565b634e487b7160e01b5f52603160045260245ffd5b6020815260018060a01b03825116602082015260208201511515604082015260ff604083015116606082015260608201516080820152608082015160a08201525f60a083015160c080840152613db860e08401826130e5565b949350505050565b5f81613dce57613dce613881565b505f190190565b711131b7b73a3930b1ba2fb1b7b232911d101160711b81525f613dfb601283018a613a06565b7f222c2022636f6c6c656374696f6e5f6e616d65223a20220000000000000000008152613e2b601782018a613a06565b721116101130b93a34b9ba2fb730b6b2911d101160691b81529050613e536013820189613a06565b90507f222c2022636f6c6c656374696f6e5f6465736372697074696f6e223a202200008152613e85601e820188613a06565b90507f222c202264656661756c745f66756e64735f7265636569766572223a202200008152613eb7601e8201876139ef565b72111610113937bcb0b63a3cafb13839911d101160691b81529050613edf60138201866139ef565b741116101137bbb732b92fb0b2323932b9b9911d101160591b81529050613f0960158201856139ef565b601160f91b81526001019a9950505050505050505050565b5f60208284031215613f31575f80fd5b815160ff811681146124d7575f80fd5b5f613f5e613f58613f5284886139ef565b866139ef565b846139ef565b95945050505050565b5f613f7282846139ef565b605d60f81b81526001019392505050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a0608082018190525f90613fbc908301846130e5565b979650505050505050565b5f60208284031215613fd7575f80fd5b81516124d78161309e565b6001600160a01b0386811682528516602082015260a0604082018190525f9061400d9083018661350f565b828103606084015261401f818661350f565b905082810360808401526137f281856130e5565b604081525f614045604083018561350f565b8281036020840152613f5e818561350f56fee5143caca90c39b146846a9b71d1536b644556971384a1973dbbb13edb87cdd1a26469706673582212201464948f648e9a7035aee441eccef35df6507efcf8e155ff0601806da5490b3264736f6c634300081a0033',
    },
}

export default versionData
