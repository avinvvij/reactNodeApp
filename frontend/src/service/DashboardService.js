import axios from 'axios'

const DashboardService = {
    FetchCountriesRequest:async function (usrnm,pwd) {
      return axios({
            method:'get',
            url:'http://localhost:3030/dashboard',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(response=>JSON.stringify(response.data))
    }
};

export default DashboardService;