import React from 'react'
import { Link, useParams,withRouter } from 'react-router-dom';

 class Edithome  extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            updatable: false,
            homeup: {}
            
        };
        this.handleInputChange = this.handleInputChange.bind(this);

      }
      
    updateHome= async (e) =>{
            e.preventDefault();
            const title=e.target.title.value;
            const description=e.target.description.value;
            //  const image=e.target.image.value;
            // const file = e.target.image.files[0];
            // const body = new FormData();
            // body.append('title', title)
            // body.append('description', description)
            // body.append('image', file)

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json','Accept':'application/json' },
            body: JSON.stringify({ title:title ,description:description}),
        
        };

        
        // console.log(title,description);
        const url=`http://localhost:8000/home/edit/${this.state.homeup.id}`;
        const response= await fetch(url,requestOptions);  
        const result= await response.json();
        console.log(result);
        e.target.title.value="";
        e.target.description.value="";
        
    }
    componentDidMount=(e)=>{
        const {id,description,image}=this.props.location.state.home
        // console.log(this.props.location)
        // console.log(id,description,image)
        this.setState({homeup:this.props.location.state.home})
        

    }
    handleInputChange(e) {
        // e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

 

    render() {
       // console.log(this.props.location)
    return (
        <div>
           <form   onSubmit={this.updateHome}>
                
                <input type="text" onChange={this.handleInputChange} defaultValue={this.state.homeup.title} name="title" placeholder="title"/> 
                <input type="text" onChange={this.handleInputChange}   defaultValue={this.state.homeup.description} name="description" placeholder="description"/>
                <input type="submit"  value="save" />
                <Link to="/home">
                <input type="button" value="cancel" />
                </Link>
            </form>
                        
        </div>
    )
}
}

export default withRouter(Edithome)
