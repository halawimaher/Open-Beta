import React from 'react'
import './Mainhome.css';
import Edithome from './Edithome'
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import * as AiIcons from 'react-icons/ai';
//import * as IoIcons from 'react-icons/io';

export default class Mainhome extends React.Component {
  state ={
    home:[],
    
    
}

async componentDidMount(){
    const response = await fetch("http://localhost:8000/home");
    const result=await response.json();
    //console.log(result);
    //console.log(result.homelist[0].title);
    this.setState({home:result.homelist});
    //console.log(this.state.home);

    
}
deleteHome=async(id)=>{
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json','Accept':'application/json' },
    

};
  const url=`http://localhost:8000/home/delete/${id}`;
  try {
    const response = await fetch(url,requestOptions);
    const result=await response.json();
    const refrechHome=this.state.home.filter(
      home => home.id!==id
    );
    this.setState({home:refrechHome});
    //console.log(this.state.home);

  } catch (error) {
    console.log(error);
    
  }

}

render() {
  
    return (
          <div className='tbl'>
            <div className="tbl-header">
              <table  border="0">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>
                      <div>
                        <span> Add Home </span>
                        <Link to="/home/add">
                          <FaIcons.FaPlus class='icon'/>
                        </Link>
                        
                      </div>
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="tbl-content">
              <table border="0">
                <tbody>
                  {
                    this.state.home.map(((home,index)=>
                      <tr key={index}>
                    <td>{home.title}</td>
                    <td>{home.description}</td> 
                    <td>{home.image}</td> 
                    <td>
                        <div >
                        {/* {this.state.updatehome=home} */}
                        
                           {/*<Link class='icon'></Link> 
                          <Route exact path="/home" component={Mainhome} />
                        <Route  path="/home/add" component={Addhome} />
                          */}
                      <Link  to={{pathname:`/home/edit/${home.id} `,state:{home}}}  ><FaIcons.FaEdit /></Link>
                      <FaIcons.FaMinusCircle className='icon'  onClick={()=>{this.deleteHome(home.id)}}  />
                    
                    </div>
                    </td>
                    </tr>

                    ))
                    }
                  
                  
                  
                  
                  
                  
                  
                </tbody>
              </table>
            </div>
         </div>
    )}
}


