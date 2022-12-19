import React, { Component } from 'react';
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { ButtonGroup, Button, Card, Table, Toast } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import MyToast from './Toast';
import {Navigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
export default class Modulelist extends Component {

constructor(props) {
super(props);
this.state = { modules: [] };
}

componentDidMount() {
fetch('http://localhost:8080/modules')
.then((response) => response.json())
.then((responseData) => {
this.setState({
modules: responseData
});
})
.catch(err => console.error(err));
}

deleteModule = (moduleId) => {
    axios.delete("http://localhost:8080/modules/"+moduleId)
    .then(response => {
    if(response.data != null){
    this.setState({"show":true});
    setTimeout(() => this.setState({"show":false}), 3000);
    this.setState({
    modules: this.state.modules.filter(module => module.id !== moduleId)
    });
    }else {
    this.setState({"show":false});
    }
    });
    };


    updateModule = (moduleId) => {
        axios.post("http://localhost:8080/modules/")
        .then(response => {
        if(response.data != null){
        this.setState({"show":true});
        this.setState({
        });
        }else {
        this.setState({"show":false});
        }
        });
        };

render() {
    const columns= [{
        dataField: 'id',
        text:'Id',
        headerStyle: {
        backgroundColor: '#c8e6c9'
        }
        }, {
        dataField: 'marque',
        text:'Marque',
        headerStyle: {
        backgroundColor: '#c8e6c9'
        }
        }, {
        dataField: 'modele',
        text:'Modele',
        headerStyle: {
        backgroundColor: '#c8e6c9'
        }
        }, {
        dataField: 'couleur',
        text:'Couleur',
        headerStyle: {
        backgroundColor: '#c8e6c9'
        }
        }, {
        dataField:'prix',
        text:'Prix',
        headerStyle: {
        backgroundColor: '#c8e6c9'
        }
        },
        ];
        const CaptionElement = () => <h3 style={{ borderRadius: '0.25em', textAlign:
        'center', color: 'cyan', border: '1px solid cyan', padding: '0.5em' }}>Liste des Voitures</h3>;
        const rowStyle2 = (row, rowIndex) => {
        const style = {};
        style.backgroundColor = '#00BFFF';
        style.color = 'black';
        return style; };
return (
    
<div>
<div style={{"display":this.state.show ? "block" : "none"}}>
<MyToast children = {{show:this.state.show, message:"Module supprimée avec succès.",
type:"danger"}}/>
</div>
<Card className={"border border-light bg-dark text-white"}>
<Card.Header><FontAwesomeIcon icon={faList} /> Liste des modules</Card.Header>
<Card.Body>
<Table bordered hover striped variant="dark"><thead>
<tr>
<th>nom</th>
<th>description </th>
</tr>
</thead>
<tbody>
{ this.state.modules.length ===0 ?
<tr align="center">
<td colSpan="6">
Aucun module disponible.</td>
</tr> :
this.state.modules.map((module) => (
<tr key={module.id}>
<td>{module.nom}</td>
<td>{module.description}</td>

<td>
<ButtonGroup>
<Link to={`/update/${module.id}`} className="btn btn-outline-dark"> 


<Button size="sm" variant="outline-primary"
>

<FontAwesomeIcon icon={faEdit} />
</Button>{' '}
</Link>

<Button size="sm" variant="outline-danger"
onClick={this.deleteModule.bind(this,module.id)}>
<FontAwesomeIcon icon={faTrash} />

</Button>

</ButtonGroup>
</td>
</tr>
))
}
</tbody>
</Table>
</Card.Body>
</Card>
</div>
);
}
}