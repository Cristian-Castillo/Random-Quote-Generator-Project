import React, { Component } from 'react'
import {connect} from 'react-redux'
import ContainerStyle from './ContainerStyle.css'
import {FaTumblr} from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa';
import {FaQuoteLeft} from 'react-icons/fa';
class Container extends Component {
    
    constructor(props){
        super(props);
    }

    render() {
        /*String interpolation for the background color,depends on props */
        const style = {
            backgroundColor:`rgba(${this.props.strColor},${this.props.strColorTwo},${this.props.strColorThree})`,
            height:'100vh',
            position:'relative',
            margin:'auto',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            color:`rgba(${this.props.strColor},${this.props.strColorTwo},${this.props.strColorThree})`,
            webkitTransition:'1s'
        }
        
        /* Twitter and Tumblar Icon colors */
        const iconColor = {
            backgroundColor:`rgba(${this.props.strColor},${this.props.strColorTwo},${this.props.strColorThree})`,
            padding:'2.5px 2.5px 2.5px 2.5px',
            borderRadius:'2px',
            webkitTransition:'1s'
        }
        /* New Quote Button colors */
        const iconColorQuote = {
            backgroundColor:`rgba(${this.props.strColor},${this.props.strColorTwo},${this.props.strColorThree})`,
            marginLeft:'50px',
            position:'relative',
            top:'-4px',
            webkitTransition:'1s'
        }
        /*link string interpolation for Twitter*/
        const link = `https://twitter.com/intent/tweet?text=${this.props.strQuote[this.props.strRandom]}%20${this.props.strQuoteAuthor[this.props.strRandom]}`;
        const linkTumble = `https://www.tumblr.com/share/data-color?${this.props.strQuote[this.props.strRandom]}%20${this.props.strQuoteAuthor[this.props.strRandom]}`
        return(
        <div style ={style}>
        {/* container with quotes */}
        {/* text quote div */}
            <div className ='container-fluid'>
                <div>
                    <h4 className='text-quote'><FaQuoteLeft /> {this.props.strQuote[this.props.strRandom]}</h4>
                    <h5 className='text-author'>{this.props.strQuoteAuthor[this.props.strRandom]}</h5>
                </div>
                {/* buttons div */}
                    <p><span>
                        <div className ='buttonIconGroup'>
                        <button className='buttonIcon'><a className ="twitter-share-button" href={link} target='_blank' data-size="large"><FaTwitter style = {iconColor}/></a></button>
                        <button className='buttonIcon'><a className ='tumblr-share-button' href={linkTumble}><FaTumblr style = {iconColor} /></a></button> 
                            {/*Dispatch action creator to store */}
                            <button style = {iconColorQuote} className ='buttonQuote' onClick = {this.props.getRandomQuote}>New Quote</button>
                        </div>
                    </span>
                    </p>
            </div>
            {/*end of button div */}
            {/*End of container */}
            <h6 className = 'developer-style'>by Cristian Castillo</h6>
        </div>)
    }
}

/* Mapping to our reducer from our react component */
const mapStateToProps = (state) => {
    return{
        strRandom:state.randomNumber,
        strQuote:state.randomQuote,
        strQuoteAuthor:state.randomAuthor,
        strColor:state.randomColor,
        strColorTwo:state.randomColorTwo,
        strColorThree:state.randomColorThree
    }
}
/* Mapping to our reducer from our react component */
const mapDispatchToProps = (dispatch) => {
    return{
        getRandomQuote:()=> {dispatch({type:'NEW_QUOTE'})},
    }
}
/*connect state and action to store */
export default connect(mapStateToProps,mapDispatchToProps)(Container)




