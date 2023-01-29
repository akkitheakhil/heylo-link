import prismaClient from "@/libs/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slugID = req.query.id as string;

  switch (req.method) {
    case "GET":
      return getShortLinkByID(slugID, res);

    default:
      return res.status(404).json({
        message: `The HTTP ${req.method} method is not supported at this route.`,
        status: 404,
      });
  }
}

async function getShortLinkByID(slug: string, res: NextApiResponse) {
  const result = await prismaClient.shortLinks.findUnique({
    where: {
      slug,
    },
    select: {
      url: true,
    },
  });

  if (result) {
    return res.json(result);
  }

  return res
    .status(404)
    .send({ error: `Couldn't find '${slug}', which was requested` });
}
