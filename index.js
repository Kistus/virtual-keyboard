let CapsLockIsOn = false;
let ShiftIsOn = false;
let ru = false;


    const keys = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/','/|\\', 'Shift'],
    ['Ctrl', 'Alt','ru', 'Space', 'Alt','<-','\\|/', '->']
  ];

  const keysShift = [
    ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/','/|\\', 'Shift'],
    ['Ctrl', 'Alt','ru', 'Space', 'Alt','<-','\\|/', '->']
  ];


  const ruKeys = [
    ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х','ъ', '\\'],
    ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж','э', 'Enter'],
    ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.','/|\\', 'Shift'],
    ['Ctrl', 'Alt','en', 'Space', 'Alt','<-','\\|/', '->']
    ];

    const ruKeysShift = [
        ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
        ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х','Ъ', '\\'],
        ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж','Э', 'Enter'],
        ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',','/|\\', 'Shift'],
        ['Ctrl', 'Alt','en', 'Space', 'Alt','<-','\\|/', '->']
        ];

  const textField = document.createElement('textarea');
  document.body.appendChild(textField);
  function keyboard(CapsLock,Shift, ru){

  // Create the HTML for the keyboard
  const keyboardContainer = document.createElement('div');
  keyboardContainer.classList.add('keyboard-container');
  if(document.querySelector('.keyboard-container'))
    document.body.removeChild(document.querySelector('.keyboard-container'));
  if (ru){
    mykeys = Shift ? ruKeysShift : ruKeys;
  }
  else
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
        else if (key.textContent.toLowerCase() === 'ru' || key.textContent.toLowerCase() === 'en'){
            ru = !ru;
            keyboard(CapsLockIsOn,ShiftIsOn,ru);
        }
        else{
            if(CapsLockIsOn)
                simulateKeyPress(key.textContent.toUpperCase());
            else if(ShiftIsOn){
                simulateKeyPress(key.textContent.toUpperCase());
                ShiftIsOn = false;
                keyboard(CapsLockIsOn,ShiftIsOn);
            }
            else if (key.textContent.toLowerCase() === 'backspace')
                textField.value = textField.value.slice(0, -1);
            else if (key.textContent.toLowerCase() === 'space')
                textField.value += ' ';
            else if (key.textContent.toLowerCase() === 'tab')
                textField.value += '    ';
            else if (key.textContent.toLowerCase() === 'enter')
                textField.value += '\n';
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
          if (key.textContent.toLowerCase() === 'capslock'){
            CapsLockIsOn = !CapsLockIsOn;
            keyboard(CapsLockIsOn,ShiftIsOn);
        }
        else if(key.textContent.toLowerCase() === 'shift'){
            ShiftIsOn = !ShiftIsOn;
            keyboard(CapsLockIsOn,ShiftIsOn);
        }
        else if (key.textContent.toLowerCase() === 'ru' || key.textContent.toLowerCase() === 'en'){
            ru = !ru;
            keyboard(CapsLockIsOn,ShiftIsOn,ru);
        }
        else{
            if(CapsLockIsOn)
                simulateKeyPress(key.textContent.toUpperCase());
            else if(ShiftIsOn){
                simulateKeyPress(key.textContent.toUpperCase());
                ShiftIsOn = false;
                keyboard(CapsLockIsOn,ShiftIsOn);
            }
            else if (key.textContent.toLowerCase() === 'backspace')
                textField.value = textField.value.slice(0, -1);
            else if (key.textContent.toLowerCase() === 'space')
                textField.value += ' ';
            else if (key.textContent.toLowerCase() === 'tab')
                textField.value += '    ';
            else if (key.textContent.toLowerCase() === 'enter')
                textField.value += '\n';
            else
                simulateKeyPress(key.textContent);
        }
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
  