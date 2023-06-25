import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';

const Home = () => {
  const user = useSelector(selectUser);
  const name = user
    ? `${user.name}, welcome to your contact book`
    : "please register if you do not have an account to see your contact book";

  return (
    <p style={{ paddingLeft: 200, paddingRight: 200 }}>Hello {name} </p>
  );
};

export default Home;
