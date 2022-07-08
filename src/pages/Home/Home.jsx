import React, { Component } from 'react'
import Layout from '../../components/Layout'
import NewsList from '../../components/NewsList'
import './Home.css'
import WeatherBar from '../../components/WeatherBar/WeatherBar'

class Home extends Component {

  constructor(props){
    super(props);
  }
  
  render() {

    return (

      <div>

        <WeatherBar/>
        <Layout>
            <div className='banner'>
              <h1 className='container '>BREAKING NEWS</h1>
            </div>
            <div className='container'>
                  <NewsList/>
            </div>
        </Layout>

      </div>
    )
    
  }

}

export default Home