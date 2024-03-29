import { NextApiRequest, NextApiResponse } from "next";

export const GET = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    status: "ok",
    headers: req.headers,
    cookues: req.cookies,
  });
};
