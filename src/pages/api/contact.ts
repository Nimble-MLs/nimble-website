import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Add your logic to handle the form data (e.g., send an email, save to a database, etc.)
    return res.status(200).json({ message: "Message received successfully" });
  }

  return res.status(405).json({ error: "Method not allowed" });
}