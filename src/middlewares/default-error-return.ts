import { ErrorRequestHandler } from 'express';

export const defaultErrorReturn: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  res.status(500).json({
    type: err.constructor.name,
    message: err.toString(),
  });
};
