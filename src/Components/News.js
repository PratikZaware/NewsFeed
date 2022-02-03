
import React from 'react';
import NewsItem from './NewsItem.js';


// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
class News extends React.Component 
{
    constructor(props) {
        super(props);
        console.log("In news constructor");
        this.state = 
        {
            articles: [],
            loading: false,
        };
    }
    
    async componentDidMount()
    {
        let url="https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5bd7d1356a3641d7af05c4cf589936c2";
        let data=await fetch(url);
        let parsedData=await data.json();

        this.setState({articles : parsedData.articles})
    }
            
            
         
    render() {
        return( 
            <div className="container my-3">
                <h2>Top News</h2>
                
                <div className="row">
                    {this.state.articles.map((element) => {
                        return(
                        <div className="col md-3" key={element.url}>
                            <NewsItem title={element.title.slice(0,100)} description={element.description.slice(0,100)+"......"} url={element.urlToImage} newsUrl={element.url}/>
                        </div>
                        )
                    })}
                    
                </div>
            </div>
        );
    }
}

News.propTypes = propTypes;
News.defaultProps = defaultProps;
// #endregion

export default News;