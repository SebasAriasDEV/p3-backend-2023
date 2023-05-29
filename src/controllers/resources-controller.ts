import { Request, Response } from 'express';
import prisma from '../helpers/prisma-client';

//************* Create a Resource */
const createResource = async (req: Request, res: Response) => {
  const { name, brand, availableAmount, resourceType, measureUnit } = req.body;

  const newResource = await prisma.resource.create({
    data: { name, brand, availableAmount, resourceType, measureUnit },
  });

  res.status(200).json({
    status: true,
    newResource,
  });
};

//************* Delete a Resource by ID */
const deleteResource = async (req: Request, res: Response) => {
  const { id } = req.params;

  const deletedResource = await prisma.resource.delete({
    where: { id },
  });

  res.status(200).json({
    status: true,
    deletedResource,
  });
};

//************* Update a Resource by ID */
const updateResource = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, brand, availableAmount, resourceType, measureUnit } = req.body;

  const updatedResource = await prisma.resource.update({
    where: { id },
    data: { name, brand, availableAmount, resourceType, measureUnit },
  });

  res.status(200).json({
    status: true,
    updatedResource,
  });
};

//************* Get all resources */
const getAllResources = async (req: Request, res: Response) => {
  const resources = await prisma.resource.findMany({});
  res.status(200).json({
    status: true,
    resources,
  });
};

//Exports
export { createResource, deleteResource, updateResource, getAllResources };
