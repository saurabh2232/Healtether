import mongoose from "mongoose";
const client = new mongoose.Schema({
    code: Number,
    name: String,
    address: String,
    mobile: String,
    email: String,
});

const clientModel = new mongoose.model("Clients2", client);   
export { clientModel };


const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        index: true
    },
    age: {
        type: Number,
        min: 15,
        max: 100
    },
    birthday: {
        type: Date
    },
    gender: String,
    height: {
        type: Number,
        min: 0,
        max: 3
    },
    weight: {
        type: Number,
        min: 0,
        max: 500
    },
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
  const PatientModel = new mongoose.model("Patients", patientSchema);   
  export { PatientModel };

 