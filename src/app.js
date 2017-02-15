import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import DialogExampleSimple from "./components/DialogExampleSimple";

injectTapEventPlugin();

const element = (
    <MuiThemeProvider>
        <DialogExampleSimple></DialogExampleSimple>
    </MuiThemeProvider>
);

render(
    element,
    document.getElementById('root')
);
