import { Component } from "react";

class Navbar extends Component{
    render(){
        return(
            
            <nav class="navbar navbar-inverse">
                <a class="navbar-brand" href="#">Title</a>
                <ul class="nav navbar-nav">
                    <li class="active">
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Link</a>
                    </li>
                </ul>
            </nav>
            
        )
    }
}
export default Navbar