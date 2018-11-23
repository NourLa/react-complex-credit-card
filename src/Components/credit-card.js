import React, { Component } from 'react';
import './credit-card.css'

  
  


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '*****',
        validThru:'**/**',
    number : '**** **** **** ****'};
        this.ChangeName = this.ChangeName.bind(this);
        this.changenumber = this.changenumber.bind(this);
        this.ChangevalidThru = this.ChangevalidThru.bind(this);

      }
    
      ChangeName(event) {
      
        this.setState({value: event.target.value});

}
     
    
      ChangevalidThru=(e)=>{
        e.target.value = e.target.value.replace(/[^\dA-Z/]/g, '')
        this.setState({validThru: e.target.value});
        console.log(e.target.value.length)
        if (e.target.value.length===2){
          if (Number(e.target.value)>0 && Number(e.target.value)<=12)
          e.target.value=e.target.value+'/';
          else {
            e.target.value='';this.setState({validThru: '*****'});
            alert ('false month');}
        }
      }

      changenumber=(e)=>{
        e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
        this.setState({number: e.target.value})
      }
     
  

        
    
  render() {

    return (
<div className="body-card">
<div className="card" >  

<h1 className="card-name">CREDIT CARD</h1>
<div className="details">
  <img className="img_puce" alt="img_puce" src={require("./puce.png")} /> 
  <div className="section">
  <div className="section1">
    <div className="card_id"> {this.state.number}  </div>
    <div className="number_date">
    <div className="number">5422</div>
    <div className="date_details">
    <div className="top_label"> MONTH/YEAR</div>

    <div className="M_Ylabel">
    <div className="left_label">VALID THRU  </div>
  
    <div className="icon_label">> </div>

    <div className="date">{this.state.validThru} </div>
    </div></div></div> 
    <div className="CARDHOLDER"> {this.state.value.toUpperCase()}</div>
    </div>
    <div className="section2">
     <img className="img_mastercard" alt="img_mastercard" src={require("./mastercard.jpg")} /> 
     </div>
    </div>
</div>
</div>
<div className="inputs-text">
<input type="text" onChange= {this.ChangeName}     maxLength="20" placeholder="Foulen"></input>

<input type="text"onChange= {this.ChangevalidThru}    maxLength="5" placeholder="MM/YY"></input>
<input type="text" onChange={this.changenumber}  maxLength="16" placeholder="**** **** **** ****" ></input>
</div>
</div>
    );
}
}

export default Card;