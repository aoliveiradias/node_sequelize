import db from '../models/index';

class TransactionService {
  static async getAllTransactions() {
    try {
      return await db.transactions.findAll({ include: [{
        model: db.transactionsEvents}]});
    } catch (error) {
        console.log(error)
        throw error;
    }
  }

  static async addTransaction(newTransaction) {
    try {
      return await db.transactions.create(newTransaction);
    } catch (error) {
      console.log(error)
      throw error;
    }
  }

  static async getTransactionById(id) {
      console.log(id)
    try {
      const transaction = await db.transactions.findOne({
        where: { id: id },
        include: {
            model: db.transactionsEvents
        }
      });

      return transaction;
    } catch (error) {
        console.log(error)  
        throw error;
    }
  }
}

export default TransactionService;