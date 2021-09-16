function encode(text) {
    let reference = {
        'a': '.-',
        'b': '-...',
        'c': '-.-.',
        'd': '-..',
        'e': '.>',
        'f': '..-.',
        'g': '--.',
        'h': '....',
        'i': '..',
        'j': '.---',
        'k': '-.-',
        'l': '.-..',
        'm': '--',
        'n': '-.',
        'o': '---',
        'p': '.--.',
        'q': '--.-',
        'r': '.-.',
        's': '...',
        't': '-',
        'u': '..-',
        'v': '...-',
        'w': '.--',
        'x': '-..-',
        'y': '-.--',
        'z': '--..',
        '1': '.----',
        '2': '..---',
        '3': '...--',
        '4': '....-',
        '5': '.....',
        '6': '-....',
        '7': '--...',
        '8': '---..',
        '9': '----.',
        '0': '-----',
        ' ': "&nsp"
    }

    console.log(reference["e"])
    let encodeTxt = text
    .toLowerCase()
    .split("")
    .map(a => reference[a])
    .join(" ")

    return encodeTxt
}


function decode(text) {
    let reference = {
        '.-': 'a',
        '-...': 'b',
        '-.-.': 'c',
        '-..': 'd',
        '.>': 'e',
        '..-.': 'f',
        '--.': 'g',
        '....': 'h',
        '..': 'i',
        '.---': 'j',
        '-.-': 'k',
        '.-..': 'l',
        '--': 'm',
        '-.': 'n',
        '---': 'o',
        '.--.': 'p',
        '--.-': 'q',
        '.-.': 'r',
        '...': 's',
        '-': 't',
        '..-': 'u',
        '...-': 'v',
        '.--': 'w',
        '-..-': 'x',
        '-.--': 'y',
        '--..': 'z',
        '.----': '1',
        '..---': '2',
        '...--': '3',
        '....-': '4',
        '.....': '5',
        '-....': '6',
        '--...': '7',
        '---..': '8',
        '----.': '9',
        '-----': '0',
        "&nsp": ' ' 
    }

    let decodeTxt = text
    .split(" ")
    .map(a => reference[a])
    .join("")

    return decodeTxt
}

let text = "Hello world"
// console.log('text:', text)
// Function Call

encodeText = encode(text)
console.log('encodeText:', encodeText)
console.log('type:',typeof encodeText)
decodeTxt = decode(encodeText)
console.log('decodeTxt:', decodeTxt)
console.log('type:',typeof decodeTxt)
