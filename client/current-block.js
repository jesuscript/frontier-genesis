Template.currentBlock.helpers({
  number: function(){
    return (Session.get("latestBlock") || {}).number;
  }
});



Template.currentBlock.onRendered(function(){
  Session.set("latestBlock", web3.eth.getBlock("latest"));
  
  web3.eth.filter("latest",function(){
    Session.set("latestBlock", web3.eth.getBlock("latest"));
  });
});
