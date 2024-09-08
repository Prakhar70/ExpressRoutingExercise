function homePingController(req, res){
    return res.json({msg: 'Welcome home'});
}

module.exports={
    homePingController
}