import React, { Component } from 'react';
import categories from '../datas/categories.json';

class Category extends Component {
    state = {  
        slug: "",
        themes: ""
    }

    componentDidMount() {
        let slug = this.props.match.params.slug;
        this.setState({
            slug: slug
        }),
        categories .then(res => {
            this.setState({
              themes: res.data
        })
    }

    
        
 
    render() { 
        return ( 
            <h1>Choisissez un théme: {this.state.slug} </h1>
         );
    }
}
 
export default Category;