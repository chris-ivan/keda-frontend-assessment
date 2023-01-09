import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IUserState } from '../interfaces/userState';
import { userSelector, removeUser } from '../features/user/userSlice';
import { PATH } from '../utils/constant';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useSelector(userSelector) as IUserState;

  const handleLogout = () => {
    dispatch(removeUser());
    navigate(PATH.LOGIN);
  };

  return (
    <div>
      <div>This is the {username}&apos;s Page</div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProfilePage;
