JsonRoutes.add("get", "/genesis.json", function(req,res,next){
  var genesisJson = JSON.parse(Assets.getText("genesis.json"));
  console.log([(1000000).toString(16),false]);
  HTTP.post(Meteor.settings.public.rpcAddress, {
    data: {
      "id": 0,
      "jsonrpc":"2.0",
      "method": "eth_getBlockByNumber",
      "params": ["0x"+(1028201).toString(16),false]
    }
  }, function(err, resp){
    if(resp.data.result){
      genesisJson.extraData = resp.data.result.hash;
    }else{
      genesisJson.extraData = "replace with the hash of block #1028201";
    }
    
    console.log(resp);
    JsonRoutes.sendResult(res, 200, genesisJson);
  });
});
