Template.genesisHash.helpers({
  hash: function(){
    return Session.get("genesisHash") || "unknown";
  }
});


Template.currentBlock.onRendered(function(){
  Session.set("genesisHash", getBlock());
  
  web3.eth.filter("latest").watch(function(){
    Session.set("genesisHash", getBlock());
  });
});

function getBlock(){
  var block = web3.eth.getBlock(1028201);

  return block && block.hash;
}
