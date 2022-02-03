import React from 'react';


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
class NewsItem extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}
    
    render() {
        let {title,description,url,newsUrl}=this.props;
        return <div>
            <div className="card my-4" style={{width: "20rem"}}>
                <img src={url} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target="_blank" className="btn btn-primary">Read more</a>
                </div>
            </div>
        </div>;
    }
}

NewsItem.propTypes = propTypes;
NewsItem.defaultProps = defaultProps;
// #endregion

export default NewsItem;