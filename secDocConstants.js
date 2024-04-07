import { create } from "ipfs-client";

export const ipfsClient = create({
  http: "/ip4/127.0.0.1/tcp/5001",
});

export const ipfsGateway = "http://127.0.0.1:8080/ipfs/";

export const contractAddress = "0xb3c5212b268f801B02819883937D6bBB450B6bb4";

export const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from_sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "contractId",
        type: "address",
      },
    ],
    name: "ReturnContrctId",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "status",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "address",
        name: "opadd",
        type: "address",
      },
    ],
    name: "returnLoginStatus",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_organization",
        type: "string",
      },
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_position",
        type: "string",
      },
    ],
    name: "addOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "address",
        name: "orgAdd",
        type: "address",
      },
      {
        internalType: "string",
        name: "location",
        type: "string",
      },
    ],
    name: "addOrganization",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "documentArray",
    outputs: [
      {
        internalType: "string",
        name: "cidValue",
        type: "string",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "docName",
        type: "string",
      },
      {
        internalType: "string",
        name: "time",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "foundDoc",
    outputs: [
      {
        internalType: "string",
        name: "cidValue",
        type: "string",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "docName",
        type: "string",
      },
      {
        internalType: "string",
        name: "time",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllOperators",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "organization",
            type: "string",
          },
          {
            internalType: "address",
            name: "userAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "position",
            type: "string",
          },
          {
            components: [
              {
                internalType: "string",
                name: "cidValue",
                type: "string",
              },
              {
                internalType: "address",
                name: "sender",
                type: "address",
              },
              {
                internalType: "string",
                name: "description",
                type: "string",
              },
              {
                internalType: "string",
                name: "docName",
                type: "string",
              },
              {
                internalType: "string",
                name: "time",
                type: "string",
              },
            ],
            internalType: "struct secureDocument.Document[]",
            name: "documents",
            type: "tuple[]",
          },
        ],
        internalType: "struct secureDocument.Operator[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "getDocuments",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "cidValue",
            type: "string",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "docName",
            type: "string",
          },
          {
            internalType: "string",
            name: "time",
            type: "string",
          },
        ],
        internalType: "struct secureDocument.Document[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "org",
        type: "string",
      },
    ],
    name: "getOperators",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "organization",
            type: "string",
          },
          {
            internalType: "address",
            name: "userAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "position",
            type: "string",
          },
          {
            components: [
              {
                internalType: "string",
                name: "cidValue",
                type: "string",
              },
              {
                internalType: "address",
                name: "sender",
                type: "address",
              },
              {
                internalType: "string",
                name: "description",
                type: "string",
              },
              {
                internalType: "string",
                name: "docName",
                type: "string",
              },
              {
                internalType: "string",
                name: "time",
                type: "string",
              },
            ],
            internalType: "struct secureDocument.Document[]",
            name: "documents",
            type: "tuple[]",
          },
        ],
        internalType: "struct secureDocument.Operator",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getOperatorss",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "organization",
            type: "string",
          },
          {
            internalType: "address",
            name: "userAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "position",
            type: "string",
          },
          {
            components: [
              {
                internalType: "string",
                name: "cidValue",
                type: "string",
              },
              {
                internalType: "address",
                name: "sender",
                type: "address",
              },
              {
                internalType: "string",
                name: "description",
                type: "string",
              },
              {
                internalType: "string",
                name: "docName",
                type: "string",
              },
              {
                internalType: "string",
                name: "time",
                type: "string",
              },
            ],
            internalType: "struct secureDocument.Document[]",
            name: "documents",
            type: "tuple[]",
          },
        ],
        internalType: "struct secureDocument.Operator",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOrganization",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "orgName",
            type: "string",
          },
          {
            internalType: "address",
            name: "orgAddress",
            type: "address",
          },
          {
            internalType: "string[]",
            name: "members",
            type: "string[]",
          },
          {
            internalType: "string",
            name: "location",
            type: "string",
          },
        ],
        internalType: "struct secureDocument.Organizations[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_cidValue",
        type: "string",
      },
    ],
    name: "getShares",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "string",
            name: "time",
            type: "string",
          },
          {
            internalType: "string",
            name: "comment",
            type: "string",
          },
        ],
        internalType: "struct secureDocument.Shares[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "i_owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orgadd",
        type: "address",
      },
    ],
    name: "isAvailable",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "add",
        type: "address",
      },
    ],
    name: "operatorFinder",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "organization",
            type: "string",
          },
          {
            internalType: "address",
            name: "userAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "position",
            type: "string",
          },
          {
            components: [
              {
                internalType: "string",
                name: "cidValue",
                type: "string",
              },
              {
                internalType: "address",
                name: "sender",
                type: "address",
              },
              {
                internalType: "string",
                name: "description",
                type: "string",
              },
              {
                internalType: "string",
                name: "docName",
                type: "string",
              },
              {
                internalType: "string",
                name: "time",
                type: "string",
              },
            ],
            internalType: "struct secureDocument.Document[]",
            name: "documents",
            type: "tuple[]",
          },
        ],
        internalType: "struct secureDocument.Operator",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "add",
        type: "address",
      },
    ],
    name: "operatorLogin",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "operators",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "organization",
        type: "string",
      },
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "position",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "operatorsArray",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "organization",
        type: "string",
      },
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "position",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "organizationAvailable",
    outputs: [
      {
        internalType: "string",
        name: "orgName",
        type: "string",
      },
      {
        internalType: "address",
        name: "orgAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "location",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "hashedDoc",
        type: "string",
      },
    ],
    name: "presenceChecker",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "string",
        name: "_cidValue",
        type: "string",
      },
      {
        internalType: "string",
        name: "_time",
        type: "string",
      },
      {
        internalType: "string",
        name: "comment",
        type: "string",
      },
    ],
    name: "sendDocument",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_cidValue",
        type: "string",
      },
      {
        internalType: "string",
        name: "_time",
        type: "string",
      },
      {
        internalType: "string",
        name: "comment",
        type: "string",
      },
      {
        internalType: "string",
        name: "_docName",
        type: "string",
      },
    ],
    name: "storeDocument",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "orgadd",
        type: "address",
      },
    ],
    name: "testingAddress",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "orgName",
            type: "string",
          },
          {
            internalType: "address",
            name: "orgAddress",
            type: "address",
          },
          {
            internalType: "string[]",
            name: "members",
            type: "string[]",
          },
          {
            internalType: "string",
            name: "location",
            type: "string",
          },
        ],
        internalType: "struct secureDocument.Organizations",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "usersMapping",
    outputs: [
      {
        internalType: "address",
        name: "userAddres",
        type: "address",
      },
      {
        internalType: "string",
        name: "userType",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_cid",
        type: "string",
      },
    ],
    name: "verifyDocument",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

// export const abi = [
//   {
//     "inputs": [],
//     "stateMutability": "nonpayable",
//     "type": "constructor"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": false,
//         "internalType": "address",
//         "name": "from_sender",
//         "type": "address"
//       },
//       {
//         "indexed": false,
//         "internalType": "address",
//         "name": "contractId",
//         "type": "address"
//       }
//     ],
//     "name": "ReturnContrctId",
//     "type": "event"
//   },
//   {
//     "anonymous": false,
//     "inputs": [
//       {
//         "indexed": false,
//         "internalType": "bool",
//         "name": "status",
//         "type": "bool"
//       },
//       {
//         "indexed": false,
//         "internalType": "address",
//         "name": "opadd",
//         "type": "address"
//       }
//     ],
//     "name": "returnLoginStatus",
//     "type": "event"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "string",
//         "name": "_name",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "_organization",
//         "type": "string"
//       },
//       {
//         "internalType": "address",
//         "name": "_userAddress",
//         "type": "address"
//       },
//       {
//         "internalType": "string",
//         "name": "_position",
//         "type": "string"
//       }
//     ],
//     "name": "addOperator",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "string",
//         "name": "name",
//         "type": "string"
//       },
//       {
//         "internalType": "address",
//         "name": "orgAdd",
//         "type": "address"
//       },
//       {
//         "internalType": "string",
//         "name": "location",
//         "type": "string"
//       }
//     ],
//     "name": "addOrganization",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "name": "documentArray",
//     "outputs": [
//       {
//         "internalType": "string",
//         "name": "cidValue",
//         "type": "string"
//       },
//       {
//         "internalType": "address",
//         "name": "sender",
//         "type": "address"
//       },
//       {
//         "internalType": "string",
//         "name": "description",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "docName",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "time",
//         "type": "string"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "string",
//         "name": "",
//         "type": "string"
//       }
//     ],
//     "name": "foundDoc",
//     "outputs": [
//       {
//         "internalType": "string",
//         "name": "cidValue",
//         "type": "string"
//       },
//       {
//         "internalType": "address",
//         "name": "sender",
//         "type": "address"
//       },
//       {
//         "internalType": "string",
//         "name": "description",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "docName",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "time",
//         "type": "string"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "getAllOperators",
//     "outputs": [
//       {
//         "components": [
//           {
//             "internalType": "string",
//             "name": "name",
//             "type": "string"
//           },
//           {
//             "internalType": "string",
//             "name": "organization",
//             "type": "string"
//           },
//           {
//             "internalType": "address",
//             "name": "userAddress",
//             "type": "address"
//           },
//           {
//             "internalType": "string",
//             "name": "position",
//             "type": "string"
//           },
//           {
//             "components": [
//               {
//                 "internalType": "string",
//                 "name": "cidValue",
//                 "type": "string"
//               },
//               {
//                 "internalType": "address",
//                 "name": "sender",
//                 "type": "address"
//               },
//               {
//                 "internalType": "string",
//                 "name": "description",
//                 "type": "string"
//               },
//               {
//                 "internalType": "string",
//                 "name": "docName",
//                 "type": "string"
//               },
//               {
//                 "internalType": "string",
//                 "name": "time",
//                 "type": "string"
//               }
//             ],
//             "internalType": "struct secureDocument.Document[]",
//             "name": "documents",
//             "type": "tuple[]"
//           }
//         ],
//         "internalType": "struct secureDocument.operator[]",
//         "name": "",
//         "type": "tuple[]"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "userAddress",
//         "type": "address"
//       }
//     ],
//     "name": "getDocuments",
//     "outputs": [
//       {
//         "components": [
//           {
//             "internalType": "string",
//             "name": "cidValue",
//             "type": "string"
//           },
//           {
//             "internalType": "address",
//             "name": "sender",
//             "type": "address"
//           },
//           {
//             "internalType": "string",
//             "name": "description",
//             "type": "string"
//           },
//           {
//             "internalType": "string",
//             "name": "docName",
//             "type": "string"
//           },
//           {
//             "internalType": "string",
//             "name": "time",
//             "type": "string"
//           }
//         ],
//         "internalType": "struct secureDocument.Document[]",
//         "name": "",
//         "type": "tuple[]"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "string",
//         "name": "org",
//         "type": "string"
//       }
//     ],
//     "name": "getOperators",
//     "outputs": [
//       {
//         "components": [
//           {
//             "internalType": "string",
//             "name": "name",
//             "type": "string"
//           },
//           {
//             "internalType": "string",
//             "name": "organization",
//             "type": "string"
//           },
//           {
//             "internalType": "address",
//             "name": "userAddress",
//             "type": "address"
//           },
//           {
//             "internalType": "string",
//             "name": "position",
//             "type": "string"
//           },
//           {
//             "components": [
//               {
//                 "internalType": "string",
//                 "name": "cidValue",
//                 "type": "string"
//               },
//               {
//                 "internalType": "address",
//                 "name": "sender",
//                 "type": "address"
//               },
//               {
//                 "internalType": "string",
//                 "name": "description",
//                 "type": "string"
//               },
//               {
//                 "internalType": "string",
//                 "name": "docName",
//                 "type": "string"
//               },
//               {
//                 "internalType": "string",
//                 "name": "time",
//                 "type": "string"
//               }
//             ],
//             "internalType": "struct secureDocument.Document[]",
//             "name": "documents",
//             "type": "tuple[]"
//           }
//         ],
//         "internalType": "struct secureDocument.operator",
//         "name": "",
//         "type": "tuple"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "index",
//         "type": "uint256"
//       }
//     ],
//     "name": "getOperatorss",
//     "outputs": [
//       {
//         "components": [
//           {
//             "internalType": "string",
//             "name": "name",
//             "type": "string"
//           },
//           {
//             "internalType": "string",
//             "name": "organization",
//             "type": "string"
//           },
//           {
//             "internalType": "address",
//             "name": "userAddress",
//             "type": "address"
//           },
//           {
//             "internalType": "string",
//             "name": "position",
//             "type": "string"
//           },
//           {
//             "components": [
//               {
//                 "internalType": "string",
//                 "name": "cidValue",
//                 "type": "string"
//               },
//               {
//                 "internalType": "address",
//                 "name": "sender",
//                 "type": "address"
//               },
//               {
//                 "internalType": "string",
//                 "name": "description",
//                 "type": "string"
//               },
//               {
//                 "internalType": "string",
//                 "name": "docName",
//                 "type": "string"
//               },
//               {
//                 "internalType": "string",
//                 "name": "time",
//                 "type": "string"
//               }
//             ],
//             "internalType": "struct secureDocument.Document[]",
//             "name": "documents",
//             "type": "tuple[]"
//           }
//         ],
//         "internalType": "struct secureDocument.operator",
//         "name": "",
//         "type": "tuple"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "getOrganization",
//     "outputs": [
//       {
//         "components": [
//           {
//             "internalType": "string",
//             "name": "orgName",
//             "type": "string"
//           },
//           {
//             "internalType": "address",
//             "name": "orgAddress",
//             "type": "address"
//           },
//           {
//             "internalType": "string[]",
//             "name": "members",
//             "type": "string[]"
//           },
//           {
//             "internalType": "string",
//             "name": "location",
//             "type": "string"
//           }
//         ],
//         "internalType": "struct secureDocument.Organizations[]",
//         "name": "",
//         "type": "tuple[]"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "string",
//         "name": "_cidValue",
//         "type": "string"
//       }
//     ],
//     "name": "getShares",
//     "outputs": [
//       {
//         "components": [
//           {
//             "internalType": "address",
//             "name": "sender",
//             "type": "address"
//           },
//           {
//             "internalType": "address",
//             "name": "receiver",
//             "type": "address"
//           },
//           {
//             "internalType": "string",
//             "name": "time",
//             "type": "string"
//           },
//           {
//             "internalType": "string",
//             "name": "comment",
//             "type": "string"
//           }
//         ],
//         "internalType": "struct secureDocument.Shares[]",
//         "name": "",
//         "type": "tuple[]"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "name": "i_owner",
//     "outputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "orgadd",
//         "type": "address"
//       }
//     ],
//     "name": "isAvailable",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "add",
//         "type": "address"
//       }
//     ],
//     "name": "operatorFinder",
//     "outputs": [
//       {
//         "components": [
//           {
//             "internalType": "string",
//             "name": "name",
//             "type": "string"
//           },
//           {
//             "internalType": "string",
//             "name": "organization",
//             "type": "string"
//           },
//           {
//             "internalType": "address",
//             "name": "userAddress",
//             "type": "address"
//           },
//           {
//             "internalType": "string",
//             "name": "position",
//             "type": "string"
//           },
//           {
//             "components": [
//               {
//                 "internalType": "string",
//                 "name": "cidValue",
//                 "type": "string"
//               },
//               {
//                 "internalType": "address",
//                 "name": "sender",
//                 "type": "address"
//               },
//               {
//                 "internalType": "string",
//                 "name": "description",
//                 "type": "string"
//               },
//               {
//                 "internalType": "string",
//                 "name": "docName",
//                 "type": "string"
//               },
//               {
//                 "internalType": "string",
//                 "name": "time",
//                 "type": "string"
//               }
//             ],
//             "internalType": "struct secureDocument.Document[]",
//             "name": "documents",
//             "type": "tuple[]"
//           }
//         ],
//         "internalType": "struct secureDocument.operator",
//         "name": "",
//         "type": "tuple"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "add",
//         "type": "address"
//       }
//     ],
//     "name": "operatorLogin",
//     "outputs": [
//       {
//         "internalType": "string",
//         "name": "",
//         "type": "string"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "name": "operators",
//     "outputs": [
//       {
//         "internalType": "string",
//         "name": "name",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "organization",
//         "type": "string"
//       },
//       {
//         "internalType": "address",
//         "name": "userAddress",
//         "type": "address"
//       },
//       {
//         "internalType": "string",
//         "name": "position",
//         "type": "string"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "name": "operatorsArray",
//     "outputs": [
//       {
//         "internalType": "string",
//         "name": "name",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "organization",
//         "type": "string"
//       },
//       {
//         "internalType": "address",
//         "name": "userAddress",
//         "type": "address"
//       },
//       {
//         "internalType": "string",
//         "name": "position",
//         "type": "string"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "name": "organizationAvailable",
//     "outputs": [
//       {
//         "internalType": "string",
//         "name": "orgName",
//         "type": "string"
//       },
//       {
//         "internalType": "address",
//         "name": "orgAddress",
//         "type": "address"
//       },
//       {
//         "internalType": "string",
//         "name": "location",
//         "type": "string"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "string",
//         "name": "hashedDoc",
//         "type": "string"
//       }
//     ],
//     "name": "presenceChecker",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "_receiver",
//         "type": "address"
//       },
//       {
//         "internalType": "string",
//         "name": "_cidValue",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "_time",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "comment",
//         "type": "string"
//       }
//     ],
//     "name": "sendDocument",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "string",
//         "name": "_cidValue",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "_time",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "comment",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "_docName",
//         "type": "string"
//       }
//     ],
//     "name": "storeDocument",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "orgadd",
//         "type": "address"
//       }
//     ],
//     "name": "testingAddress",
//     "outputs": [
//       {
//         "components": [
//           {
//             "internalType": "string",
//             "name": "orgName",
//             "type": "string"
//           },
//           {
//             "internalType": "address",
//             "name": "orgAddress",
//             "type": "address"
//           },
//           {
//             "internalType": "string[]",
//             "name": "members",
//             "type": "string[]"
//           },
//           {
//             "internalType": "string",
//             "name": "location",
//             "type": "string"
//           }
//         ],
//         "internalType": "struct secureDocument.Organizations",
//         "name": "",
//         "type": "tuple"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "name": "usersMapping",
//     "outputs": [
//       {
//         "internalType": "address",
//         "name": "userAddres",
//         "type": "address"
//       },
//       {
//         "internalType": "string",
//         "name": "userType",
//         "type": "string"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [
//       {
//         "internalType": "string",
//         "name": "_cid",
//         "type": "string"
//       }
//     ],
//     "name": "verifyDocument",
//     "outputs": [
//       {
//         "internalType": "bool",
//         "name": "",
//         "type": "bool"
//       }
//     ],
//     "stateMutability": "view",
//     "type": "function"
//   }
// ]
