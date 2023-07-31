import { Component } from "react";
import ListElements from "./list-elements/list-element.component";
import './card-list.styles.css'
class CardList extends Component{
    render(){
        const {monsters} = this.props;
        return(<ListElements monsters={monsters}/>)
      
    }
}
export default CardList;