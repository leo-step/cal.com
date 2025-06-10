import type { NextApiRequest, NextApiResponse } from "next";
import { withMiddleware } from "~/lib/helpers/withMiddleware";

export default withMiddleware()(
  async function CalcomApi(_: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ message: "Welcome to Cal.com API - docs are at https://developer.cal.com/api" });
  }
);
