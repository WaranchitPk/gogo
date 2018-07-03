import React from 'react';
import {AppBar, Tab, Tabs} from '@material-ui/core'
import {Link} from 'react-router-dom';
import '../style/exercise.css'

const Exercise = ({value, handleChange}) => {
    return (
        <div style={{marginTop: '1%'}}>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    fullWidth
                    centered>
                    <Tab label="หน้าอก" component={Link} to='/exercise/chests' value={0}/>
                    <Tab label="แขน" component={Link} to='/exercise/arms'/>
                    <Tab label="ไหล่" component={Link} to='/exercise/shoulders'/>
                    <Tab label="หลัง" component={Link} to='/exercise/backs'/>
                    <Tab label="ขา" component={Link} to='/exercise/legs'/>
                    <Tab label="หน้าท้อง" component={Link} to='/exercise/bellys'/>
                </Tabs>
            </AppBar>
        </div>
    );
};

export default Exercise;
