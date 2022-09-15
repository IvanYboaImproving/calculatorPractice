//This comment is to get rid of the eval warning
/* eslint no-eval: 0 */
//$ npm i lodash.countby --->(Library to use the countBy method)
//this library has a lot of useful methods that can be used in arrays,
//objects, strings, etc.
//Import librarys needed
import React, { useState } from 'react';
import words from 'lodash.words';
import Result from './components/Result';
import Functions from './components/Functions';
import MathOperations from './components/MathOperations';
import './styles/App.css';
import Numbers from './components/Numbers';

//component with arrow function
const App = () => {
    //This is an array that return the value given, in this case is
    //a null text and also returns a function.
    //Made an array destructured
    const [ stack, setStack ] = useState("");
    const items = words(stack, /[^-^+^*^/]+/g);
    //This is like an "if" clause andthe structure is the next:
    //this can be explained as next:
    //(if this is true>0) ? (DO THIS) : (if not, do this)
    const value = items.length>0 ? items[items.length-1] : "0";
    //The first position of the array is the value ""
    //I can erase this but I will not, so I remember this.
    //const textRes = textArray[0]; <--- In the destructured array I rename the variable to "stack"
    //The second position is the function to change that value
    //const modifyText = textArray[1]; <--- In the destructured array I rename the variable to "stack"
    // What the function executes
    return(
    // What the screen prints
        <main className='react-calculator'>
            <Result value={value}/>
            
            <Numbers onClickNumber={number => {
                setStack(`${stack}${number}`);
            }} />

            <Functions
            //In order to put more than one function, in this case I'm just
            //using "setStack", I need to add another "{}" right after the 
            //arrow because that would be an object of functions
                onClickClear={ () =>
                    setStack('')
                }
                onClickDel={() =>  {
                    if(stack.length > 0){
                        const newStack = stack.substring(0, stack.length-1)
                        setStack(newStack);
                    }   
                }}
                />
            
            <MathOperations
                onClickOperation={(operation)=>{
                    //console.log(`esto es una ${operation}`)
                    setStack(`${stack}${operation}`);
                }}
                onClickEqual={(equal)=>{
                    //<console.log(`el resultado es: ${equal}`)
                    if(stack.length>0){
                        setStack(eval(stack).toString());
                    } 
                }}
                />

        </main>
    )
};


//export component
export default App;