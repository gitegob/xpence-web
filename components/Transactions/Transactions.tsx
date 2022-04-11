import { TransactionType } from "../../utils/interfaces";
import { Transaction } from "./";

export const Transactions = () => {
  return (
    <div className="mt-8">
      <Transaction type={TransactionType.EXPENSE} />
      <Transaction type={TransactionType.EXPENSE} />
      <Transaction type={TransactionType.INCOME} />
      <Transaction type={TransactionType.INCOME} />
      <Transaction type={TransactionType.EXPENSE} />
      <Transaction type={TransactionType.EXPENSE} />
      <Transaction type={TransactionType.EXPENSE} />
      <Transaction type={TransactionType.INCOME} />
      <Transaction type={TransactionType.EXPENSE} />
      <Transaction type={TransactionType.EXPENSE} />
      <Transaction type={TransactionType.INCOME} />
      <Transaction type={TransactionType.EXPENSE} />
    </div>
  );
};
