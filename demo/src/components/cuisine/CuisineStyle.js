import React,{PropTypes} from 'react';
import "../../styles/cuisine.css";
import {IndexLink, Link} from 'react-router';

class CuisineStyle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.type
        };
    }
    render() {
        return (
            <div className="selection">
                <div className="itemInfo">
                    <Link to="restaurants" >
                        <img src="https://i.imgur.com/zOPe5XV.png" alt="a delicious cake"/>
                        <p>{this.props.type}</p>
                    </Link>
                </div>
            </div>
        );
    }
}
CuisineStyle.propTypes = {
    type: PropTypes.string.isRequired
};


export default CuisineStyle;