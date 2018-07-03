import React from 'react';
import {
    Grid,
    Input,
    InputLabel,
    FormControl,
    Button,
    Card,
    CardContent,
    Typography,
    FormGroup
} from '@material-ui/core';

const styles = {
    Button: {
        marginLeft: '3%',
        marginBottom: '3%'
    },
    container: {
        marginTop: '30%',
    },
    header: {
        textAlign: 'center'
    }
};
const Login = ({handleChange, onSubmit}) => (
    <div>
        <Grid container direction='column' alignItems='center' justify='center' style={styles.container}>
            <Grid item xs={10} sm={10}>
                <Card>
                    <Typography style={styles.header}>
                        Login
                    </Typography>
                    <CardContent>
                        <FormGroup>
                            <FormControl>
                                <InputLabel>Email</InputLabel>
                                <Input type='text' name='username' onChange={handleChange}/>
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                            <FormControl>
                                <InputLabel>Password</InputLabel>
                                <Input type='password' name='password' onChange={handleChange}/>
                            </FormControl>
                        </FormGroup>
                    </CardContent>
                    <Button
                        variant='contained'
                        color='primary'
                        style={styles.Button}
                        onClick={onSubmit}>Login</Button>
                </Card>
            </Grid>
        </Grid>
    </div>
);


export default Login;
