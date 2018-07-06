const express =require('express');
const hbs=require('hbs');
var app=express();
hbs.registerPartials(__dirname+'/views/partials')
hbs.registerHelper('getcurrentYear',()=>{
    return new Date().getFullYear()
})
app.use((req,res,next)=>{

    console.log(req.url)
    //res.render('about_middleware.hbs')
    next();
})
hbs.registerHelper('touppercase',(text)=>{
 return text.toUpperCase();
})
app.set('view_engine','hbs');
app.get('/',(req,res)=>{
res.send("hello world");
})
app.get('/about',(req,res)=>{
    res.render('about.hbs',{pageTitle:"HBS page",
    currentYear:new Date().getFullYear()
})
})
app.listen(3000);