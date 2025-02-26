let express=require('express')
let transfer=require('./MAIL/mail.js')
let app=express()

app.use(express.json())

app.post('/post',(req,res)=>{
    let email=req.body.email
    let in_text=req.body.data
    let subject=req.body.subject
    let otp=''
    for(i=0;i<4;i++){
        n=Math.floor(Math.random()*10)
        otp+=n
    }
    let mailoptions={
        from:'gouthamsomaraju11@gmail.com',
        to:email,
        subject:subject,
        // otp:otp,
        html:`
        <p>Hello Your OTP is <h1 style="color: red;">${otp}</h1></p>
        <img src="https://static.sadhguru.org/d/46272/1663055512-1663055309-shiva-the-adiyogi.jpg" alt="lordShiv">

        `,
        text:in_text,
        // attachments:[{
        //     filename:'SOMARAJU_GOUTHAM.docx',
        //     path:'./SOMARAJU_GOUTHAM.docx',
        //     contentType:'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        // }]
    }
    transfer.sendMail(mailoptions,(err,info)=>{
        if(err){
            res.send(err)
        }else{
            res.send(info)
        }
    })
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})