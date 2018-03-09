import React, { Component } from 'react';
import {ADD_BASKET,REMOVE} from '../actions/actions';
import {bindActionCreators} from 'redux';
import data from './Data';
import Card from '../Components/Card';
import {connect} from 'react-redux';
import Header from './Header';
import './Header.css';
import './CartesProduits.css';
import CarteLocale from './CarteLocale';
import './CarteLocale.css';
import Jumbo from './Jumbo';
import './Jumbo.css';




class CartesProduits extends Component {
  render() {
    console.log(this.props.Panier)
    return (
      <div className="ContainMain">
      <Header/>
      <Jumbo/>
      <div className="CartesProduits">
      <h1>{this.props.Panier}</h1>
        <div className="row">
        {data.map((el,i)=>{
          return(
            <Card key={i}
             name={el.name}
             price={el.price}
             description={el.description}
             img={el.img}
             alt={el.name}
             onClick={()=> this.props.ADD_BASKET(el)}/>
          )
        })}
        </div>
        <CarteLocale/>

      </div>
      </div>
    );
  }
}
function mapStateToProps (initialState){
  return {
    Panier : initialState
  }
}

function mapDispatchToProps (dispatch){
  return bindActionCreators({
    ADD_BASKET,
    REMOVE
  },
dispatch
)
}
export default connect(mapStateToProps, mapDispatchToProps)(CartesProduits);

