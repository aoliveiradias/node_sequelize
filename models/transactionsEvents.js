'use strict';
module.exports = (sequelize, Sequelize) => {
  const TransactionsEvents = sequelize.define('transactionsEvents', {
    transactionId: Sequelize.UUID,
    status: Sequelize.STRING,
    details: Sequelize.JSONB,
    amount: Sequelize.INTEGER,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  }, {});
  TransactionsEvents.associate = function(models) {
    TransactionsEvents.belongsTo(models.transactions);
  };
  return TransactionsEvents;
};