import { PatientModel } from "../../model/patientModel.js";

export const overview = async (pg, size) => {
  try {
    const patientCollection = await PatientModel.find()
      .limit(size)
      .sort({ modifiedOn: -1, createdOn: -1 })
      .skip(pg * size)

      .select({ _id: 1, name: 1, mobile: 1, status: 1, action: 1 })
      .exec();
    const totalPatientCollection = await PatientModel.count();
    return { patientCollection, totalPatientCollection };
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const modelSubmission = async (data, id) => {
  try {
    const patientCollection = new PatientModel({
      name: data.name,
      specialisation: data.specialisation,
      role: data.role,
      age: data.age,
      birthday: data.birthday,
      gender: data.gender,
      mobile: data.mobile,
      whatsapp: data.whatsapp,
      email: data.email,
      address: data.address,
      documentType: data.documentType,
      documentNumber: data.documentNumber,
      upiId: data.upiId,
      bankName: data.bankName,
      accountName: data.accountName,
      account: data.account,
      ifsc: data.ifsc,
      isAdmin: data.isAdmin,
      // clients: data.clients,
      createdOn: data.createdOn,
      modifiedOn: data.modifiedOn,
      createdBy: data.createdBy,
      modifiedBy: data.modifiedBy
    });
    var upsertData = patientCollection.toObject();
    await PatientModel.findOneAndUpdate({ _id: upsertData._id }, upsertData, {
      upsert: true
    });
    return patientCollection;
  } catch (error) {
    console.log(error);
    return error;
  }
};
