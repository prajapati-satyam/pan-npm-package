let mess;
let pass;
let input;
let output;
let warning;
let fail = {
  pass: false,
  status: 'fail',
  mess: null,
  input: null,
  output: null,
  warning: null
}


function panValid(pan) {
  if (isNaN(pan) === true) {

    const splitPan = pan.split('');
    if (splitPan.length === 10) {
      if (
        isNaN(splitPan[0]) === true &&
        isNaN(splitPan[1]) === true &&
        isNaN(splitPan[2]) === true &&
        isNaN(splitPan[3]) === true &&
        isNaN(splitPan[4]) === true
      ) {

        if (isNaN(splitPan[5]) === false &&
          isNaN(splitPan[6]) === false &&
          isNaN(splitPan[7]) === false &&
          isNaN(splitPan[8]) === false) {
          if (isNaN(splitPan[9]) === true) {
            input = pan
            output = pan.toUpperCase();
            mess = 'all ok'

            const allUppercaseAlphabets = splitPan
              .filter(item => typeof item === 'string' && isNaN(item))  // Filter to get only alphabetic characters
              .every(char => char === char.toUpperCase());

            if (allUppercaseAlphabets === true) {
              warning = null
            } else {
              warning = "pan card all letters must be capital"
            }
               
            let obj = {
              pass: true,
              status: 'pass',
              mess,
              input, 
              output, 
              warning
            }
            // return mess = 'all ok'
            return obj
          } else {
            // return mess = 'failed'
            return fail
            return fail
          }
        } else {
          // return mess = 'not valid'
          return fail
        }
        // return mess = 'ok';
      } else {
        fail.mess = 'pan first five letter must be alphabetical';
        return fail;
      }
    } else {
      fail.mess = `pan length must be 10 digit and your pan length is ${splitPan.length}`
      return fail;
    }
    console.log(splitPan)
  } else {
    fail.mess = 'input must be in string format'
    return fail;
  }
}


export default panValid;