import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export default class News extends Component {
     static defaultProps={
        country:"in",
        pageSize:6
    };
    static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes,
        category:PropTypes.string,
    };
      
     
    constructor(props){
        super(props);
        this.state={
            articles:[],
            loading:true,
            page:1
        }
        document.title=`${this.props.category}-NewsTeller`;
    }
    
    async updateNews(){
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=edbbaea39c8a47fa9d464fee644d60ef&pageSize=${this.props.pageSize}&page=${this.state.page}`);
            this.setState({loading:true})
            const data = await res.json();
           
            this.setState({
                articles: data.articles,
                totalResults:data.totalResults,
                loading:false
            });
    }
    async componentDidMount(){
        this.updateNews();
    }
    handlePrevClick=async()=>{
            
this.updateNews();
this.setState({ page:this.state.page-1});
    }
    handleNextClick=async()=>{
       
        this.updateNews();
        this.setState({ page:this.state.page+1});
    }
  render() {
    return (
      <div className="container my-5">
        <h1 className='text-center'>NewsTeller-Top Headlines on {this.props.category}</h1>
       {this.state.loading && <Spinner/>}
        <div className='row'>
            {this.state.articles.map((element)=>{
            return <div className='col-md-4' key={element.url}>
            <NewsItem title={element.title?element.title.slice(0.45):""} description={element.description?element.description.slice(0,88):""} imageUrl= {element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
        })}
            
            
        </div>
       <div className='container d-flex justify-content-between'>
       <button  disabled={this.state.page<=1} type="button" class="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
       <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" class="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
       </div>
        
      </div>
    )
  }
}
 