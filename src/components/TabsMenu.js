import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import PhotoPage from "../pages/PhotoPage";
import PostsPage from "../pages/PostsPage";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-around',
        '& li': {
            display: 'inline',
            '& a': {
                textDecoration: 'none',
                color: '#2d4e7d'
            },
        },
    },
});


export default function TabsMenu() {
    const classes = useStyles();

  return (
    <Router>
        <React.Fragment>
        <CssBaseline />
        <Container fixed>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <nav className="navbar navbar-light">
                <ul className={classes.root}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/PhotoPage">PhotoPage</Link>
                </li>
                <li>
                    <Link to="/PostsPage">PostsPage</Link>
                </li>
                </ul>
            </nav>
            </Box>

            <Route path="/" exact component={Home} />
            <Route path="/PhotoPage"  component={PhotoPage} />
            <Route path="/PostsPage"  component={PostsPage} />

        </Container>
        </React.Fragment>
    </Router>
  );
}