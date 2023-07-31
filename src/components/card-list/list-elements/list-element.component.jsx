import { Component } from "react";
import './list-element.styles.css'
class ListElements extends Component{
    render(){
        return (<div className="card-list">
        {this.props.monsters.map(monster =>{
            const {name, id, email} = monster;
            return(<div className="card-container"  key={id}>
                <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>)
            
})} 
    </div>)
    }
}
export default ListElements;