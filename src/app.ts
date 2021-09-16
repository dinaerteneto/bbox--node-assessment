import 'module-alias/register'
import express, { Request, Response, NextFunction } from 'express';
import { AppError } from '@/errors/AppError';
import { router } from '@/routes'
import '@/infra/db/typeorm';

const app = express()

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
      return response
        .status(err.statusCode)
        .json({ status: 'error', message: err.message });
    }
  
    console.error(err);
  
    return response
      .status(500)
      .json({ status: 'error', message: 'Internal server error' });
  });

app.use(express.json())
app.use(router)

export { app }
