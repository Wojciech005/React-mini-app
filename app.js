class Counter extends React.Component {
state = {
  count: 0,
  result: this.props.result
}

handleMathClick = (type, number = 1) => {
 if(type === "substraction") {
   this.setState(prevState => ({
     count: prevState.count + 1,
     result: prevState.result - number
   }))
 } else if (type === "reset") {
   this.setState(prevState => (
     {
    count: prevState.count + 1,
    result: 0
     }
   ))
 } else if (type === "addtion"){
  this.setState(prevState => (
    {
    count: prevState.count + 1,
    result: prevState.result + number
  }) )
 }
}

  render() {
    return (
      <React.Fragment> 
        <MathButton 
        name = "-10" 
        number = "10" 
        type = "substraction" 
        click = {this.handleMathClick}
         />
          <MathButton 
        name = "-1" 
        number = "1" 
        type = "substraction" 
        click = {this.handleMathClick}
         />
         <MathButton 
        name = "reset" 
        number = "0" 
        type = "reset" 
        click = {this.handleMathClick}
         />
          <MathButton 
        name = "+1" 
        number = "1" 
        type = "addtion" 
        click = {this.handleMathClick}
         />
          <MathButton 
        name = "+10" 
        number = "10" 
        type = "addtion" 
        click = {this.handleMathClick}
         />
    <h1>Click number: {this.state.count}</h1>
    <h1>Result: {this.state.result}</h1>
      </React.Fragment>
    )
  }
 
  }

  const MathButton = (props) => {
    // console.log(props)
    const number = parseInt(props.number)
    return (
    <button onClick = {() => props.click(props.type, number)}>{props.name}</button>
    )
  }

  
ReactDOM.render(<Counter result = {0} />, document.getElementById('root'))
