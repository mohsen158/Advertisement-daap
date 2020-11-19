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

export var sc = new web3.eth.Contract(
  [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getBalance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "deposit",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "nameT",
          "type": "string"
        }
      ],
      "name": "setName",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    }
  ],
  "0xabCb4d864145d771C3F244c146AC64125e255bE6"
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
