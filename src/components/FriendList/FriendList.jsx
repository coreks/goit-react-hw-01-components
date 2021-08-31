import PropTypes from 'prop-types';
import { FriendlItem } from 'components/FriendList/FriendItem.jsx';
import css from 'components/FriendList/FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friends_list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendlItem key={id} isOnline={isOnline} name={name} avatar={avatar} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
