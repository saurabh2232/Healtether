import {
  modelSubmission,
  overview
} from "../../helper/patient/patientHelper.js";
export const PatientUpsert = async (req, res) => {
  try {
    const data = req.body.data;
    //   let id = req.Token;
    //   const userId = new mongoose.Types.ObjectId(id);
    await modelSubmission(data, data.id);
    res.json({ success: true }).status(200);
  } catch (error) {
    console.log(error);
  }
};

export const GetPatientOverview = async (req, res) => {
  try {
    const data = req.query;
    //   let id = req.Token;
    //   const userId = new mongoose.Types.ObjectId(id);
    var overviewData = await overview(data.page, data.size);
    res
      .json({
        data: overviewData.patientCollection,
        numRows: overviewData.totalPatientCollection
      })
      .status(200);
  } catch (error) {
    console.log(error);
  }
};
