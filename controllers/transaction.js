
import TransactionService from '../services/transaction';
import Util from '../utils/utils';

const util = new Util();

class TransactionController {
  static async getAllTransactions(req, res) {
    try {
      const transactions = await TransactionService.getAllTransactions();
      if (transactions.length > 0) {
        util.setSuccess(200, 'Transaction retrieved', transactions);
      } else {
        util.setSuccess(200, 'No Transaction found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
 
  static async getTransaction(req, res) {
    const { id } = req.params;
    try {
      const transaction = await TransactionService.getTransactionById(id);

      if (!transaction) {
        util.setError(404, `Cannot find transaction with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found transaction', transaction);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }
}

export default TransactionController;