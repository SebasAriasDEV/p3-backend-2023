import { NextFunction, Request, Response } from 'express';
import prisma from '../helpers/prisma-client';
import { Farm } from '@prisma/client';

//******* Create a new farm ****************
const createFarm = async (req: Request, res: Response) => {
  const { name, latitude = 111, longitude = 222 } = req.body;
  const newFarm: Farm = await prisma.farm.create({
    data: { name, latitude, longitude },
  });

  res.status(200).json({
    status: true,
    newFarm,
  });
};

//******** Delete a farm by id */
const deleteFarm = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedFarm = await prisma.farm.delete({
    where: { id },
  });

  res.status(200).json({
    status: true,
    deletedFarm,
  });
};

//******** Update a farm by id */
const updateFarm = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, latitude, longitude } = req.body;
  const updatedFarm = await prisma.farm.update({
    where: { id },
    data: { name, latitude, longitude },
  });

  res.status(200).json({
    status: true,
    updatedFarm,
  });
};

//******** Read all farms */
const getAllFarms = async (req: Request, res: Response) => {
  const farms = await prisma.farm.findMany({});

  res.status(200).json({
    status: true,
    farms,
  });
};

//Exports
export { createFarm, deleteFarm, updateFarm, getAllFarms };
