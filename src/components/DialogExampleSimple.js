import React, { Component } from "react";

import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";

class DialogExampleSimple extends Component
{
    state = {
        open: false
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open:false});
    };

    render()
    {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            ></FlatButton>,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
            ></FlatButton>
        ];
        return (
            <div>
                <RaisedButton 
                    label="Dialog"
                    onTouchTap={this.handleOpen}
                ></RaisedButton>
                <Dialog
                    title="Dialog with Actions"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    The action in this window were passed in as an array of React objects.
                </Dialog>
            </div>
        );
    }
}

export default DialogExampleSimple;
