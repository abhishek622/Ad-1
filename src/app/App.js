import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Ad1 from '../page/Ad1';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, CssBaseline } from '@material-ui/core';

function App() {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
    overrides: {
      MuiAppBar: {
        root: {
          transform: 'translateZ(0)',
        },
      },
    },
  });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" component={Ad1} />
        </Switch>
        <CssBaseline />
      </ThemeProvider>
    </Router>
  );
}

export default App;
