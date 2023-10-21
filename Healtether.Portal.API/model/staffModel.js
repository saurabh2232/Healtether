import mongoose from "mongoose";
const client = new mongoose.Schema({
    code: Number,
    name: String,
    address: String,
    mobile: String,
    email: String,
    isAdmin: Boolean
});

const clientModel = new mongoose.model("Clients", client);   
export { clientModel };


const staffSchema = new mongoose.Schema({
    name: {
        type: String,
        index: true
    },
    specialisation: String,
    role: String,
    age: {
        type: Number,
        min: 15,
        max: 100
    },
    birthday: {
        type: Date
    },
    gender: String,
    mobile: {
        type: String,
        index: true,
        unique: true
    },
    whatsapp: {
        type: String,
        index: true
    },
    email: String,
    address: String,
    documentType: String,
    documentNumber: String,
    upiId: String,
    bankName: String,
    accountName: String,
    account: String,
    ifsc: String,
    isAdmin: Boolean,
    clients: [client],
    createdOn: {
        type: Date,
        default: Date.Now
    },
    modifiedOn: {
        type: Date,
        default: Date.Now
    },
    createdBy: String,
    modifiedBy: String
})
  // Create the user model
  const StaffModel = new mongoose.model("Staffs", staffSchema);   
  export { StaffModel };

 