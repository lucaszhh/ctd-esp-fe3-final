import type { NextApiRequest, NextApiResponse } from "next";
import { ERROR_SERVER } from "services/marvel/message.error";
import { getComic } from "dh-marvel/services/marvel/marvel.service";
import { IComic } from "types";

type Data = IComic | { error: string; message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  res.setHeader("Content-Type", "application/json");
  const idNumber = parseInt(`${id}`);

  try {
    const result: IComic = await getComic(idNumber);
    res.status(200).json(result);
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json(ERROR_SERVER);
  }
}
