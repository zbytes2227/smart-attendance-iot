import Cards from "@/model/Cards";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      // Get the 'id' parameter from the request query
      const { id } = req.query;

      // Check if id is provided
      if (!id) {
        return res.status(400).json({ success: false, msg: "Missing 'id' parameter" });
      }

      // Find the card details by cardID
      const reqCard = await Cards.findOne({ cardID: id });

      // Check if the card is found
      if (!reqCard) {
        return res.status(404).json({ success: false, msg: "Card not found" });
      }

      return res.json({ success: true, card_details: reqCard });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, msg: "Server error...." });
    }
  }
};

export default connectDb(handler);
