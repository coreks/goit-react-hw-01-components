import PropTypes from 'prop-types';
import css from 'components/PageUser/PageUser.module.css';

export const PageUser = ({ user }) => {
  const {
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;

  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={name} className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.stats_item}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.stats_item}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.stats_item}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

PageUser.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
