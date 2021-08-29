import { PageUser } from './PageUser';

export const PageUserInfo = ({ user }) => {
  return (
    <PageUser
      key={user.name}
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
  );
};
