import { Request, Response } from 'express';
import prisma from '../helpers/prisma-client';

//************ Create a Batch */
const createBatch = async (req: Request, res: Response) => {
  const { name, farmID } = req.body;

  const newBatch = await prisma.batch.create({
    data: { name, farmID },
  });

  res.status(200).json({
    status: true,
    newBatch,
  });
};

//************ Delete a Batch */
const deleteBatch = async (req: Request, res: Response) => {
  const { id } = req.params;

  const deletedBatch = await prisma.batch.delete({
    where: {id},
  });

  res.status(200).json({
    status: true,
    deletedBatch,
  });
};

//************ Update a Batch */
const updateBatch = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;

  const updatedBatch = await prisma.batch.update({
    where: { id },
    data: { name },
  });

  res.status(200).json({ status: true, updatedBatch });
};

//************** Get all batches */
const getAllBatches = async ( req:Request, res:Response) => {
    const batches = (await prisma.batch.findMany({}));

    res.status(200).json({
        status: true,
        totalBatches: batches.length,
        batches
    })
}

//Exports
export { createBatch, updateBatch, deleteBatch, getAllBatches };
