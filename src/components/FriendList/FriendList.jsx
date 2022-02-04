import styles from "./FriendList.module.css"
import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      
      {friends.map(({id, name, avatar, isOnline}) => (
        <li className={styles.item} key={id}>
          <span className={isOnline ? (styles.status) : (styles.statusInactive) }></span>
          <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={styles.name}>{name}</p>
        </li>
      ))}

    </ul>  
  )};
  
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool,
    }).isRequired
  ).isRequired,
}

export default FriendList;