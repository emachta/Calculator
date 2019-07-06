import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity} from 'react-native'

export default class App extends PureComponent {
  constructor(props){
    super(props)
    this.state= { currentValue: "0" ,sequence:""}
  }


  add = (prevNum,currentNum) =>{
    this.setState({currentValue: currentNum + prevNum})
  }


  operator = (num1,op,num2) => {
    num1 = Number(num1)
    num2 = Number(num2)
    switch(op){
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      case "%":
        return num1 % num2;

    }
  }

  equal = () => {
    try{
    var regex = /(-?\d+\.?\d*)([+-\/\*\%])(-?\d+\.?\d*)/
    let tempsequence = this.state.sequence;

while(true){
      match = tempsequence.match(regex);  
      if(match){    
        result = this.operator(match[1],match[2],match[3])
        tempsequence = tempsequence.replace(match[0],result) 
      }else
        break
        
    }
    this.setState({currentValue: String(tempsequence),sequence:String(tempsequence)})
    return tempsequence
  }
    catch{
      this.setState({currentValue:"0",sequence:"0"})
      return "0";
    }
  }

  render() {
    var sequence = []
    return (
      <View style={{flex:1}}>
        <View style={{backgroundColor:"#473144",flex:1}}>
          <View style={{flex: 1,justifyContent: 'flex-end',alignSelf:"flex-end"}}>
            <Text style={{color:"white",fontSize:50,margin:15}}>{this.state.currentValue}</Text>
          </View>
        </View>
        <View style={{backgroundColor:"#5F35DD",flex:2}}>
          <View style={{flex:1,flexDirection:"row"}}>
          <TouchableOpacity onPress={()=>this.setState({currentValue:"0",sequence:""})} style={{flex:2,justifyContent:"center",borderWidth:.5}}><Text style={{color:"white",alignSelf:"center",fontSize:35}}>AC</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.setState({sequence:this.state.sequence += "%",currentValue:this.state.sequence});}}  style={{flex:1,justifyContent:"center",borderWidth:.5}}><Text style={{color:"white",alignSelf:"center",fontSize:35}}>%</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.setState({sequence:this.state.sequence += "/",currentValue:this.state.sequence});}}  style={{flex:1,justifyContent:"center",borderWidth:.5}}><Text style={{color:"white",alignSelf:"center",fontSize:35}}>÷</Text></TouchableOpacity>
          </View>
          <View style={{flex:1,flexDirection:"row"}}>
            <TouchableOpacity onPress={()=>{this.setState({sequence:this.state.sequence += "7",currentValue:this.state.sequence});}} style={{flex:1,justifyContent:"center",borderWidth:.5}}><Text style={{color:"white",alignSelf:"center",fontSize:35}}>7</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.setState({sequence:this.state.sequence += "8",currentValue:this.state.sequence});}} style={{flex:1,justifyContent:"center",borderWidth:.5}}><Text style={{color:"white",alignSelf:"center",fontSize:35}}>8</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.setState({sequence:this.state.sequence += "9",currentValue:this.state.sequence});}} style={{flex:1,justifyContent:"center",borderWidth:.5}}><Text style={{color:"white",alignSelf:"center",fontSize:35}}>9</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.setState({sequence:this.state.sequence += "*",currentValue:this.state.sequence});}} style={{flex:1,justifyContent:"center",borderWidth:.5}}><Text style={{color:"white",alignSelf:"center",fontSize:35}}>x</Text></TouchableOpacity>
          </View>
          <View style={{flex:1,flexDirection:"row"}}>
          <TouchableOpacity onPress={()=>{this.setState({sequence:this.state.sequence += "4",currentValue:this.state.sequence});}} style={{flex:1,justifyContent:"center",borderWidth:.5}}><Text style={{color:"white",alignSelf:"center",fontSize:35}}>4</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.setState({sequence:this.state.sequence += "5",currentValue:this.state.sequence});}} style={{flex:1,justifyContent:"center",borderWidth:.5}}><Text style={{color:"white",alignSelf:"center",fontSize:35}}>5</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.setState({sequence:this.state.sequence += "6",currentValue:this.state.sequence});}} style={{flex:1,justifyContent:"center",borderWidth:.5}}><Text style={{color:"white",alignSelf:"center",fontSize:35}}>6</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.setState({sequence:this.state.sequence += "-",currentValue:this.state.sequence});}} style={{flex:1,justifyContent:"center",borderWidth:.5}}><Text style={{color:"white",alignSelf:"center",fontSize:35}}>-</Text></TouchableOpacity>
          </View>
          <View style={{flex:1,flexDirection:"row"}}>
            <TouchableOpacity onPress={()=>{this.setState({sequence:this.state.sequence += "1",currentValue:this.state.sequence});}} style={{flex:1,justifyContent:"center",borderWidth:.5}}><Text style={{color:"white",alignSelf:"center",fontSize:35}}>1</Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>{this.setState({sequence:this.state.sequence += "2",currentValue:this.state.sequence});}} style={{flex:1,justifyContent:"center",borderWidth:.5}}><Text style={{color:"white",alignSelf:"center",fontSize:35}}>2</Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>{this.setState({sequence:this.state.sequence += "3",currentValue:this.state.sequence});}} style={{flex:1,justifyContent:"center",borderWidth:.5}}><Text style={{color:"white",alignSelf:"center",fontSize:35}}>3</Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>{this.setState({sequence:this.state.sequence += "+",currentValue:this.state.sequence});}} style={{flex:1,justifyContent:"center",borderWidth:.5}}><Text style={{color:"white",alignSelf:"center",fontSize:35}}>+</Text></TouchableOpacity>
          </View>
          <View style={{flex:1,flexDirection:"row"}}>
          <TouchableOpacity onPress={()=>{this.setState({sequence:this.state.sequence += "0",currentValue:this.state.sequence});}} style={{flex:2,justifyContent:"center",borderWidth:.5}}><Text style={{color:"white",alignSelf:"center",fontSize:35}}>0</Text></TouchableOpacity>

            <TouchableOpacity onPress={()=>{this.setState({sequence:this.state.sequence += ".",currentValue:this.state.sequence});}} style={{flex:1,justifyContent:"center",borderWidth:.5}}><Text style={{color:"white",alignSelf:"center",fontSize:35}}>.</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.setState({currentValue: this.equal(sequence),sequence:this.equal(sequence)})}} style={{flex:1,justifyContent:"center",borderWidth:.5}}><Text style={{color:"white",alignSelf:"center",fontSize:35}}>=</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
