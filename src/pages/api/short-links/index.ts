import prismaClient from "@/libs/prisma";
import { slugsUUID } from "@/libs/utils/common-utils";
import rateLimit from "@/libs/utils/rate-limiter";
import { urlValidation } from "@/libs/validations";
import type { NextApiRequest, NextApiResponse } from "next";

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await limiter.check(res, 10, "CACHE_TOKEN"); // API RATE LIMITER
    switch (req.method) {
      case "POST":
        return handlePostMethod(req, res);

      default:
        return res.status(404).json({
          message: `The HTTP ${req.method} method is not supported at this route.`,
          status: 404,
        });
    }
  } catch (error) {
    res.status(429).json({ error: "Rate limit exceeded" });
  }
}

async function handlePostMethod(req: NextApiRequest, res: NextApiResponse) {
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
    console.log(error);
    return res
      .status(400)
      .send({ error: `Bad request. Please provide a valid URL` });
  }
}
