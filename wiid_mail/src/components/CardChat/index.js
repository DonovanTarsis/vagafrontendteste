import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import CircleCheckBox from '../CircleCheckBox'
import useAuth from '../../hooks/useAuth';
import setCheckBoxAll from '../../helper/setCheckBoxAll';

function CardChat({ id, name, owner, subject, users }) {
    const { chats, selecteds, setSelecteds, selectedAll, setSelectedAll } = useAuth()
    const [over, setOver] = useState(false)
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        if (selectedAll) {
            setSelected(selectedAll)
        } else if (selecteds.length) {
            return
        } else {
            setSelected(selectedAll)
        }
    }, [selectedAll, setSelected, selecteds])

    function handleCheck(event) {
        setSelected(!selected)
        if (event.target.checked) {
            const newSelecteds = [...selecteds, id];
            setSelecteds(newSelecteds)
            setCheckBoxAll(newSelecteds,  chats, selectedAll, setSelectedAll);
        } else {
            const newSelecteds = selecteds.filter(item => item !== id);
            setSelecteds(newSelecteds)
            setCheckBoxAll(newSelecteds,  chats, selectedAll, setSelectedAll);
        }
    }
    function handleMouseOver(id) {
        setOver(!over)
    }
    return (
        <Card sx={{
            width: '90%',
            padding: '10px 2%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }} onMouseEnter={() => handleMouseOver(id)}
            onMouseLeave={() => handleMouseOver(id)}
        >
            <Stack direction="row" spacing={2}
                sx={{
                    width: '10%'
                }}>
                {(over || selecteds.length) ? <CircleCheckBox onClick={handleCheck} checked={selected} /> : <Avatar>{owner}</Avatar>}
            </Stack>
            <CardContent sx={{
                width: '90%',
                padding: '10px 5%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
            >
                <Stack direction="column" spacing={2}
                    sx={{
                    }}>
                    <h3 className="name">
                        {name}
                    </h3>
                    <p className="subject">
                        {subject}
                    </p>
                    <div>
                        <span className="box">
                            <WhatsAppIcon /> Caixa de Entrada
                        </span>
                    </div>
                </Stack>
                <Stack direction="column" spacing={2}
                    sx={{
                    }}>
                    <span className="date">
                        Hoje, 11:42
                    </span>
                    <span className="time">
                        30 min
                    </span>
                    <Stack direction="row">
                        {
                            users.map(item => {
                                return (
                                    <Avatar sx={{
                                        border: 'solid 1px #000',
                                        marginLeft: '-10px'
                                    }}>{item}</Avatar>
                                )
                            }
                            )
                        }
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default CardChat;


