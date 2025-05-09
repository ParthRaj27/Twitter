const { date } = require("joi")
const { fetchusers, sendchat, fetchmessageofuser, deletemsg, fetchmssg, updatemessage } = require("../helper/queries")

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
exports.deletemessage = async (req,res) => {
    try {
        let result = await deletemsg(req.body.id)
        if(result){
            res.send({ success: true, msg:"message deleted"})
        }
        else{
            res.send({ success: false, msg:"failed"})
        }
    } catch (error) {
        console.log(error);
    }
}
exports.updatemessage = async (req,res) => {
    try {
        let time = new Date().toISOString();
    let result = await updatemessage(req.body.id,req.body.updatedmsg,time)
    if(result){
        res.send({ success: true, msg:"message updated"})
    }
    else{
        res.send({ success: false, msg:"failed"})
    }
    } catch (error) {
     console.log(error);   
    }
}
exports.fetchmsg = async (req,res) => {
    try {
        let result = await fetchmssg(req.body.id)
        if(result){
            res.send({ success: true, data:result})
        }
        else{
            res.send({ success: false, msg:"failed"})
        }
    } catch (error) {
        console.log(error);
    }
   }