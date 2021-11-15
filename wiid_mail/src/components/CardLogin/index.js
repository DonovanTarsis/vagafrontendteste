import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CustomButton from '../../components/CustomButton';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import requestFetch from '../../Services/requestFetch';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://wi-id.com/">
                WiiD Mail
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

function CardLogin() {
    const { setLogado, setTree } = useAuth();
    const history = useHistory();
    const [localUser, setLocalUser] = useState('');
    const [localSenha, setLocalSenha] = useState('');

    function handleUser (event) {
        setLocalUser(event.target.value)
    }
    function handleSenha (event) {
        setLocalSenha(event.target.value)
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if ( localUser !== "Admin" || localUser !== localSenha ){
            return
        }
        const link = 'http://my-json-server.typicode.com/workinideas/vagafrontendteste/menus'
        requestFetch(link, 'GET', setTree)
        setLogado(true)
        history.push('./Main')
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" sx={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <CssBaseline />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: "#ffffff88",
                        padding: '20px',
                        borderRadius: '15px',
                        fontSize: '2.5rem'
                    }}
                >
                    <Typography component="p" variant="p">
                        Bem vindo
                    </Typography>
                    <Typography component="h1" variant="h5">
                        Faça o login com sua conta
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt:1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="text"
                            label="User"
                            type="text"
                            name="text"
                            autoFocus
                            value={localUser}
                            onChange={handleUser}                            
                        />
                        <TextField
                            className="input"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={localSenha}
                            onChange={ handleSenha }  
                        />
                        <CustomButton
                            className="btn-submit"
                            id="submit"
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={
                                { mt: 3, mb: 2, backgroundColor: "#04C45C", ":hover": { backgroundColor: "#0ab459" } }
                            }
                        >
                            LOGIN
                        </CustomButton>

                        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }} >
                            Não tem cadastro?
                            <Link to="/login">
                                clique aqui!
                            </Link>{' '}
                        </Typography>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}

export default CardLogin;
