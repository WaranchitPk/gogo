import {Toolbar, Typography} from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import {lighten} from "@material-ui/core/styles/colorManipulator";
import {withStyles} from '@material-ui/core/styles';

const toolbarStyles = theme => ({
    root: {
        paddingRight: theme.spacing.unit,
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    spacer: {
        flex: '1 1 100%',
    },
    actions: {
        color: theme.palette.text.secondary,
    },
    title: {
        flex: '0 0 auto',
    },
});

const ToolBarSelect = ({numSelected, classes}) => {
    return (
        <Toolbar
            className={classNames(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}>
            <div className={classes.title}>
                {numSelected > 0 ? (
                    <Typography color="inherit" variant="subheading">
                        {numSelected} selected
                    </Typography>
                ) : (
                    <Typography variant="title" id="tableTitle">
                        โภชนาการอาหาร
                    </Typography>
                )}
            </div>
        </Toolbar>
    )
};
export default withStyles(toolbarStyles)(ToolBarSelect)