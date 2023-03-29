import express from "express"
import mysql from "mysql"

const app = express()

app.listen(8800, ()=>{

    const db = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"123456789",
        database:"test"
    })

    

    app.get("/", (req, res) =>{
        res.json("Hello this is backend1")
    })

    app.get("/books", (req, res)=>{
        const q = "SELECT * FROM books"
        db.query(q,(err,data)=>{
            console.log(data)
            if(err) return res.json(err)
            console.log(data)
            return res.json(data)
        })
    })

    console.log("Connected Backend111")
})