import CustomButton from '../../components/CustomButton';
import './style.css';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/login')
  }
  return (
    <main>
      <CustomButton sx={{
        fontSize: "2.2rem",
        backgroundColor: "#1a2fc9b8",
        ":hover":{
          backgroundColor: "#1a2fc9"
        }
      }}
      onClick={handleClick}
      > 
      ACESSAR CONTA
      </ CustomButton>
      <p className="image_copyright">
        Imagem de
        {' '}
        <a href="https://pixabay.com/pt/users/geralt-9301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2956974"> <b>Gerd Altmann</b> </a>
        {' '}
        por
        {' '}
        <a href="https://pixabay.com/pt/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2956974"> <b>Pixabay</b> </a>
      </p>
    </main>
  )
};

export default Home;
