import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters style={{ justifyContent: "space-between" }}>
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
                        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                            Codemancers Task Manager
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
                            // float: 'right',
                        }}
                    >
                        <Link to="/professor" style={{ textDecoration: 'none', color: 'white' }}>
                            Add Post
                        </Link>
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default Navbar;