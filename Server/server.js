var express=require('express')
var bp=require('body-parser')
var cors=require('cors')
var mong=require('mongodb').MongoClient
var app=express()
app.use(cors())
app.use(bp.json())
var url="mongodb://127.0.0.1:27017"
app.post("/insert",function(req,res){
    mong.connect(url,(err,db)=>{
        if(err) throw err
        var dbo=db.db('itemdb')
        var d={
            pc_id : req.body.pc_id,
            mac_add : req.body.mac_add,
            mouse_name : req.body.mouse_name,
            mouse_id : req.body.mouse_id,
            mouse_mno : req.body.mouse_mno,
            keyboard_name : req.body.keyboard_name,
            keyboard_id : req.body.keyboard_id,
            keyboard_mno : req.body.keyboard_mno,
            processor : req.body.processor,
            ram : req.body.ram,
            storage : req.body.storage 
        }
        dbo.collection("itemcollection").insertOne(d,(err,res)=>{
            if(err) throw err
            console.log('rec inserted')
            db.close()
        })
    })
})
app.get("/display",function(req,res){
    mong.connect(url,(err,db)=>{
        if(err) throw err
        var dbo=db.db('itemdb')
        dbo.collection("itemcollection").find({}).toArray((err,recs)=>{
            if(err) throw err
            res.send(recs)
        }
    )
})
})
app.listen(5000,()=>console.log("listening.."))

