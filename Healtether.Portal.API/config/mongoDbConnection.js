import mongoose from "mongoose";
mongoose.set('strictQuery', false)
const mongodb = async ()=>{
    try {
        await mongoose.connect(`mongodb+srv://developer:${process.env.MONGOOES_PASS}@healtether.ok9pgqk.mongodb.net/?retryWrites=true&w=majority`,{
            useNewUrlParser: true,
            useUnifiedTopology: true
          }).then(()=>{
            console.log("connection successful");
        }).catch((error)=>{
            console.log("no connected");
            console.log(error);
        })
    } catch (error) {
        console.log(error);
        
    }
}
export  {mongodb}