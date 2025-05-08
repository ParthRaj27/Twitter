const { fetchusers, sendchat, fetchmessageofuser } = require("../helper/queries")

exports.chathomeget = (req,res)=>{
    res.render("screens/chathome",{user:req.user.fname})
}
exports.fetchuserpost=async (req,res)=>{
    let result =  await fetchusers()
    res.send({ success: true, data:result});
}
exports.postchat=async(req,res)=>{
    try {
        let result = await sendchat(req.user.email,req.body.user,req.body.message)
        if(result){res.send({ success: true, msg:"sent"})
        }
    else{
        res.send({ success: false, msg:"failed"})
    }
    } catch (error) {
        console.log(error);
    }
}
exports.fetchmessages = async (req,res) => {
    try {
        let result = await fetchmessageofuser(req.user.email,req.body.user)
        if(result){
            res.send({ success: true, msg:"fetched",data:result})
        }
    else{
        res.send({ success: false, msg:"failed"})
    }
    } catch (error) {
        console.log(error);
    }
}