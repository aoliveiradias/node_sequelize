import { Router } from 'express';
import TransactionController from '../controllers/transaction';

const transactionRouter = Router();

transactionRouter.get('/', TransactionController.getAllTransactions);
transactionRouter.get('/:id', TransactionController.getTransaction);

export default transactionRouter;
