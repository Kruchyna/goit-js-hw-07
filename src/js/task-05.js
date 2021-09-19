const refs = {
    input: document.getElementById("name-input"),
    nameOutput:   document.getElementById("name-output")
  
};

refs.input.addEventListener('input', onInputChange);

 function onInputChange(event) {
   if(refs.input.value === '') {
      refs.nameOutput.textContent = 'незнакомец';
       
   } else {
       refs.nameOutput.textContent = event.currentTarget.value;
      
    }
};
