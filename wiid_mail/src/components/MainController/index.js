import Stack from '@mui/material/Stack';
import Checkbox from "../CheckBox";
import CustomButton from "../CustomButton";
import IconButton from '@mui/material/IconButton';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import './style.css'
import useAuth from '../../hooks/useAuth';

const MainController = (props) => {
  const { language, chats, setSelecteds, selectedAll, setSelectedAll, setArquivadas, selecteds, arquivadas} = useAuth();

  function handleCheck(event) {
    setSelectedAll(!selectedAll)
    if(event.target.checked){
        const newSelecteds = [];
        for(let item of chats.subMenuItems){
          newSelecteds.push(item.id)
        }
        setSelecteds(newSelecteds)
    }else{
        const newSelecteds = [];
        setSelecteds(newSelecteds)
    }
}

function handleClick() {
  setArquivadas([...arquivadas, ...selecteds])
  setSelecteds([])
  setSelectedAll(false)
}
  return(
  <Stack spacing={2} direction="row" sx={{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2%',
    borderBottom: 'solid 1px #919191'
  }}>
    <div className="buttons-container">
      <Checkbox  onClick={handleCheck} checked={selectedAll} />
      <CustomButton sx={{
        color: "#000",
        borderColor: "#000",
        ":hover": {
          color: "#919191",
          borderColor: "#919191"
        }
      }}>
        {language.toAssign}
      </CustomButton>
      <CustomButton sx={{
        color: "#000",
        borderColor: "#000",
        ":hover": {
          color: "#919191",
          borderColor: "#919191"
        }
      }}
      onClick={handleClick} 
      >
        {language.toFile}
      </CustomButton>
      <CustomButton sx={{
        color: "#000",
        borderColor: "#000",
        ":hover": {
          color: "#919191",
          borderColor: "#919191"
        }
      }}>
        {language.program}
      </CustomButton>
    </div>
    <IconButton >
      <FilterAltIcon />
    </IconButton>
  </Stack>
)};

export default MainController;
