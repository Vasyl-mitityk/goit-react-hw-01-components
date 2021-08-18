import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

// function friendOnline(status) {
//   if (status) {
//     return '#2ECC71';
//   } else {
//     return '#E74C3C';
//   }
// }

export default function FriendList ({ friends}) {
  return (
    <div className={styles.friends}>
      <ul className={styles.friendlist}>
        {friends.map(friend => (
          <li className={styles.item} key={friend.id}>
            {/* <span
              className={styles.status}
              style={{ color: friendOnline(friend.isOnline) }}
            >
              {' '}
              ●
            </span> */}

          {friend.isOnline ? (
            <span className={styles.online}></span>
          ) : (
            <span className={styles.offline}></span>
          )}
            <img
              className={styles.avatar}
              src={friend.avatar}
              alt={friend.name}
              width="48"
            />
            <p className={styles.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
FriendList.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.string,
 
};
FriendList.defaultProps = {
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg',
  name: 'User name',
  isOnline: false,
};

