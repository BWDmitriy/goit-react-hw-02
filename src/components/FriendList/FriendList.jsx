import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './Friends.module.css'

const FriendList = ({friends}) => {
  return (
      <ul className={styles.friendsList}>
      {friends.map((friend) => <FriendListItem avatar={friend.avatar} name={friend.name} key={friend.id} isOnline={friend.isOnline}/>)}
    </ul>
  );
};

export default FriendList