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

App = {
    web3Provider: null,
    contracts: {},
    account: '0x729e969878210f18d62093fe84c7737270e274e3',
    contract_address : '0xfe87576951D8c0d0c33Fd3053Cc586a461BD8c5E',

    init: function() {
      return App.initWeb3();
    },
  
    initWeb3: function() {
  
    if (typeof web3 !== 'undefined') {
          // If a web3 instance is already provided by Meta Mask.
          App.web3Provider = web3.currentProvider;
          web3 = new Web3(web3.currentProvider);
  
        } else {
          // Specify default instance if no web3 instance provided
          App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
          web3 = new Web3(App.web3Provider);
  
        }
  
        return App.initContract();
  },
  
  initContract: function() {

    var MetaCoin = require("./build/contracts/Cryptobeacon.sol");

        $.getJSON("Cryptobeacon.json", function(cryptobeacon) {
          // Instantiate a new truffle contract from the artifact
          App.contracts.CBeacon = TruffleContract(cryptobeacon);
          // Connect provider to interact with contract
          App.contracts.CBeacon.setProvider(App.web3Provider);
  
          App.listenForEvents();
          return App.render();
        });
  
  },
  
  listenForEvents: function() {
    App.contracts.CBeacon.at(contract_address).then(function(instance){
      instance.newActivityEvent({},{
        fromBlock: 0,
        toBlock: 'latest'
      }).watch(function(error,event){
        console.log("event triggered",event);
        //Reload when a new vote is recorded
        App.render();
      })
    })
  },
  
  render: function() {
  
    var cbeaconinstance;

    // Load account data
    web3.eth.getCoinbase(function(err, account) {
      if (err === null) {
        App.account = account;
        $("#accountAddress").html("Your Account: " + account);
      }
    });
  
    // Load contract data
    App.contracts.CBeacon.at(contract_address).then(function(instance) {
      cbeaconinstance = instance;
      return cbeaconinstance.getLast5Activities();
    }).then(function(value) {

        let a = value;
        console.log(`\nCID: ${a[0].cid}\n$Title: ${a[0].title}\n$details: ${a[0].details}\n$category: ${a[0].category}\n$Upvotes: ${a[0].upvotes}`);
        console.log(`\nCID: ${a[1].cid}\n$Title: ${a[1].title}\n$details: ${a[1].details}\n$category: ${a[1].category}\n$Upvotes: ${a[1].upvotes}`);
        console.log(`\nCID: ${a[2].cid}\n$Title: ${a[2].title}\n$details: ${a[2].details}\n$category: ${a[2].category}\n$Upvotes: ${a[2].upvotes}`);
        console.log(`\nCID: ${a[3].cid}\n$Title: ${a[3].title}\n$details: ${a[3].details}\n$category: ${a[3].category}\n$Upvotes: ${a[3].upvotes}`);
        console.log(`\nCID: ${a[0].cid}\n$Title: ${a[0].title}\n$details: ${a[4].details}\n$category: ${a[4].category}\n$Upvotes: ${a[4].upvotes}`)
    //   var candidatesResults = $("#candidatesResults");
    //   candidatesResults.empty();
    //   var candidatesSelect = $('#candidatesSelect');
    //   candidatesSelect.empty();

    //   for (var i = 1; i <= candidatesCount; i++) {
    //     electionInstance.candidates(i).then(function(candidate) {
    //       var id = candidate[0];
    //       var name = candidate[1];
    //       var voteCount = candidate[2];
  
    //       // Render candidate Result
    //       var candidateTemplate = "<tr><th>" + id + "</th><td>" + name + "</td><td>" + voteCount + "</td></tr>"
    //       candidatesResults.append(candidateTemplate);
  
    //       //Render candidate ballot option
    //       var candidateOption = "<option value='" + id + "' >" + name + "</ option>"
    //       candidatesSelect.append(candidateOption);
    //     });
    //   }
  
      return cbeaconinstance.voters(App.account);
    })
  },
  
//   castVote: function() {
//     var candidateId = $('#candidatesSelect').val();
//     App.contracts.Election.deployed().then(function(instance){
//       return instance.vote(candidateId, { from: App.account } );
//     }).then(function(result) {
//       //wait for votes to update
//       $('#content').hide();
//       $('#loader').hide();
//     }).catch(function(err) {
//       console.error(err);
//     });
//    }
//   };
  
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
document.getElementById("submit-activity").addEventListener("click", checkValidLogin);
// Explore
$(document).ready(function () {
  document.getElementById("heart").onclick = function () {
    document.querySelector(".fa-gratipay").style.color = "#E74C3C";
  };
});

$(function() {
    $(window).load(function() {
      App.init();
    });
  });
  