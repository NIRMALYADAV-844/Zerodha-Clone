require("dotenv").config();
const jwt = require("jsonwebtoken");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");
const {UsersModel} = require("./models/UsersModel");
const bcrypt = require("bcrypt");
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const path = require('path');





const cors = require('cors')
const corsOption = {
origin: [
"http://localhost:3001",
"http://localhost:3000",
"https://localhost:3002",
],
credentials: true,
methods: ["GET", "POST", "PUT", "DELETE"],
}
app.use(cors(corsOption));
app.use(cookieParser());
app.use(express.json());
app.post("/",(req,res)=>{
const token = req.cookies.token
if (!token) {
return res.json({ status: false })
}
jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
if (err) {
return res.json({ status: false })
} else {
const user = await UsersModel.findById(data._id)
if (user) return res.json({ status: true, user: user.username })
else return res.json({ status: false })
}
})
})


app.get('/allHoldings',async(req,res) =>{
let allHoldings = await HoldingsModel.find({});
res.json(allHoldings);
});
app.get('/allPositions',async(req,res) =>{
let allPositions = await PositionsModel.find({});
res.json(allPositions);
});
app.post("/newOrder" ,async(req,res)=>{
try{
let newOrder = new OrdersModel({
name:req.body.name,
qty: req.body.qty,
price: req.body.price,
mode: req.body.mode,
});
await newOrder.save();
res.json({ status: true, message: "Order saved!" });
}catch(err){
console.log(err);
res.status(500).json({ status: false, message: "Error saving order" });
}
}
);
app.get("/allOrders", async (req, res) => {
try {
const allOrders = await OrdersModel.find({});
res.json(allOrders);
} catch (error) {
console.error("Error fetching orders:", error);
res.status(500).json({ message: "Internal server error" });
}
});
app.delete("/orders/:id", async (req, res) => {
try {
await OrdersModel.findByIdAndDelete(req.params.id);
res.status(200).json({ message: "Order deleted successfully" });
} catch (error) {
console.error("Error deleting order:", error);
res.status(500).json({ message: "Failed to delete order" });
}
});



app.post('/signup', async (req, res) => {
  const { email, password, username } = req.body;
  try {
    const existingUser = await UsersModel.findOne({ email });
    if (existingUser) {
      return res.json({ status: false, message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const userCreated = await UsersModel.create({
      email,
      password: hashedPassword,
      username,
    });
    res.json({ status: true, userId: userCreated._id });
  } catch (error) {
    res.json({ status: false, message: "Signup failed" });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UsersModel.findOne({ email });
    if (!user) {
      return res.json({ status: false, message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ status: false, message: "Invalid credentials" });
    }
    res.json({ status: true, userId: user._id });
  } catch (error) {
    res.json({ status: false, message: "Login failed" });
  }
});

app.listen(PORT, () => {
console.log(`Server is listening on port ${PORT}`);
mongoose.connect(uri);
console.log("DB connected");
});