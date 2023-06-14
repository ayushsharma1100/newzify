import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import NewsItems from './NewsItems'
import './css/news.css'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar'

function News(props) {
    let [news, setNews] = useState([]);
    let [pageNumber, setPageNumber] = useState(1);
    let [totalResults, setTotalResults] = useState(0);
    let [progress, setProgress] = useState(0);

    async function updateNews(){
        setProgress(20);
        var req = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${pageNumber}&pageSize=${props.pageSize}`);
        var parsed_news = await req.json();
        setNews(parsed_news.articles);
        setTotalResults(parsed_news.totalResults);
        setProgress(100);
    }

    useEffect(()=>{
        updateNews();
    }, []);

    var fetchMoreData = async ()=>{
        var req = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${pageNumber+1}&pageSize=${props.pageSize}`);
        setPageNumber(pageNumber+1);
        var parsed_news = await req.json();
        setNews(news.concat(parsed_news.articles));
        setTotalResults(parsed_news.totalResults);
    }

    return (
        <>
            <LoadingBar
                color='#f11946'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <h1 className="my-3 text-center"><strong>Newzify - Top News Today</strong></h1>
            <InfiniteScroll
                dataLength={news.length}
                next={fetchMoreData}
                hasMore={news.length <= totalResults-3}
                loader={ <Spinner /> }
            >
                <div className="container">
                    <div className="row my-3">
                            {news.map(element => {
                                return (
                                    <div className="col-lg-4 col-md-6 my-3" key={element.url}>
                                        <NewsItems title={element.title} description={element.description} imageURL={element.urlToImage} newsURL={element.url} author={element.author} publishedDate={new Date(element.publishedAt).toGMTString()} />
                                    </div>
                                );
                            })}
                        
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

News.propTypes = {
    pageSize: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    apiKey: PropTypes.string.isRequired,
}

News.defaultProps = {
    pageSize: "20",
    category: "general",
}

export default News
