import mongoose from "mongoose";

const AppointmentsSchema = new mongoose.Schema({
    mobile: {
      type: String,
    },
    name: {
      type: String,
    },
    gender: {
        type: String,
      },
    age: {
        type: String,
      },
    birthDate: {
        type: Date,
      },
    appointmentDate:{
        type: Date,
    },
    appointmentTime:{
        type: String,
    },
    doctor:{
        type: String,
    },
    reason:{
        type:String,
    },
    token:{
        type:String,
    },
    createdBy:{
        type:String,
    },
    createdDate:{
        type:Date,
    },
    isDeleted:{
        type: Boolean,
    }
  });
  

  // Create the user model
const AdminUserModel = new mongoose.model("Appoinments", AppointmentsSchema);   
export { AdminUserModel };