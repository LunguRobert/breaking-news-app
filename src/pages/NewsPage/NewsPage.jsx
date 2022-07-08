import Layout from '../../components/Layout'
import React, { Component } from 'react'
import './NewsPage.css'
import WeatherBar from '../../components/WeatherBar/WeatherBar'
import { connect } from 'react-redux'

class NewsPage extends Component {

    constructor(props){
        super(props);
        this.state={
            news:[],
        }
    }

  componentDidMount(){
        if(Object.keys(this.props.news).length!==0){
            const urlParameter = this.props.match.params.index;
            
            const findResult = this.props.news.articles.find((item,index)=>{
                return index == urlParameter;
            })
            this.setState({
                news:findResult,
            })
        }
  }

  componentDidUpdate(){
    if(Object.keys(this.props.news).length!==0){
        const urlParameter = this.props.match.params.index;
        
        const findResult = this.props.news.articles.find((item,index)=>{
            return index == urlParameter;
        })
        if(JSON.stringify(this.state.news)!==JSON.stringify(findResult)){
            this.setState({
                news:findResult,
            })    
        }
    }
  }

  render() {

    return (

    <div>
    <WeatherBar/>
    <Layout>

        <div className='banner-2 mb-3'>
          <h1 className='container'>NEWS</h1>
        </div>
        
        {
            this.state.news.length!==0
            ?
            <div className='content container'>
                    <div className='title '>
                        <h1>{this.state.news.title}</h1>
                        <small>{this.state.news.publishedAt}</small>
                    </div>
                    <div className='description'>
                    <img 
                    className='page-image'
                    src={this.state.news.image}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src="https://hae-ino.org/wp-content/uploads/2015/07/news-3.jpg";
                    }}
                    />
                        <p className='head-text'>{this.state.news.description}</p>
                        <p className='content-text'>{this.state.news.content}</p>
                        <a href={this.state.news.url} target="_blank">More on this story here</a>
                    </div>
            </div>
            :
            null
        }

    </Layout>

    </div>
    )
  }
}


function mapStateToProps(state){
    if(state.news.data){
        return{
            news : state.news.data[0],
        }
    }else return{
      news: {}
    }
}

export default connect(mapStateToProps)(NewsPage)