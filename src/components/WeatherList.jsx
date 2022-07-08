import React from 'react'
import gifs from '../assets/gifs/gifs';
import WeatherItem from './WeatherItem/WeatherItem';

function WeatherList(props) {

    const { weather } = props;
    const keys = Object.keys(gifs)
    const doesExist = (icon) => keys.find(key=>key==icon)

return (
    
    <div>
        {
                weather.days
                ?
                weather.days.map((day,key)=>{
                    if(key<5){
                        return (<div key={key} className='weather-forecast d-flex flex-wrap'>
                                    <h3 className="text-primary">{day.datetime}</h3>
                                    {
                                    day.hours.map((hour,index)=>{
                                        if(index%6===0){
                                            const icon = doesExist(hour.icon)
                                            return(
                                                <WeatherItem key={index} datetime={hour.datetime} index={index} temp={hour.temp} windspeed={hour.windspeed} conditions={hour.conditions} gif={icon}/>
                                            )
                                        }
                                    })
                                    }
                            </div>)
                    }
                })
                :
                null
            }

    </div>

)

}

export default WeatherList