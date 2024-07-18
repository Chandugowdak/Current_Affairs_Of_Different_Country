import React, { useState, useEffect } from 'react';

const Russia = () => {
  const [data, setData] = useState([]);  // STATE TO HOLD NEWS DATA
  const [error, setError] = useState(false);  // STATE TO HANDLE ERROR STATUS
  const [loading, setLoading] = useState(true);  // STATE TO HANDLE LOADING STATUS

  useEffect(() => {
    // FETCH NEWS DATA FROM NEWSAPI FOR RUSSIA (COUNTRY CODE 'ru' IS FOR RUSSIA)
    fetch('https://newsapi.org/v2/top-headlines?country=ru&apiKey=205125fcc7414b038a14b45538669b52')
      .then(response => response.json())  // PARSE RESPONSE TO JSON
      .then(data => {
        setData(data.articles);  // SET DATA TO STATE
        setLoading(false);  // SET LOADING STATE TO FALSE
      })
      .catch(error => {
        setError(true);  // SET ERROR STATE TO TRUE
        setLoading(false);  // SET LOADING STATE TO FALSE
      });
  }, []);  // RUN EFFECT ONLY ONCE AFTER INITIAL RENDER

  if (loading) {
    return <p className='lead fw-bold fs-5 text-danger text-center'>Loading....</p>;  // LOADING STATE UI
  }

  if (error) {
    return <p className='fs-3 text-danger text-center'>Failed to fetch news articles.</p>;  // ERROR STATE UI
  }

  return (
    <div className='container fw-bold text-center'>
      <div className='row'>
        {data.map(article => (
          <div className='col-md-6' key={article.title}>
            <div className='card my-3'>
              {article.urlToImage && (
                <img src={article.urlToImage} className='card-img-top' alt={article.title} width="350px" height="350px" />  // DISPLAY IMAGE IF AVAILABLE
              )}
              <div className='card-body'>
                {/* // DISPLAY ARTICLE TITLE */}
                <h5 className='card-title'>{article.title}</h5>  
                {/*  // DISPLAY ARTICLE DESCRIPTION */}
                <p className='card-text'>{article.description}</p> 
                {/*  // DISPLAY ARTICLE AUTHOR */}
                <p className='card-text'>Author: {article.author}</p> 
                {/* // READ MORE BUTTON */}
                <a href={article.url} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Read More</a>  
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Russia;
