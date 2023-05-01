let CapsLockIsOn = false;
let ShiftIsOn = false;


const keys = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/','/|\\', 'Shift'],
    ['Ctrl', 'Alt', 'Space', 'Alt', 'Ctrl','<-','\\|/', '->']
  ];

  const keysShift = [
    ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/','/|\\', 'Shift'],
    ['Ctrl', 'Alt', 'Space', 'Alt', 'Ctrl','<-','\\|/', '->']
  ];
  
  const textField = document.createElement('textarea');
  document.body.appendChild(textField);
  
  function keyboard(CapsLock,Shift){

  // Create the HTML for the keyboard
  const keyboardContainer = document.createElement('div');
  keyboardContainer.classList.add('keyboard-container');
  if(document.querySelector('.keyboard-container'))
  document.body.removeChild(document.querySelector('.keyboard-container'));
  
  mykeys = Shift ? keysShift : keys;
  
  for (let i = 0; i < mykeys.length; i++) {
    const row = document.createElement('div');
    row.classList.add('keyboard-row');
    keyboardContainer.appendChild(row);
  
    for (let j = 0; j < mykeys[i].length; j++) {
      const key = document.createElement('div');
      key.classList.add('keyboard-key');
      if(CapsLock || Shift)
        key.textContent = mykeys[i][j].toUpperCase();
    else
        key.textContent = mykeys[i][j];
      row.appendChild(key);
  
      // Add event listener for when the key is clicked
      key.addEventListener('mousedown', () => {
        key.classList.add('active');
        if (key.textContent.toLowerCase() === 'capslock'){
            CapsLockIsOn = !CapsLockIsOn;
            keyboard(CapsLockIsOn,ShiftIsOn);
        }
        else if(key.textContent.toLowerCase() === 'shift'){
            ShiftIsOn = !ShiftIsOn;
            keyboard(CapsLockIsOn,ShiftIsOn);
        }
        else{
            if(CapsLockIsOn)
                simulateKeyPress(key.textContent.toUpperCase());
            else if(ShiftIsOn){
                simulateKeyPress(key.textContent.toUpperCase());
                ShiftIsOn = false;
                keyboard(CapsLockIsOn,ShiftIsOn);
            }
            else
                simulateKeyPress(key.textContent);
        }
      });

        key.addEventListener('mouseup', () => {
            key.classList.remove('active');
        });
  
      // Add event listener for when the corresponding physical key is pressed
      document.addEventListener('keydown', (event) => {
        if (event.key === key.textContent) {
          key.classList.add('active');
          simulateKeyPress(key.textContent);
          
        }
      });
  
    //   Add event listener for when the corresponding physical key is released
      document.addEventListener('keyup', (event) => {
        if (event.key === key.textContent) {
          key.classList.remove('active');
        }
      });
    }
  }
  document.body.appendChild(keyboardContainer);

}

keyboard(CapsLockIsOn,ShiftIsOn);
  
  // Simulate a key press on the virtual keyboard
  function simulateKeyPress(key) {
    textField.value += key;
  }
  