import Stack from '@mui/material/Stack';
import useAuth from '../../hooks/useAuth';
import CardChat from '../CardChat';

const MainPrincipal = (props) => {
  const {chats, arquivadas} = useAuth()
  return (
  <Stack direction="column" spacing={2} sx={{
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }}>
    {
      chats.subMenuItems && chats.subMenuItems.map( item =>
      !arquivadas.find(id => id === item.id ) && <CardChat 
      id={item.id}
      name={item.name}
      owner={item.owner}
      subject={item.subject}
      users={item.users}
      />
      )}
  </Stack>
)
};

export default MainPrincipal;

