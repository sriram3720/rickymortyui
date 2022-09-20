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
                                        <div className="card-name">
                                            {item.name}
                                        </div>
                                        <div className="card-deatail-staus">
                                            <div 
                                            style={{ backgroundColor: item.status === "Alive" ? 'green': item.status ==="Dead" ? 'red' : 'grey'}}
                                            className="card-detail-statusIndicator">

                                            </div>
                                            <div>
                                            {item.status}-{item.species}
                                            </div>

                                        </div>
                                        <br>
                                        </br>
                                        

                                        <div>
                                           <div className="cardDetail-title"> Last known location:</div>
                                           <div> {item.location.name}</div>
                                        </div>
                                        <br>
                                        </br>
                                        <div>
                                            <div className="cardDetail-title">First seen in:</div>
                                            <div>{item.origin.name}</div>
                                             

                                        
                                            
                                        </div>


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