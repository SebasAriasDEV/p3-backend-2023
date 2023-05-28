import { NextFunction, Request, Response } from 'express';
import prisma from '../helpers/prisma-client';
import { Farm } from '@prisma/client';

//******* Create a new farm ****************
const createFarm = async (req: Request, res: Response, next: NextFunction) => {
  try {
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
  } catch (error: any) {
    res.status(500).json({
      status: false,
      errorType: error.constructor.errorType,
      error: error.toString(),
    });
  }
};

export { createFarm };
