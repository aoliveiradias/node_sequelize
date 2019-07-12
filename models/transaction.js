'use strict';
module.exports = (sequelize, Sequelize) => {
  const Transaction = sequelize.define('transactions', {
    accountId: Sequelize.STRING,
    status: Sequelize.STRING,
    type: Sequelize.STRING,
    amount: Sequelize.INTEGER,
    refundedAmount: Sequelize.INTEGER,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE

  });
  Transaction.associate = function(models) {
    Transaction.hasMany(models.transactionsEvents);
  };
  return Transaction;
};