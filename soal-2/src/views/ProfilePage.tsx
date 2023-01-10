import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IUserState } from '../interfaces/userState';
import { userSelector, removeUser } from '../features/user/userSlice';
import { PATH } from '../utils/constant';

import styles from './ProfilePage.module.scss';
import SvgContainer from '../components/general/SvgContainer';
import WIPImage from '../assets/images/illustration/illustration-work-in-progress.svg';
import Button from '../components/general/Button';
import FadeInElement from '../components/general/FadeInElement';
import Fade from '../layout/Fade';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useSelector(userSelector) as IUserState;

  const handleLogout = () => {
    dispatch(removeUser());
    navigate(PATH.LOGIN);
  };

  return (
    <Fade location={location}>
      <div className="page-container">
        <FadeInElement>
          <div className={styles['profile-page']}>
            <h2>PROFILE PAGE</h2>
            <SvgContainer
              src={WIPImage}
              className={styles['profile-page-illustration']}
            />
            <div className={styles['profile-page-text']}>
              <p>
                Welcome, {username}! We&apos;re currently working hard in
                building this feature. Check back in a few weeks to see the
                finished product!
              </p>
            </div>
            <div className={styles['button-container']}>
              <Button
                fullWidth
                size="small"
                type="secondary"
                onClick={handleLogout}
              >
                LOGOUT
              </Button>
              <Button fullWidth to={PATH.HOME} size="small">
                HOMEPAGE
              </Button>
            </div>
          </div>
        </FadeInElement>
      </div>
    </Fade>
  );
};

export default ProfilePage;
