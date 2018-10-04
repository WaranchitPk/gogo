import React from 'react';
import {
    Button,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse,
    List
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from "@material-ui/icons/Send";
import DraftsIcon from "@material-ui/icons/Drafts";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import {withStyles} from '@material-ui/core/styles';

import HistoryIcon from '@material-ui/icons/History'
import {Link} from 'react-router-dom';

const styles = theme => ({
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
})
const SideDrawerLogin = ({
                             logout,
                             isOpenListNestedIncome,
                             onClickOpenNestedIncome,
                             classes
                         }) => (
    <div>
        {/*<ListItem button component={Link} to='/admin/employee'>*/}
        {/*<ListItemIcon>*/}
        {/*<AccountCircleIcon/>*/}
        {/*</ListItemIcon>*/}
        {/*<ListItemText primary="ข้อมูลพนักงาน"/>*/}
        {/*</ListItem>*/}
        <ListItem button component={Link} to='/register'>
            <ListItemIcon>
                <DraftsIcon/>
            </ListItemIcon>
            <ListItemText primary="สมัครสมาชิกให้กับผู้ใช้"/>
        </ListItem>
        <ListItem button component={Link} to='/employee/showUser'>
            <ListItemIcon>
                <DraftsIcon/>
            </ListItemIcon>
            <ListItemText primary="รายชื่อสมาชิก"/>
        </ListItem>
        <ListItem button component={Link} to='/admin/neutrian'>
            <ListItemIcon>
                <SendIcon/>
            </ListItemIcon>
            <ListItemText primary="โภชนาการอาหาร"/>
        </ListItem>
        {/*<ListItem button onClick={onClickOpenNestedIncome}>*/}
            {/*<ListItemIcon>*/}
                {/*<InboxIcon/>*/}
            {/*</ListItemIcon>*/}
            {/*<ListItemText inset primary="รายรับ-รายจ่าย"/>*/}
            {/*{isOpenListNestedIncome ? <ExpandLess/> : <ExpandMore/>}*/}
        {/*</ListItem>*/}
        <ListItem button component={Link} to='/admin/income-express/main'>
            <ListItemIcon>
                <SendIcon/>
            </ListItemIcon>
            <ListItemText primary="รายรับ-รายจ่าย"/>
        </ListItem>
        {/*<Collapse in={isOpenListNestedIncome} timeout="auto" unmountOnExit>*/}
        {/*<List component="div" disablePadding className={classes.nested}>*/}
        {/*<ListItem button component={Link} to='/admin/incomes_expenses/income'>*/}
        {/*<ListItemIcon>*/}
        {/*<StarBorder/>*/}
        {/*</ListItemIcon>*/}
        {/*<ListItemText inset primary="รายรับ"/>*/}
        {/*</ListItem>*/}
        {/*<ListItem button component={Link} to='/admin/incomes_expenses/expenses'>*/}
        {/*<ListItemIcon>*/}
        {/*<StarBorder/>*/}
        {/*</ListItemIcon>*/}
        {/*<ListItemText inset primary="รายจ่าย"/>*/}
        {/*</ListItem>*/}
        {/*</List>*/}
        {/*</Collapse>*/}
        <ListItem button component={Link} to='/admin/pricing_promotion'>
            <ListItemIcon>
                <SendIcon/>
            </ListItemIcon>
            <ListItemText primary="จัดการข้อมูลค่าใช้บริการและโปรโมชัน"/>
        </ListItem>
        <ListItem button component={Link} to='/TrainingEquipment'>
            <ListItemIcon>
                <SendIcon/>
            </ListItemIcon>
            <ListItemText primary="จัดการเครื่องเล่น"/>
        </ListItem>
        <ListItem button onClick={logout}>
            <ListItemIcon>
                <DraftsIcon/>
            </ListItemIcon>
            <ListItemText primary="ออกจากระบบ"/>
        </ListItem>
    </div>
);

export default withStyles(styles)(SideDrawerLogin);
