import React, { Component } from 'react'
import './WeatherBar.css'
import gifs from '../../assets/gifs/gifs';
import constants from '../../utils/constants.json'
import { connect } from 'react-redux'

class WeatherBar extends Component {

    constructor(props){
        super(props);
      }


      addGradient(){
        let root = document.documentElement;
        const colors = constants[`${this.props.weather.currentConditions.icon}`]  
  
        root.style.setProperty('--left-color',colors[0]);
        root.style.setProperty('--middle-color',colors[1]);
        root.style.setProperty('--right-color',colors[2]);
    }
    
      doesExist(){
        const keys = Object.keys(gifs)
        const icon = keys.find(key=>key==this.props.weather.currentConditions.icon)

        return icon;
    }

    render() {

    if(this.props.weather){
        this.addGradient()
    }

    return (

        <div className='weather-bar'>

            {
                this.props.weather
                ?
                <div className='container pb-1 pt-2 d-flex justify-content-end'>
                <span>{this.props.weather.resolvedAddress}</span>
                  <div className='weather d-flex'>
                    <div className='d-flex flex-column'>
                            <div>
                              <img src={
                                  this.doesExist()
                                  ?
                                  gifs[`${this.doesExist()}`]
                                  :
                                  gifs.celsius
                              }/>
                              <span>  {this.props.weather.currentConditions.temp} &#8451;</span>
                            </div>
                    </div>
                  </div>
                </div>
                :
                null
                }
        </div>
    )
  }
}

function mapStateToProps(state){
  return{
    weather: state.weather.data
  }
}

export default connect(mapStateToProps)(WeatherBar)