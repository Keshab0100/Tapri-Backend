import User from "../model/user-schema.js";

export const userSignup = async (req, res) => {
  try {
    const exist = await User.findOne({ phone: req.body.phone });
    if (exist) {
      return res.status(401).json({
        message: "User already there",
      });
    }
    console.log(req.body)
    const user = req.body;
    const newUser = new User(user);
    await newUser.save();
    res.status(200).json({ message: user });
  } catch (err) {
    console.log("err here", err);
  }
};

export const userLogin = async(req, res) => {
  try {
    const exist = await User.findOne({phone: req.body.phone, password: req.body.password})
    if(exist){
      return res.status(200).json({data:exist})
    }
    else{
      return res.status(400).json('Please Check username or password, Invalid Login')
    }
  } catch (err) {
    console.log("err here", err);
  }
}
