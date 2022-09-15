// FUNCTION TO PRINT THE TEXT IN THE BUTTONS
//THIS FUNCTION DOESN'T WORK ANYMORE
const onClickNumber = text => {
    console.log(text);
    
};

// FUNCTION TO PRINT THE TEXT IN THE OPERATIONS
// AND DISTINGUISH WHICH OPERATION IS
const onClickMath = text => {
    if (text === "+"){
        console.log("SUMA");
    }else if (text === "-"){
        console.log("RESTA");
    }else if (text === "*"){
        console.log("MULTIPLICACIÓN");
    }else if (text === "/"){
        console.log("DIVISIÓN");
    }else{
        console.log("ERROR EN SÍMBOLO DE OPERACIÓN");
    }
};

const onClickEqual = (text) => {
    console.log("Es resultado de la operación es: ")
};


const onClickClear = () => {
    console.log("Limpiar todo")
}

const onClickDel = () => {
    console.log("Limpiar un caractér");
}


export { onClickNumber, onClickMath, onClickEqual, onClickClear, onClickDel };