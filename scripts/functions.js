function getInputform(inputId){
    const formValue = document.getElementById(inputId);
    const formValueString = formValue.value;
    // const finalValue = parseFloat(formValueString);
    formValue.value = '';
    return formValueString;
   }

   function elementByID(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementValue = parseFloat(elementText);
    return elementValue;
   }
   
   function setElemetValue(elemetIdtext, newValue){
    const textElement = document.getElementById(elemetIdtext);
    textElement.innerText = newValue;
   }

   

