  
// Write your app here! (HINT: First thing should be a call to ReactDOM.render()... )



class App extends React.Component{
    state = {
        card1: {
            id: 1,
            color: "blue",
            isLock: false
            
        },
        card2: {
            id: 2,
            color: "red",
            isLock: false
        },
        card3: {
            id: 3,
            color: "green",
            isLock: false
        },
        card4: {
            id: 4,
            color: "yellow",
            isLock: false
        }
    }
    handleClick = (id) => {
        console.log(id)
        // if(this.state.card1.isLock == false){
        //     this.setState({
        //         card1: {
        //             id:1,
        //             color: randomize(),
        //             isLock: false
        //         }
        //     })
        // }
        // if(this.state.card2.isLock == false){
        //     this.setState({
        //         card2: {
        //             id:2, 
        //             color: randomize(),
        //             isLock: false
        //         }
        //     })
        // }
        // if(this.state.card3.isLock == false){
        //     this.setState({
        //         card3: {
        //             id:3,
        //             color: randomize(),
        //             isLock: false  
        //         }
        //     })
        // }
        // if(this.state.card4.isLock == false){
        //     this.setState({
        //         card4: {
        //             id:4,
        //             color: randomize(),
        //             isLock: false  
        //         }
        //     })
        // }
       
    }


   render(){
    return (
        <div>
            <h1> <div className="text-center bg-dark fixed-top">
             <button onClick={this.handleClick} className="btn btn-secondary m-1">RANDOMIZE COLORS</button>  
        </div></h1>
            <div className="w-100 d-flex" style={{height: "100vh"}}>
             <ColorCard color={this.state.card1.color} action={this.handleClick}/>
             <ColorCard color={this.state.card2.color} action={this.handleClick}/>
             <ColorCard color={this.state.card3.color} action={this.handleClick}/>
             <ColorCard color={this.state.card4.color} action={this.handleClick}/>   
            </div>
        </div>
        )

   }
   
}

function randomize(){
    return (
        '#' + Math.random().toString(16).slice(2, 8).toUpperCase()
    )
}

// const Bar = function(){
//     return(
//         <div className="text-center bg-dark fixed-top">
//             <button onClick={randomize()} className="btn btn-secondary m-1">RANDOMIZE COLORS</button>  
//         </div>
//     )
// }

 const ColorCard = function(props){
     
        return(
            <div style={{backgroundColor: props.color}} className="w-100 d-flex flex-column align-items-center justify-content-center">
                <h1>{
                  props.color
                }</h1>
                <button onClick={props.action.bind("sdfs")} className="btn btn-dark">UNLOCK</button>
            </div>
        )
    
 
}



ReactDOM.render(<App/>, document.getElementById('root'))
