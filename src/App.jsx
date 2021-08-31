import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import { PageUser } from 'components/PageUser/PageUser.jsx';
import { Statistics } from 'components/Statistics/Statistics.jsx';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionList } from 'components/TransactionHistory/TransactionList';

export const App = () => {
  return (
    <>
      <PageUser user={user} />
      <Statistics title={'Upload stats'} stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionList transactions={transactions} />
    </>
  );
};
