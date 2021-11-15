import * as React from 'react';
import Stack from '@mui/material/Stack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';

const NavigationFavorites = (props) => {

    return (
        <div >
            <Stack direction="row" spacing={2} sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                padding: '2%'
            }}>
                <Button variant="outlined" endIcon={<MoreVertIcon />} sx={{
                    color:"#000",
                    borderColor: "#000"
                    }}>
                    Favoritas
                </Button>
            </Stack>
        </div >
    )
};

export default NavigationFavorites;