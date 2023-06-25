import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';

const Home = () => {
  const user = useSelector(selectUser);
  const name = user
    ? `${user.name}, welcome to your contact book`
    : "Task manager welcome page 💁‍♀️";

  return (
    <p style={{ paddingLeft: 200, paddingRight: 200 }}>Hello Dear {name} </p>
  );
};

export default Home;
