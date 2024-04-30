import styles from './Profile.module.css';

const Profile = (prop) => {
  return (
    <div className={styles.profileWrap}>
          <div>
              
                  <img className={styles.profileImage}
                src={prop.image}
                alt="User avatar"
            />
              
            
            <p className={styles.profileName}>{prop.name}</p>
            <p className={styles.profileTag}>@{prop.tag}</p>
            <p className={styles.profileTag}>{prop.location}</p>
        </div>

        <ul className={styles.profileList}>
            <li className={styles.profileItem}>
                <span>Followers</span>
                <span className={styles.profileBold}>{prop.stats.followers}</span>
            </li>
            <li className={styles.profileItem}>
                <span>Views</span>
                <span className={styles.profileBold}>{prop.stats.views}</span>
            </li>
            <li className={styles.profileItem}>
                <span>Likes</span>
                <span className={styles.profileBold}>{prop.stats.likes}</span>
            </li>
        </ul>
    </div>
);
}

export default Profile;