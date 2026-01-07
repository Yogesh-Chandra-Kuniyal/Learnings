var reverseString = function(s) {

    for(let index = 0 ; index < (s.length) / 2; index ++ ){
        let temp = s[index];
        s[index] = s[(s.length) - index - 1];
        s[(s.length) - index - 1] = temp;
        // [s[index], s[(s.length) - index - 1]] = [s[(s.length) - index - 1], s[index]];
    }
    return s;
};

let s = ["h","e","l","l","o"];

console.log(reverseString(s));