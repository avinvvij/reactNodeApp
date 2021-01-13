//Imports
import React, { useState,useContext} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

//Import Other Component
import Copyright from '../copyrightComponent/Copyright'

//Import Services
import LoginService from '../../service/LoginService'

//Import Style
import LoginStyle from '../../style/LoginStyle'

//Context
import {UserContext} from '../../context/UserContextManagement'

function Login() {
  const classes = LoginStyle();

  //Initialize State
const [usrnm, setUsrnm] = useState("");
const [pwd, setPwd] = useState("");



//Use Context
const {usernm, setUsernm} = useContext(UserContext);

//To update Context
React.useEffect(() => {
  setUsernm(usrnm);   
},[usrnm,setUsernm]);

//On click Submit Event
const handleSubmit = (e) => {
  e.preventDefault();
  if (LoginService.UserInValidate(usrnm,pwd)) {//Validate User
    window.alert("Please Enter Username and Password");
  }
  else {
    //Authenticate User
    LoginService.UserAuthRequest(usrnm,pwd).then(function(response) {
      let result=JSON.parse(response);
      if (result.status === 1) {
        setUsernm(usrnm);   //Updating Context
        console.log(usrnm);
        window.location='/dashboard';
     }
     else {
         window.alert(result.msg);
     }
    }); 
  }
}



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={e =>setUsrnm(e.target.value)} 
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e =>setPwd(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default Login;