import { Button, ContainerButtons, ContainerHeader, Logo } from "./styles";
import logo from '../../assets/LogoHeader.png';
import { useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate();

  return (
    <div>
      <ContainerHeader>
        <Logo src={logo} alt="logo" onClick={()=>navigate('/')}></Logo>
        <ContainerButtons>
          <Button onClick={()=>navigate('/')}>Home</Button>
          <Button onClick={()=>navigate('/eventos')}>Eventos</Button>
        </ContainerButtons>
      </ContainerHeader>
    </div>
  );
}

export default Header;