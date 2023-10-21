import axios from "../../axios/axios";

export const PatientSubmitApi = async(value) => {
    try {
        var data = new Patient(value.name, value.specialisation, value.role, value.age, value.birthday, value.gender, value.mobile, value.whatsapp, value.email, value.address, value.documentType, value.documentNumber, value.upiId, value.bankName, value.accountName, value.account, value.ifsc, value.isAdmin);
        const formData = await axios.post('/patient/upsert', {data})
        return formData

    } catch (error) {
        console.log(error)
    }
}
export const GetPatientOverview = async(page,size) => {
    try {
        const formData = await axios.get('/patient/getpatients?page='+page+'&size='+size)
        return formData

    } catch (error) {
        console.log(error)
    }
}
export class Patient
{
    constructor(name, age, birthday, gender, height, weight, mobile, whatsapp, email, address, documentType, documentNumber, upiId, bankName, accountName, account, ifsc)
    {
        this.name = name;
        this.age = age;
        this.birthday = birthday;
        this.gender = gender;
        this.height = height;
        this.weight = weight;
        this.mobile = mobile;
        this.whatsapp = whatsapp;
        this.email = email;
        this.address = address;
        this.documentType = documentType;
        this.documentNumber = documentNumber;
        this.upiId = upiId;
        this.bankName = bankName;
        this.account = account;
        this.accountName = accountName;
        this.ifsc = ifsc;
        this.createdOn = new Date().toLocaleString('en-GB', {timeZone: 'UTC'});
        this.modifiedOn = new Date().toLocaleString('en-GB', {timeZone: 'UTC'});
    }
}