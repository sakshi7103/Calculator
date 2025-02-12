// Append value to Display
function appendValue(value){
    document.getElementById('display').value += value;
}
// Clear Display
function clearDisplay(){
    document.getElementById('display').value = '';
}
//Delete Last Character
function deleteLast(){
    let display=document.getElementById('display');
    display.value=display.value.slice(0,-1);
}
//Calculate the result
function calculateResult(){
    try {
        document.getElementById('display').value=eval(document.getElementById('display').value);
    }
    catch(error){
        alert("Invalid Expression");
        clearDisplay();
    }
}