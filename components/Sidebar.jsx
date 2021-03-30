import { Avatar, IconButton, Button } from '@material-ui/core';
import {} from '@material-ui/icons';
import styles from '../styles/Sidebar.module.css';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';
import * as EmailValidator from 'email-validator';
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Sidebar = () => {
  const [user] = useAuthState(auth);

  const createChat = () => {
    const input = prompt('لطفا ایمیل مخاطب را وارد کنید');

    !input && null;

    if (EmailValidator.validate(input)) {
      // this is where whe add chats to firestore db
      db.collection('chats').add({
        users: [user.email, input],
      });
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <Avatar className={styles.userAvatar} onClick={() => auth.signOut()} />
        <div className={styles.iconContainer}>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className={styles.search}>
        <SearchIcon />
        <input className={styles.searchInput} placeholder="...جستجو" />
      </div>
      <Button className={styles.sidebarButton} onClick={createChat}>
        {' '}
        چت جدید
      </Button>
    </main>
  );
};

export default Sidebar;
