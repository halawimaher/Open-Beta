import React from 'react'
//import Mainhome from './Mainhome';
import { Link } from 'react-router-dom';



export default class Addhome extends React.Component {
        createhome = async (e)=>{
             e.preventDefault();
             const title=e.target.title.value;
             const description=e.target.description.value;
             const image=e.target.image.value;
             const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json','Accept':'application/json' },
                    body: JSON.stringify({ title:title ,description:description,image :image}),
                
                };
                console.log(title, description, image);
                const url=`http://localhost:8000/home/add`;
                const response= await fetch(url,requestOptions);  
                const result= await response.json();
                console.log(result);
                e.target.title.value="";
                e.target.description.value="";
                e.target.image.value="";
}
    render(){
    return (
        <div>
            <form   onSubmit={this.createhome}>
                
                <input type="text"  name="title" placeholder="title"/>
            
                <input type="text" name="description" placeholder="description"/>
                <input type="text"  name="image" placeholder="image"/>
                <input type="submit" value="save" />
                <Link to="/home">
                <input type="button" value="cancel" />
                </Link>
            </form>
            
        </div>
    )
    }
}

