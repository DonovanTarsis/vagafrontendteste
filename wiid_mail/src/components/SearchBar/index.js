import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import setDictionary from '../../helper/setDictionary';
import setPalet from '../../helper/setPalete';
import useAuth from '../../hooks/useAuth';
import SwitchTheme from '../SwitchTheme';

function SearchBar() {
    const {
        tema,
        setBackGround,
        setBoxShadow,
        setFontPrimary,
        setFontSecondary,
        fontSecondary,
        fontPrimary,
        backGround,
        language, 
        setLanguage
    } = useAuth()
    const [select, setSelect] = useState('');
    const handleChange = (event) => {
        setSelect(event.target.value);
        setDictionary(event.target.value, setLanguage)
    };
    useEffect(() => {
        setPalet(
            tema,
            setBackGround,
            setBoxShadow,
            setFontPrimary,
            setFontSecondary)
    }, [tema,
        setBackGround,
        setBoxShadow,
        setFontPrimary,
        setFontSecondary])
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottom: `solid 1px ${fontSecondary}`
            }}
        >
            <TextField
                fullWidth
                label={language.searchLabel}
                id="search"
                InputProps={{
                    endAdornment: <InputAdornment position="end">
                        <IconButton >
                            <SearchIcon sx={{ color: `${fontPrimary}` }} />
                        </IconButton>
                    </InputAdornment>
                }}
                sx={{
                    width: '75%',
                    margin: '2% 5%',
                    color: `${fontPrimary}`,
                    backgroundColor: `${backGround}`
                }}
            />
            <Stack direction="column" spacing={2}
                sx={{
                    width: '15%'
                }}>
                <SwitchTheme />
                <FormControl sx={{ m: 1, minWidth: 100 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">{language.searchSelectLabel}</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={select}
                        onChange={handleChange}
                        autoWidth
                        label={language.searchSelectLabel}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'ptbr'}>Português</MenuItem>
                        <MenuItem value={'en'}>English</MenuItem>
                    </Select>
                </FormControl>
            </Stack>
        </Box>
    );
}
export default SearchBar;