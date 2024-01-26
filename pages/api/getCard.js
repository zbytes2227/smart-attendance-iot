import Cards from "@/model/Cards";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      // Get the 'id' parameter from the request query
   

      // Check if id is provided
      if (!req.body.cardID) {
        return res.status(400).json({ success: false, msg: "Missing 'id' parameter" });
      }

      // Find the card details by cardID
      const reqCard = await Cards.findOne({ cardID: req.body.cardID });

      // Check if the card is found
      if (!reqCard) {
        return res.status(200).json({ success: false, msg: "UnAuthorised Card", status: 109 });
      }

      return res.json({ success: true, card_details: reqCard, status: 105 });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, msg: "Server error...." });
    }
  }
};

export default connectDb(handler);
