const express=require('express');
const app=express();


app.get('/',(req,res)=>{

  res.json([
    {
        id:1,
        name:'Anil Kumar',
        age:25,
    },
    {
        id:2,
        name:'Sam ',
        age:25,
    },
    {
        id:3,
        name:'Peter',
        age:29,
    },
    {
        id:4,
        name:'bruce',
        age:31,
    },
  ]);
  
});

const port=3000;

app.listen(port,()=>{
  console.log(`Example app listening at http://localhost:${port}`);
});