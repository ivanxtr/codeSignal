/* 
Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.

Example

For inputString = "(bar)", 
the output should be solution(inputString) = "rab";

For inputString = "foo(bar)baz", 
the output should be solution(inputString) = "foorabbaz";

[foo, bar, baz]

For inputString = "foo(bar)baz(blim)", 
the output should be solution(inputString) = "foorabbazmilb";

For inputString = "foo(bar(baz))blim", the output should be
solution(inputString) = "foobazrabblim".

Because "foo(bar(baz))blim" 
becomes "foo(barzab)blim" 
and then "foobazrabblim".

*/

function solution(inputString) {
    let str = inputString
    const re = /\([A-Za-z]*\)/g // regex to get the text inside of the parentesis
    
    while (re.test(str)) {
        str = str.replace(re, (substr) =>
            substr
                .slice(1, substr.length - 1) // get the word
                .split('') // split the letters into an array
                .reverse() // reverse the array
                .join('') // forming the string
        )
    }
    
    return str
} 

 console.log(solution("(bar)")) // rab
 console.log(solution("foo(bar)baz")) // foorabbaz
 console.log(solution("foo(bar)baz(blim)")) // foorabbazmilb
