const userInfo = [
  {
    userName: "Albert",
    passWord: "albert0",
  },
  {
    userName: "Robert",
    passWord: "robert0",
  },
  {
    userName: "Edward",
    passWord: "edward0",
  },
  {
    userName: "William",
    passWord: "william0",
  },
  {
    userName: "Johan",
    passWord: "johan0",
  },
];

var contract = require("@truffle/contract");

var CB = require("./build/contracts/Cryptobeacon.json");
var provider = new Web3.providers.HttpProvider("https://rpc-mumbai.matic.today");
CB.setProvider(provider);

var contract_address = "0xfe87576951D8c0d0c33Fd3053Cc586a461BD8c5E";
var coin;
var account = "0x729e969878210f18d62093fe84c7737270e274e3";



const postActivity = () => {
  
  CB.at(contract_address).then(function(instance) {
    cbeaconinstance = instance;
    console.log('hi');
    return cbeaconinstance.getLast5Activities();
  }).then(function(value) {
     let a = value;
      console.log(`\nCID: ${a[0].cid}\n$Title: ${a[0].title}\n$details: ${a[0].details}\n$category: ${a[0].category}\n$Upvotes: ${a[0].upvotes}`);
      console.log(`\nCID: ${a[1].cid}\n$Title: ${a[1].title}\n$details: ${a[1].details}\n$category: ${a[1].category}\n$Upvotes: ${a[1].upvotes}`);
      console.log(`\nCID: ${a[2].cid}\n$Title: ${a[2].title}\n$details: ${a[2].details}\n$category: ${a[2].category}\n$Upvotes: ${a[2].upvotes}`);
      console.log(`\nCID: ${a[3].cid}\n$Title: ${a[3].title}\n$details: ${a[3].details}\n$category: ${a[3].category}\n$Upvotes: ${a[3].upvotes}`);
      console.log(`\nCID: ${a[0].cid}\n$Title: ${a[0].title}\n$details: ${a[4].details}\n$category: ${a[4].category}\n$Upvotes: ${a[4].upvotes}`)
  });
};

 
  
console.log('hello');

    // App.contracts.CBeacon.at(contract_address).then(function(instance) {
    //   cbeaconinstance = instance;
    //   return cbeaconinstance.getLast5Activities();
    // }).then(function(value) {

    //     let a = value;
    //     console.log(`\nCID: ${a[0].cid}\n$Title: ${a[0].title}\n$details: ${a[0].details}\n$category: ${a[0].category}\n$Upvotes: ${a[0].upvotes}`);
    //     console.log(`\nCID: ${a[1].cid}\n$Title: ${a[1].title}\n$details: ${a[1].details}\n$category: ${a[1].category}\n$Upvotes: ${a[1].upvotes}`);
    //     console.log(`\nCID: ${a[2].cid}\n$Title: ${a[2].title}\n$details: ${a[2].details}\n$category: ${a[2].category}\n$Upvotes: ${a[2].upvotes}`);
    //     console.log(`\nCID: ${a[3].cid}\n$Title: ${a[3].title}\n$details: ${a[3].details}\n$category: ${a[3].category}\n$Upvotes: ${a[3].upvotes}`);
    //     console.log(`\nCID: ${a[0].cid}\n$Title: ${a[0].title}\n$details: ${a[4].details}\n$category: ${a[4].category}\n$Upvotes: ${a[4].upvotes}`)
 
  
const loginSuccessful = (userName) => {
  document.getElementById("login-page").style.display = "none";
  document.getElementById("login-successful").style.display = "block";
  document.getElementById("userName").innerText = userName;
};

const checkValidLogin = () => {
  const userName = document.getElementById("username").value;
  const userPass = document.getElementById("password").value;
  for (let i = 0; i < userInfo.length; i++) {
    if (userName == userInfo[i].userName && userPass == userInfo[i].passWord) {
      loginSuccessful(userName);
      console.log("hi");
      break;
    }
  }
};

const postNewActivity = () => {
    const userName = document.getElementById("username").value;
    const userPass = document.getElementById("password").value;
    for (let i = 0; i < userInfo.length; i++) {
      if (userName == userInfo[i].userName && userPass == userInfo[i].passWord) {
        loginSuccessful(userName);
        console.log("hi");
        break;
      }
    }
  };

document.getElementById("sign-in").addEventListener("click", checkValidLogin);
// document.getElementById("submit-activity").addEventListener("click", checkValidLogin);
// Explore
$(document).ready(function () {
  document.getElementById("heart").onclick = function () {
    document.querySelector(".fa-gratipay").style.color = "#E74C3C";
  };
});
 
  