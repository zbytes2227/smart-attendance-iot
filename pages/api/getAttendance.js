import connectDb from "../../middleware/mongoose";
import Attendance from "@/model/Attendance";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const allAttendance = await Attendance.find();
      return res.json({ success: true, attendance: allAttendance });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, msg: "Server error...." });
    }
  }
};
export default connectDb(handler);