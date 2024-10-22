import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const NewsPage = (props) => {
 
  const UpdateCharUp  = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
   }

   document.title = `${UpdateCharUp(props.category)} - News`;

   const [articles,setarticles] = useState([]);
   const [page,setpage] = useState(1);
   const [Loading,setLoading] = useState(false);
   const [totalResults,settotalResult] = useState(0);

  const NewUpdate = async () => {
    props.setProgress(20);
    setpage(true);
    let qrl = `https://newsapi.org/v2/everything?q=Apple&sortBy=relevancy&apiKey=7de6fc875b784daf9df77c3a1802d7a2&page=${page}&pageSize=${props.PageSize}`;
    let data = await fetch(qrl);
    props.setProgress(50);
    let exportdata = await data.json();
    props.setProgress(75);
    setLoading(false);
    console.log(exportdata);
    setarticles(exportdata.articles);
    settotalResult(exportdata.totalResults);
    props.setProgress(100);
  }

 useEffect(()=>{
  NewUpdate();
 },[])


const FetchDataFrom = async () => {
  setLoading(true);
   let qrl = `https://newsapi.org/v2/everything?q=Apple&sortBy=relevancy&apiKey=7de6fc875b784daf9df77c3a1802d7a2&page=${page}&pageSize=${props.PageSize}`;
   
   setpage(page + 1);
   let data = await fetch(qrl);
   let exportdata = await data.json();
   setLoading(false);
   setarticles(articles.concat(exportdata.articles));
   settotalResult(exportdata.totalResults);
  };


    return (
      <>
        <h2 className='my-3 text-center'>
          Vinay News - Come From {UpdateCharUp(props.category)}
        </h2>
        {Loading && <Loading/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={FetchDataFrom}
          hasMore={articles.length !== totalResults}
          loader={<Loading/>}
        >

          <div className='container'>
        <div className='row'>
          {articles.map((element) => {
            return (
              <div key={element.url} className="col-md-3 mx-4 my-3">
                <NewsItem
                  author={element.author}
                  timezone={element.publishedAt}
                  imageUrl={element.urlToImage ? element.urlToImage : 'loadimage.jpg'}
                  title={element.title}
                  readMore={element.url}
                  description={element.description}
                />
              </div>
            );
          })}
        </div>
        </div>
        </InfiniteScroll>
      </>
    )
  
}

NewsPage.defaultProps = {
  PageSize : 6,
  Country : "in",
  Categeory : "generel"
 }

 NewsPage.propTypes = {
    PageSize : PropTypes.number,
    Country : PropTypes.string,
    Categeory : PropTypes.string,
    setProgress : PropTypes.number
 }

export default NewsPage
