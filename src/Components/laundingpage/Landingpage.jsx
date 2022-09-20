 import React, { Component } from 'react'
 import './landingpg.css';
class Landingpage extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            items:[],
            isLoaded: false,
        }           
    }

    componentDidMount(){
        fetch('https://rickandmortyapi.com/api/character').then(res=>res.json()
        .then(res =>{
            console.log(res);
            this.setState({
                isLoaded: true,
                items:res.results,
            })
        }))
    }
    render(){
        var { isLoaded,items} = this.state;
        if(!isLoaded){
            return<div>loading...</div>;

        }
        else{
            return (
                <div className="Landingpage-f">
                        {items.map(item =>(
                            // <li key={item.id}>
                            //     Name:{item.name}|Email:{item.email}
                            // </li>
                            <div className='grid'>
                                <div className='card-container'>
                                    <div className='card-image'>
                                          <img src={item.image} alt=""/>
                                    </div>

                                    <div className='card-Data'>
                                        <hi>{item.name}</hi>

                                    </div>
                                </div>
                            </div>
                            ))
                         }
                </div>
            )
        }
        // return(
        //     <div>
        //         <div className='Landingpage-f'>
        //             <div className="grid grid-item1"></div>
        //             <div className="grid grid-item1"></div>
        //             <div className="grid grid-item1"></div>
        //             <div className="grid grid-item1"></div>
        //             <div className="grid grid-item1"></div>
        //             <div className="grid grid-item1"></div>
        //         </div>
        //     </div>
        // )
    }
    
}

export  default Landingpage;