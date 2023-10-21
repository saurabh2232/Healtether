import { modelSubmission, overview } from "../../helper/staff/staffHelper.js";
export const StaffUpsert = async (req, res) => {
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

export const GetStaffOverview = async (req, res) => {
  try {
    const data = req.query;
    //   let id = req.Token;
    //   const userId = new mongoose.Types.ObjectId(id);
    var overviewData = await overview(data.page, data.size);
    res.json(overviewData).status(200);
  } catch (error) {
    console.log(error);
  }
};
