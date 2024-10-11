const express = require("express")// impor modul express
const app = express() // inisialisasi express
const expressLayout = require("express-ejs-layouts");//import modul express-ejs-layouts
const port = 3000 // port

app.set("views",__dirname + "/views");
app.set('view engine','ejs');

app.use(expressLayout);
app.use(express.static('public'));


//route /
app.get("/buku",(req, res)=>{
    const daftarbuku =[
        {NamaBuku: "Si Kancil", Penulis: "Eric", Tahun: "2006"},
        {NamaBuku: "Maling Kundang", Penulis: "Nabila", Tahun: "2008"},
        {NamaBuku: "Anak Pintar", Penulis: "Puspita", Tahun: "2010"},
        {NamaBuku: "Bawang merah", Penulis: "Angel", Tahun: "2011"},
        {NamaBuku: "Putri Duyung", Penulis: "Darren", Tahun: "2012"},
        {NamaBuku: "Si Kembar", Penulis: "Critiano", Tahun: "2015"}
    ];
    res.render('buku',{title: 'halaman buku',daftarbuku,layout:'main'});
});

app.get("/bukus",(req, res)=>{
    res.json({
        "status" : "Success",
        "message" : "Data Buku",
        "data" : [{namabuku: "si kancil", penulis: "Eric Candra"},{namabuku: "malingkundang", penulis: "jovan"}]
    })
});

app.use("/",(req, res)=>{
    res.send("<h1>404 not found</h1>");
});

app.listen(port, ()=>{
    console.log(`server dapat diakses di http://localhost:${port}`);
});