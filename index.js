const keys = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
    ['Ctrl', 'Alt', 'Space', 'Alt', 'Ctrl']
  ];
  
  const textField = document.createElement('textarea');
  document.body.appendChild(textField);
  
  // Create the HTML for the keyboard
  const keyboardContainer = document.createElement('div');
  keyboardContainer.classList.add('keyboard-container');
  document.body.appendChild(keyboardContainer);
  
  for (let i = 0; i < keys.length; i++) {
    const row = document.createElement('div');
    row.classList.add('keyboard-row');
    keyboardContainer.appendChild(row);
  
    for (let j = 0; j < keys[i].length; j++) {
      const key = document.createElement('div');
      key.classList.add('keyboard-key');
      key.textContent = keys[i][j];
      row.appendChild(key);
  
      // Add event listener for when the key is clicked
      key.addEventListener('mousedown', () => {
        key.classList.add('active');
        simulateKeyPress(key.textContent);
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
  
  // Simulate a key press on the virtual keyboard
  function simulateKeyPress(key) {
    textField.value += key;
  }
  