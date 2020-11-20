const Web3 = require("web3");
// const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/7b3a02e10a0043feb895438cb1ad9230"));
// web3.eth.getBlock("latest", (error, result) => {
//   console.log('error:', error);
//   console.log('results', result);
// });

if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  try {
    window.ethereum.enable().then(function() {
      // User has allowed account access to DApp...
    });
  } catch (e) {
    // User has denied account access to DApp...
  }
}
// Legacy DApp Browsers
else if (window.web3) {
  web3 = new Web3(web3.currentProvider);
}
// Non-DApp Browsers
else {
  alert("You have to install MetaMask !");
}

let index = 0;
// console.log(web3.eth.getStorageAt(contractAddress, index))
// console.log('DEC:' +(web3.eth.getStorageAt(contractAddress, index).then(ttt=>console.log(ttt))))

export var sc = new web3.eth.Contract([
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_category",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_region",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_link",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_budget",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "year",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "month",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "day",
						"type": "uint256"
					}
				],
				"internalType": "struct Library.SimpleDate",
				"name": "_startDate",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "year",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "month",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "day",
						"type": "uint256"
					}
				],
				"internalType": "struct Library.SimpleDate",
				"name": "_endDate",
				"type": "tuple"
			},
			{
				"internalType": "uint256",
				"name": "_initialNumberOfAdRecievers",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_receiver",
				"type": "address"
			}
		],
		"name": "addReferralToList",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "calculateAdRewards",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_receiver",
				"type": "address"
			}
		],
		"name": "fatherExists",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_exists",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAdReceivers",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBudget",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_budget",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCategory",
		"outputs": [
			{
				"internalType": "string",
				"name": "_category",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getEndDate",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "year",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "month",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "day",
						"type": "uint256"
					}
				],
				"internalType": "struct Library.SimpleDate",
				"name": "_endDate",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_child",
				"type": "address"
			}
		],
		"name": "getFather",
		"outputs": [
			{
				"internalType": "address",
				"name": "_father",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getLink",
		"outputs": [
			{
				"internalType": "string",
				"name": "_link",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNumOfAdConversions",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNumOfAdRecievers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_participant",
				"type": "address"
			}
		],
		"name": "getNumOfDirectForwards",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNumberOfDays",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_days",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRegion",
		"outputs": [
			{
				"internalType": "string",
				"name": "_region",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getStartDate",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "year",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "month",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "day",
						"type": "uint256"
					}
				],
				"internalType": "struct Library.SimpleDate",
				"name": "_startDate",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "increaseTotalConversionNumber",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "recipients",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "referrals",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
],
  "0x47e2ca8985f0bdce5781f08a3f3c1de5f3646ce9" 
);
// web3.version.getNetwork((err, netId) => {
//   switch (netId) {
//     case "1":
//       console.log("This is mainnet");
//       break;
//     case "2":
//       console.log("This is the deprecated Morden test network.");
//       break;
//     case "3":
//       console.log("This is the ropsten test network.");
//       break;
//     case "4":
//       console.log("This is the Rinkeby test network.");
//       break;
//     case "42":
//       console.log("This is the Kovan test network.");
//       break;
//     default:
//       console.log("This is an unknown network.");
//   }
// });

web3.eth.defaultAccount = web3.eth.accounts[0];
console.log(sc);

// personal.unlockAccount(web3.eth.defaultAccount)
// export var ScContract = sc.at("0x8CCdcf2B58d7B718c098daB4DDAB4249180Ab648");
//  Courses.setInstructor("Stephen Hawking", 76,function(data){
// 	 console.log('iam in setINstructoe :',data);
//  })
// Courses.getInstructor(function(error, result){
// 	if(!error){
//  	  console.log(result);
// 	  }
//    else
// 	 console.error(error);
//    });
// Courses.setInstructor('Stephen Hawking', 76)
