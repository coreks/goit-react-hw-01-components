import user from 'components/PageUser/user.json';
import { PageUserInfo } from 'components/PageUser/PageUserInfo.jsx';
import statisticalData from 'components/Statistics/statistical-data.json';
import { StatisticsList } from 'components/Statistics/StatisticsList.jsx';
import { FriendList } from 'components/FriendList/FriendList';
import friends from 'components/FriendList/friends.json';
import { TransactionList } from 'components/TransactionHistory/TransactionList';
import transactions from 'components/TransactionHistory/transactions.json';

export const App = () => {
  return (
    <>
      <section>
        <PageUserInfo user={user} />
      </section>

      <section>
        <StatisticsList stats={statisticalData} />
      </section>

      <section>
        <FriendList friends={friends} />
      </section>

      <section>
        <TransactionList transactions={transactions} />
      </section>
    </>
  );
};
