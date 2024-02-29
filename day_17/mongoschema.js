const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: string,
    email: string
});
const User = mongoose.model('User', userSchema);
async function addUserToDatabase(user){
  const user = new User(user);
  try {
    const result = await user.save();
    console.log("user added")
  } catch (error) {
    console.log("error", error)
  }
}
mongoose.connect('mongodb+srv://hemant:charon@paytmdb.jury2lg.mongodb.net/',{
            serverSelectionTimeoutMS: 6000
});f
addUserToDatabase({
  username: "hemant",
  email: "hemant@mail.com"
})