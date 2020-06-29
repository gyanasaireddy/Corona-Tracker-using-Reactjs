//use to make api requests
import axios from 'axios'

const url="https://covid19.mathdro.id/api"


export const fetchData= async()=>{
  try{
    const response =await axios.get(url);
    const requiredData={
      confirmed:response.data.confirmed,
      recovered:response.data.recovered,
      deaths:response.data.deaths,
      lastUpdate:response.data.lastUpdate
    }
    return requiredData;
  } 
  catch(err){
    console.log(err)
  }
}
