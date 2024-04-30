import styles from './FriendListItem.module.css'

const FriendListItem = (prop) => {
  return (
    <li className={styles.friendsListItem}>
<img src={prop.avatar} alt="Avatar" width="48" />
  <p>{prop.name}</p>
      <p className={prop.isOnline == true ? styles.isOnline : styles.isOffline}>{prop.isOnline == true ? "Online" : "Offline"}</p>
    </li>
);
}
export default FriendListItem;