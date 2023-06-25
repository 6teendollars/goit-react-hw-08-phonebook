import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';

const Home = () => {

  const user = useSelector(selectUser);
  const name = user
    ? `${user.name}, welcome to your contact book`
    : "please register if you do not have an account to see your contact book";

  return (
    <p style={{fontWeight: 500,    fontSize: 48,    textAlign: 'center'}}>Hello {name}🙋 </p>
  );
};

export default Home;
