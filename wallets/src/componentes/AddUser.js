import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import axios from "axios";


const useStyles = makeStyles(theme => ({
    lol: {
        '& > *': {
            margin: theme.spacing(1),
            

        },

    },



}));


export default function AddUser() {
    const classes = useStyles();

    const stylePaper = {
        width: 600,
        margin: '20px auto',
        padding: '50px 20px',
        
    }


    //ADD NEW USER
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [users, setUsers] = useState([])
   

    const addClick = (e) => {
        e.preventDefault()
        const user = { firstName, lastName }
        console.log(user)
        fetch("http://localhost:8080/api/createUser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(() => {
            console.log("New user added!!!")
        })
    }

    // VIEW ALL USERS
    useEffect(() => {
        fetch("http://localhost:8080/api/users")
            .then(res => res.json())
            .then((resul) => {
                setUsers(resul)


            }

            )
    }, [])




    const deleteUser = (id) => {

        console.log(id);
        fetch("http://localhost:8080/api/deleteUser/${id}")
            .then(response => {
                console.log('DELETE: USER deleted');
                
            })
            .catch(error => console.error(error));
    };






    return (
        <Container style={{ backgroundColor: "dark" }}>

            <Paper elevation={3} style={stylePaper}>
                <h1 style={{ color: "blue" }}>Add User</h1>
                <form className={classes.lol} noValidate autoComplete='off'>

                    <TextField id="outlined-basic" label="First Name" variant="outlined" fullWidth
                        value={firstName}
                        onChange={(e) => setfirstName(e.target.value)} />
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth value={lastName}
                        onChange={(e) => setlastName(e.target.value)} />
                    <Button variant="contained" color="secondary" onClick={addClick} >SUBMIT</Button>



                </form>

            </Paper>

            <Paper elevation={3} style={stylePaper}>

                <h2>LIST USERS</h2>
                {users.map(user => (
                    <Paper elevation={9} style={{ margin: "10px", padding: "15px", textAlign: "left" }}
                        key={user.id}>
                        <Button onClick={() => deleteUser(user.userId)} style={{ float: 'right', background: "red", padding: '3px' }} variant="outlined">Delete</Button>

                        Id:{user.userId}<br />
                        FirstName:{user.firstName}<br />
                        LastName:{user.lastName}

                    </Paper>
                ))

                }


            </Paper>


        </Container>



    );
}




