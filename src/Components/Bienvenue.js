import React from 'react';
import './Bienvenue.css'
import {Jumbotron} from 'react-bootstrap';

export default class Bienvenue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Le nom a été soumis : ' + this.state.value);
        event.preventDefault();
      }
render() {
return (
<div className="card1">

<div className="container-fluid bg-dark text-light p-5">
    <div className="container bg-dark p-5">
        <h1 className="display-4">Nos modules les plus utilisés</h1>
        <hr/>
        <p>Accéder à la liste des modules</p>
        <a href="/list" className="btn btn-primary"> Accéder</a>
    </div>
</div>


<div className='card2'>
<form onSubmit={this.handleSubmit}>
        <label>
          Nom :
           <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>

        <label>
          Prénom :
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Email :
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>  <label>
          Mdp :
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Choisissez votre parfum favori :
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Pamplemousse</option>
            <option value="lime">Citron vert</option>
            <option value="coconut">Noix de coco</option>
            <option value="mango">Mangue</option>
          </select>
        </label>
        <input type="submit" value="Envoyer" />
        
      </form>
</div>

</div>
);
}
}