import React from 'react';
import {Link} from "react-router-dom";
import {Button,Menu,MenuItem} from '@material-ui/core';
const exercise_cal = ({isOpen,stateOpen,isClose}) => {
    return (
        <div>
            <Button
                color="inherit"
                component={Link} to='/exercise'>
                Exercise</Button>
            <Button
                color="inherit"
                onClick={isOpen}>
                Calculator</Button>
            <Menu
                anchorEl={stateOpen}
                open={Boolean(stateOpen)}
                onClose={isClose}>
                <MenuItem onClick={isClose} component={Link} to='/calculator_tdee'>TDEE</MenuItem>
                <MenuItem onClick={isClose} component={Link} to='/calculator_bmi'>BMI</MenuItem>
                <MenuItem onClick={isClose} component={Link} to='/calculator_mhr'>MHR</MenuItem>
            </Menu>
        </div>
    );
};

export default exercise_cal;
