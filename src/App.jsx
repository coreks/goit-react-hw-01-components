import user from 'components/PageUser/user.json';
import { PageUserInfo } from 'components/PageUser/PageUserInfo.jsx';
import statisticalData from 'components/Statistics/statistical-data.json';
import { StatisticsTitle } from 'components/Statistics/StatisticsTitle.jsx';
import { StatisticsList } from 'components/Statistics/StatisticsList.jsx';
import css from 'components/Statistics/Statistics.module.css';
import { FriendList } from 'components/FriendList/FriendList';
import friends from 'components/FriendList/friends.json';

export const App = () => {
  return (
    <>
      <section>
        <PageUserInfo user={user} />
      </section>

      <section className={css.statistics}>
        <StatisticsTitle title="Upload stats" stats={statisticalData} />
        <StatisticsList stats={statisticalData} />
      </section>

      <section>
        <FriendList friends={friends} />
      </section>
    </>
  );
};
