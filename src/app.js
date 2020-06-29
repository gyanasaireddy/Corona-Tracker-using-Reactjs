// https://www.youtube.com/watch?v=khJlrj3Y6Ls&feature=youtu.be&t=1241

import React from 'react'

import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import styles from "./app.module.css"
// {} as it is a named import
import {fetchData} from './api'

// using asynchorous data
class App extends React.Component{

  state ={
    data:{}
  }

  async componentDidMount(){
    const data= await fetchData();
    console.log(data); 
    this.setState({data:data})
  }

  render(){
    const {data}=this.state;

    return (
      <div className={styles.container}>
      <Cards data={data}/>
      </div>
    )
  }
}

export default App