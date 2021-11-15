import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const NavigationHeader = (props) => {
    const [select, setSelect] = React.useState('');

    const handleChange = (event) => {
        setSelect(event.target.value);
    };

    return (
        <div >
            <Stack direction="row" spacing={2} sx={{
                borderBottom: 'solid 1px #919191',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '2%'
            }}>
                <Avatar>OA</Avatar>
                <FormControl sx={{ m: 1, minWidth: 100 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">New</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={select}
                        onChange={handleChange}
                        autoWidth
                        label="New"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'Conta'}>Conta</MenuItem>
                        <MenuItem value={'Contato'}>Contato</MenuItem>
                        <MenuItem value={'Menssagem'}>Menssagem</MenuItem>
                    </Select>
                </FormControl>
            </Stack>
        </div >
    )
};

export default NavigationHeader;