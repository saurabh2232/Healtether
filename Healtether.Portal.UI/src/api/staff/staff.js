import axios from "../../axios/axios";

export const StaffSubmitApi = async(value) => {
    try {
        var data = new Staff(value.name, value.specialisation, value.role, value.age, value.birthday, value.gender, value.mobile, value.whatsapp, value.email, value.address, value.documentType, value.documentNumber, value.upiId, value.bankName, value.accountName, value.account, value.ifsc, value.isAdmin,value.profilepic,value.documents);
        const formData = await axios.post('/staff/upsert', {data})
        return formData

    } catch (error) {
        console.log(error)
    }
}
export const GetStaffOverview = async(page,size) => {
    try {
        const formData = await axios.get('/staff/getstaffs?page='+page+'&size='+size)
        return formData

    } catch (error) {
        console.log(error)
    }
}
export class Staff
{
    constructor(name, specialisation, role, age, birthday, gender, mobile, whatsapp, email, address, documentType, documentNumber, upiId, bankName, accountName, account, ifsc, isAdmin,profilepic,documents)
    {
        this.name = name;
        this.specialisation = specialisation;
        this.role = role;
        this.age = age;
        this.birthday = birthday;
        this.gender = gender;
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
        this.isAdmin = isAdmin;
        this.createdOn = new Date().toLocaleString('en-GB', {timeZone: 'UTC'});
        this.modifiedOn = new Date().toLocaleString('en-GB', {timeZone: 'UTC'});
        this.profilepic=profilepic;
        this.documents=documents;
    }
}