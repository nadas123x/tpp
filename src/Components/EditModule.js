import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";

function EditModule() {

    const {id} = useParams(); // getting url id        
    const URL = `http://localhost:8080/modules/${id}`;
   

    useEffect(()=>{
        getModuleById(); //will be called after the component renders.
        console.log(id);
    },[])
    const [module, setModule] = useState({
        nom:"",
        description:"",
    });

    const { nom , description } = module;
    const onInputChange = e =>{
        setModule({...module,[e.target.name]:e.target.value})
    }
    

    const FormHandle = e =>{
        e.preventDefault();
        updateDataToServer(module)      
    }
    const updateDataToServer=(data) =>{
        axios.put(URL,data).then(
           (response)=>{
                   alert("modules Updated Successfully");
            },(error)=>{
                    alert("Operation failed");
            }
        );
    };
    
    const getModuleById= async e =>{
        const modulesInfo = await axios.get(URL);
        setModule(modulesInfo.data);       
    }
   
    return (
        <div>
            <div className="container">
            <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
                <div class="jumbotron">
                    <h1 class="display-4 text-center">Update !</h1>
                    <div>
                    <form onSubmit={e => FormHandle(e)}>
                        <div class="form-group">
                            <label for="exampleInputEmail1"> Name</label>
                            <input type="text" class="form-control" name="nom"   placeholder="Enter Here" value={nom} onChange={(e) =>onInputChange(e)} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Desc </label>
                            <input type="text" class="form-control" name="description"   placeholder="Enter Here" value={description} onChange={(e) =>onInputChange(e)} />
                        </div>

                        <div className="container text-center">
                        <button type="submit" class="btn btn-outline-success my-2 text-center mr-2">Update Module</button>
                        <button type="reset" class="btn btn-outline-primary text-center mr-2">Clear Module</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}
export default EditModule;