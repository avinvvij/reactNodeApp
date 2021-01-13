import axios from 'axios'

const LoginService = {
    UserInValidate:function (usrnm,pwd) {
        if (usrnm==="" || pwd==="" ) {
            return true;
          }
          else {
            return false;
          }
    },
    UserAuthRequest:async function (usrnm,pwd) {
      return axios({
            method:'post',
            url:'http://localhost:3030/login',
            data:{ 'username': usrnm, 'password': pwd },
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(response=>JSON.stringify(response.data))
    }
};

export default LoginService;