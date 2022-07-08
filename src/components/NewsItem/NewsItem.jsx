import React from 'react'
import { Link } from 'react-router-dom'
import './NewsItem.css'

function NewsItem(props) {

    const {urlToImage,description,title,publishedAt,index} = props

return (

    <div className='news-item col-12 col-lg-4 col-md-4 col-sm-4 col-sm-6 mb-3 d-flex flex-column align-items-center'>
        <Link className="link" to={`/news/${index}`}>
            <div className='image'>
            <img 
            src={urlToImage}
            onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src="https://hae-ino.org/wp-content/uploads/2015/07/news-3.jpg";
            }}
            />
            </div>
            <div className='text'>
                <p id='title'>{title}</p>
                <p>{description}</p>
                <small>{publishedAt}</small>
            </div>
        </Link>
    </div>
    
)
}

export default NewsItem