
//assests
const express = require("express");
const app = express();
const path = require("path");
const todomodel = require("./models/model");

//middlewares
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


//routes
app.get("/",async (req,res)=>{
    const todos = await todomodel.find();
    return res.render("index", {todos});
});

app.get("/create",(req,res)=>{
    return res.render("create")
});

app.post("/createtodo",async (req,res)=>{
    const {title,desc} = req.body;
    const user = await todomodel.create({
        title : title,
        desc : desc,
    });
    console.log(user);
    return res.redirect("/");
});

app.get("/delete/:id",async (req,res)=>{
    const id = req.params.id;
    await todomodel.findOneAndDelete({_id : id});
    return res.redirect("/");
})

app.get("/edit/:id", async (req,res)=>{
    const id = req.params.id;
    const todo = await todomodel.findOne({_id : id});
    return res.render("edit",{todo});
})

app.post("/updatetodo/:id",async (req,res)=>{
    const id = req.params.id;
    const {title,desc} = req.body;
    const user = await todomodel.findOneAndUpdate(
        {_id : id},
        {
        title : title,
        desc : desc,
        },
        {new : true});
    return res.redirect("/");
})


//connetction to the port
app.listen("3001",()=>{
    console.log("Server Started");
});

//ends