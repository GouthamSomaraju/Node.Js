let mailer=require('nodemailer')
let transfer=mailer.createTransport({
    host:'smtp.gmail.com',
    secure:false,
    port:587,
    auth:{
        user:'gouthamsomaraju11@gmail.com',
        pass:'xalx uuip afpr ciko'
    }
})
let mailoptions={
    from:'gouthamsomaraju11@gmail.com',
    to:'mr.goutham00@gmail.com',
    subject:"Testing NODEMAILER",
    text:'this mail from nodemailer'
}

transfer.sendMail(mailoptions,(err,info)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log(info);
        
    }
})

module.exports=transfer