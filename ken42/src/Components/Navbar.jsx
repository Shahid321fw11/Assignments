import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';



const Navbar = () => {

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                        }}
                    >
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            KEN42
                        </Link>
                    </Typography>

                    <Typography
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                        }}
                    >
                        <Link to="/professor" style={{ textDecoration: 'none' }}>
                            Professor
                        </Link>
                    </Typography>
                    <Typography
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                        }}
                    >
                        <Link to="/classRoom" style={{ textDecoration: 'none' }}>
                            Class-Room
                        </Link>
                    </Typography>


                    <Typography
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                        }}
                    >
                        <Link to="/studentGroup" style={{ textDecoration: 'none' }}>
                            Student-Group
                        </Link>
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default Navbar;
