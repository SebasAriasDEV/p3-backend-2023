import { NextFunction, Request, Response } from 'express';
import prisma from '../helpers/prisma-client';
import { Farm } from '@prisma/client';

//******* Create a new farm ****************
const createFarm = async (req: Request, res: Response) => {
  const newFarm: Farm = await prisma.farm.create({
    data: {
      name: 'Finca El Paraiso',
      latitude: 111,
      longitude: 222,
    },
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

//Exports
export { createFarm, deleteFarm };