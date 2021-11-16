import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import * as React from 'react';

function SearchBar() {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottom: 'solid 1px #919191'
            }}
        >
            <TextField
                fullWidth
                label="Pesquisar"
                id="search"
                InputProps={{
                    endAdornment: <InputAdornment position="end">
                        <IconButton >
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                }}
                sx={{
                    width: '90%',
                    margin: '2% 5%'
                }}
            />
        </Box>
    );
}
export default SearchBar;