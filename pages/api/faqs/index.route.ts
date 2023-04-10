import type { NextApiRequest, NextApiResponse } from "next"

import { faqsData } from "dh-marvel/components/faqs/faqsData"
import { IFaqs } from "types"

type Data = IFaqs[] | { error: string; message: string }

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(faqsData)
    return;
}
