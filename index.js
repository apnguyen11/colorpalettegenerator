  
// Write your app here! (HINT: First thing should be a call to ReactDOM.render()... )



class App extends React.Component{
    state = {
        card1: {
            id: 1,
            color: "#0000ff",
            isLock: false
            
        },
        card2: {
            id: 2,
            color: "#FF0000",
            isLock: false
        },
        card3: {
            id: 3,
            color: "#00ff00",
            isLock: false
        },
        card4: {
            id: 4,
            color: "#ffff00",
            isLock: false
        }
    }
    handleClick = () => {
        // console.log(id)
        const newColorCards = [this.state]
        // console.log(this.state.card1)
        if(this.state.card1.isLock == false){
            this.setState({
                card1: {
                    id:1,
                    color: randomize(),
                    isLock: false
                }
            })
        }
        if(this.state.card2.isLock == false){
            this.setState({
                card2: {
                    id:2, 
                    color: randomize(),
                    isLock: false
                }
            })
        }
        if(this.state.card3.isLock == false){
            this.setState({
                card3: {
                    id:3,
                    color: randomize(),
                    isLock: false  
                }
            })
        }
        if(this.state.card4.isLock == false){
            this.setState({
                card4: {
                    id:4,
                    color: randomize(),
                    isLock: false  
                }
            })
        }
       
    }
    toggleLock1 = () => {
        //Check that id is valid array index
        console.log(this.state, '*****')
        this.state.card1.isLock = !this.state.card1.isLock
        this.setState({})
    }
    toggleLock2 = () => {
        //Check that id is valid array index
        this.state.card2.isLock = !this.state.card2.isLock
        this.setState({})
    }
    toggleLock3 = () => {
        //Check that id is valid array index
        this.state.card3.isLock = !this.state.card3.isLock
        this.setState({})
    }
    toggleLock4 = () => {
        //Check that id is valid array index
        this.state.card4.isLock = !this.state.card4.isLock
        this.setState({})
    }
    


   render(){
    return (
        <div>
            <h1> <div className="text-center bg-dark fixed-top">
             <button onClick={this.handleClick} className="btn btn-secondary m-1">RANDOMIZE COLORS</button>  
        </div></h1>
            <div className="w-100 d-flex" style={{height: "100vh"}}>
             <ColorCard color={this.state.card1.color} isLock={this.state.card1.isLock} action={this.toggleLock1} />
             <ColorCard color={this.state.card2.color} isLock={this.state.card2.isLock} action={this.toggleLock2}/>
             <ColorCard color={this.state.card3.color} isLock={this.state.card3.isLock} action={this.toggleLock3}/>
             <ColorCard color={this.state.card4.color} isLock={this.state.card4.isLock} action={this.toggleLock4}/>   
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
        let btnText = 'UNLOCKED'
    
        if(props.isLock){
            btnText = 'Locked'
        }
        // console.log(props)
        return(
            <div style={{backgroundColor: props.color}} className="w-100 d-flex flex-column align-items-center justify-content-center">
                <h1>{
                  props.color
                }</h1>
                <button onClick={props.action} className="btn btn-dark">{btnText}</button>
            </div>
        )
    
 
}



ReactDOM.render(<App/>, document.getElementById('root'))
