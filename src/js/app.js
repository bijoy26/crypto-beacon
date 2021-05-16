App = {
  web3Provider: null,
  contracts: {},
  account: '0x0',

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
  App.contracts.CBeacon.deployed().then(function(instance){
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
  content.show();
  // Load account data
  web3.eth.getCoinbase(function(err, account) {
    if (err === null) {
      App.account = account;
      $("#accountAddress").html("Your Account: " + account);
    }
  });

  // Load contract data
  App.contracts.CBeacon.deployed().then(function(instance) {
    cbeaconinstance = instance;
    return cbeaconinstance.getLast5Activities();
  }).then(function(candidatesCount) {
    var candidatesResults = $("#candidatesResults");
    candidatesResults.empty();

    var candidatesSelect = $('#candidatesSelect');
    candidatesSelect.empty();

    for (var i = 1; i <= candidatesCount; i++) {
      electionInstance.candidates(i).then(function(candidate) {
        var id = candidate[0];
        var name = candidate[1];
        var voteCount = candidate[2];

        // Render candidate Result
        var candidateTemplate = "<tr><th>" + id + "</th><td>" + name + "</td><td>" + voteCount + "</td></tr>"
        candidatesResults.append(candidateTemplate);

        //Render candidate ballot option
        var candidateOption = "<option value='" + id + "' >" + name + "</ option>"
        candidatesSelect.append(candidateOption);
      });
    }

    return electionInstance.voters(App.account);
  }).then(function(hasVoted){
    // Do not allow a user to vote
    if(hasVoted) {
      $('form').hide();
    }


    content.show();
  }).catch(function(error) {
    console.warn(error);
  });
},

castVote: function() {
  var candidateId = $('#candidatesSelect').val();
  App.contracts.Election.deployed().then(function(instance){
    return instance.vote(candidateId, { from: App.account } );
  }).then(function(result) {
    //wait for votes to update
    $('#content').hide();
    $('#loader').hide();
  }).catch(function(err) {
    console.error(err);
  });
 }
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
