import React, { Component } from 'react';
import axios from 'axios';
import { Card, Form, Col , Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Module extends Component{
initialState = {
nom:'',
description:'',

}
constructor(props) {
super(props);
this.state=this.initialState;  //initialiser tous les champs à vide
this.moduleChange = this.moduleChange.bind(this);
/*
moduleChange permet d’attribuer la valeur de
‘event.target.value’ à ‘event.target.name’ où le deuxième paramètre
constitue la valeur saisie au niveau du champ en question et le premier
paramètre définit le nom du champ, par exemple si vous saisissez ‘Volvo’
au niveau du champ ‘Marque’ alors event.target.value prend la valeur de
‘Volvo’ et event.target.name prend la valeur de ‘marque’.
*/
this.submitModule = this.submitModule.bind(this);
}
/*
submitModule(event) qui va être
chargée d’effectuer l’ajout de l’entité Module saisie au niveau de la base
chose qui va avoir lieu si on fait appel à l’api correspondante avec la
méthode POST.
*/

submitModule(event) {
event.preventDefault();

const module={
nom:this.state.nom,
description:this.state.description,
}
axios.post("http://localhost:8080/modules", module)
.then(response => {
if (response.data != null) {
this.setState(this.initialState);
alert("module enregistrée avec succès");
}
})
}
moduleChange(event) {
this.setState (
{ [event.target.name]:event.target.value }
) ;
}
render(){
return(
<Card className={"border border-dark bg-dark text-white"}>
<Card.Header>
Ajouter un module
</Card.Header>
<Form onSubmit={this.submitModule} id="ModuleFormId">
<Card.Body>
<Form.Group as={Col} controlId="formGridnom">
<Form.Label> nom </Form.Label>
<Form.Control name="nom" autoComplete="off" required type="text"
className={"bg-dark text-white"}
value = {this.state.nom} onChange = {this.moduleChange} placeholder= "Entrez nom module"/>
</Form.Group>
<Form.Group as={Col} controlId="formGridModele">
<Form.Label> description </Form.Label>
<Form.Control name="description" autoComplete="off" required type="text"
className={"bg-dark text-white"}
value = {this.state.description} onChange = {this.moduleChange} placeholder= "Entrez description module"/>
</Form.Group>

</Card.Body>
<Card.Footer style={{"textAlign":"right"}}>
<Button size="sm" variant="success" type="submit"> Submit </Button>{' '}
<Button size="sm" variant="info" type="reset"> Reset </Button>
</Card.Footer>
</Form>
</Card>
);
}
}