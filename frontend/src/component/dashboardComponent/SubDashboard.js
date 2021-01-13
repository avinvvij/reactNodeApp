import React,{useState,useEffect} from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

//Import Services
import DashboardService from '../../service/DashboardService'

function SubDashboard() {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        DashboardService.FetchCountriesRequest().then(function (response) {
            let result = JSON.parse(response);
            setCountries(result);
        });
    }, [])
    return(
       <>
        <Typography component="h1" variant="h6" color="inherit" noWrap>
                        Following are the List of Countries
                        </Typography>
                        {
                            countries.map((cname, index) =>
                                <ListItem key={index}>
                                    <ListItemText primary={cname} />
                                </ListItem>)
                        }   
       </>
    );
}
export default SubDashboard;