import prismaClient from "@/libs/prisma";
import { slugsUUID } from "@/libs/utils/common-utils";
import type { NextApiRequest, NextApiResponse } from "next";
import { urlValidation } from "../../../libs/validations";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { url } = req.body;
    const slug = slugsUUID();
    try {
      urlValidation.parse(url);
      const result = await prismaClient.shortLinks.create({
        data: {
          slug,
          url,
        },
        select: {
          slug: true,
        },
      });
      return res.status(201).send(result);
    } catch (error) {
      return res
        .status(400)
        .send({ error: `Bad request. Please provide a valid URL` });
    }
  }

  return res.status(404).json({
    message: `The HTTP ${req.method} method is not supported at this route.`,
    status: 404,
  });
}
