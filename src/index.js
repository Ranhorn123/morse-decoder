const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    exprArr = expr.split('')
    let k = 0;
    let arr = [];
    
    for(let i = 0; i< exprArr.length; i+=10){
      let str = ''
        for(let y = 0; y<10; y++){
          
           str += expr[i+y];
        }
      arr[k] = str;
      k++;
    }

    for (let i = 0; i < arr.length; i++) {
        xArr = arr[i].split('')
        var morseArr = ''

        for (let i = 0; i < 10; i++) {
          if (xArr[0] == '0') { xArr.splice(0,1)} else {null}   
        }

        for (let y = 0; y < xArr.length; y+=2){
         if( xArr[y+1] === '1') { morseArr+= '-'} 
         else 
         if (xArr[y+1] === '0') { morseArr+= '.'} 
         else {morseArr = ' '};
        }

        for (s in MORSE_TABLE){
            if(s === morseArr){
              morseArr = MORSE_TABLE[s]
            }

        arr[i] = morseArr;
      }
    }
    return arr.join('')
}


module.exports = {
 decode
}