// UserProfile.js
import { auth } from '../firebase';

const UserProfile = () => {
  const user = auth.currentUser;

  return (
    <div>
      <img src={user.photoURL} alt="User Profile" />
      <p>{user.displayName}</p>
      {/* Add other user details if needed */}
    </div>
  );
};

export default UserProfile;
