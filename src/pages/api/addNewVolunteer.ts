// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'
import { VolunteerType } from "@/types/VolunteerType";

const prisma = new PrismaClient()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const data: VolunteerType = req.body
    try {
        const result = await prisma.gonullu.create({
            data: {
                fullName: data.fullName,
                department: data.department,
                motivation: data.motivation,
                imgURL: data.imgURL,
                linkedinURL: data.linkedinURL
            }
        })
        console.log(result)
        res.status(200).json(result);
    }
    catch (error) {
        console.log(error)
        await prisma.$disconnect();
        res.status(500).json({ error: 'failed to record new volunteer!' })
        process.exit(1)
    }
}
