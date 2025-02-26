var express=require("express")

var app=express()

app.use(express.json())

app.get("/",(req,res)=>{
    // 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 req.body.msg
    // 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

    fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer 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",
        "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
        "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "deepseek/deepseek-r1-distill-llama-70b:free",
        "messages": [
          {"role": "user", "content": req.body.msg}
        ],
        "top_p": 1,
        "temperature": 0.9,
        "repetition_penalty": 1
      })
    }).then((res)=>{
        return res.json()
      }).then((val)=>{
        res.send(val)
      })
})

app.listen(3000,()=>{
    console.log("server started");
    
})




