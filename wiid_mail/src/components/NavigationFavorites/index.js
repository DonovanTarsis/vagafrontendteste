import * as React from 'react';
import Stack from '@mui/material/Stack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CustomButton from '../CustomButton';
import useAuth from '../../hooks/useAuth';

const NavigationFavorites = (props) => {
    const {language} = useAuth()
    return (
        <div >
            <Stack direction="row" spacing={2} sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                padding: '2%'
            }}>
                <CustomButton variant="outlined" endIcon={<MoreVertIcon />} sx={{
                    color:"#000",
                    borderColor: "#000",
                    ":hover": {
                      color: "#919191",
                      borderColor: "#919191"
                    }
                    }}>
                    {language.favorites}
                </CustomButton>
            </Stack>
        </div >
    )
};

export default NavigationFavorites;