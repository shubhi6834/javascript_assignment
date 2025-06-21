4.  
function truncate_string(str, num) { 
return str.slice(0, num); 
} 
console.log(truncate_string("Robin Singh", 4));  
5.  
function abbrev_name(str) { 
    let nameParts = str.split(' '); 

    return nameParts[0] + ' ' + nameParts[1].charAt(0) + '.'; 
} 
console.log(abbrev_name("Robin Singh")); 
 
6.  
function protect_email(email) { 
    let parts = email.split('@'); 
    let username = parts[0].slice(0, 4) + '...'; 
    return username + '@' + parts[1]; 
} 
console.log(protect_email("robin_singh@example.com")); 
. 
7.  
function string_parameterize(str) { 
    return str.toLowerCase().replace(/\s+/g, '-'); 
} 
console.log(string_parameterize("Robin Singh from USA."));  
. 
8.  
function capitalize(str) { 
    return str.charAt(0).toUpperCase() + str.slice(1); 
} 
console.log(capitalize('js string exercises'));  
. 
9.  
function capitalize_Words(str) { 
    return str.replace(/\b\w/g, function(char) { 
        return char.toUpperCase(); 
    }); 
} 
console.log(capitalize_Words('js string exercises'));  
. 
10. 
function swapcase(str) { 
    return str.split('').map(function(char) { 
        return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase(); 
    }).join(''); 
} 
console.log(swapcase('AaBbc'));  
. 
11.  
function camelize(str) { 
    return str 
        .replace(/(?:^\w|[A-Z]|\b\w|\s+|[-_])/g, (match, index) =>  
            index === 0 ? match.toLowerCase() : match.toUpperCase()) 
        .replace(/\s+/g, '') 
        .replace(/[-_]+/g, ''); 
} 
console.log(camelize("JavaScript Exercises"));     
console.log(camelize("JavaScript exercises")); 
console.log(camelize("JavaScriptExercises")); 
. 
12.  
function uncamelize(str, separator = ' ') { 
    return str.replace(/([a-z0-9])([A-Z])/g, '$1' + separator + '$2').toLowerCase(); 
} 
console.log(uncamelize('helloWorld'));           console.log(uncamelize('helloWorld', '-'));      
console.log(uncamelize('helloWorld', '_'));  
 
. 
13.  
function repeat(str, n = 1) { 
    return str.repeat(n); 
} 
console.log(repeat('Ha!')); 
console.log(repeat('Ha!', 2)); 
console.log(repeat('Ha!', 3)); 
. 
14.  
function insert(str, insertStr = '', position = 1) { 
    return str.slice(0, position) + insertStr + str.slice(position); 
} 
console.log(insert('We are doing some exercises.'));   
console.log(insert('We are doing some exercises.', 'JavaScript ')); 
console.log(insert('We are doing some exercises.', 'JavaScript ', 18)); 
. 
15.  
function humanize_format(num = 0) { 
    const suffixes = ['th', 'st', 'nd', 'rd']; 
    const mod = num % 10; 
    const suffix = (mod > 3 || (num % 100 >= 11 && num % 100 <= 13)) ? 'th' : suffixes[mod]; 
    return num + suffix; 
} 
 
console.log(humanize_format());  
console.log(humanize_format(1)); 
console.log(humanize_format(8)); 
console.log(humanize_format(301)); 
console.log(humanize_format(402));  
 
 
 
. 
16.  
function text_truncate(str, length = 33, truncator = '...') { 
    return str.length > length ? str.slice(0, length) + truncator : str; 
} 
 
console.log(text_truncate('We are doing JS string exercises.'));  
console.log(text_truncate('We are doing JS string exercises.', 16)); 
console.log(text_truncate('We are doing JS string exercises.', 16, '!!'));    
. 
17.  
function string_chop(str, length = str.length) { 
    const result = []; 
    for (let i = 0; i < str.length; i += length) { 
        result.push(str.slice(i, i + length)); 
    } 
    return result; 
} 
console.log(string_chop('w3resource')); 
console.log(string_chop('w3resource', 2)); 
console.log(string_chop('w3resource', 3));  
. 
18.  
function count(str, subStr, caseSensitive = true) { 
    const regex = new RegExp(subStr, caseSensitive ? 'g' : 'gi'); 
    return (str.match(regex) || []).length; 
} 
console.log(count("The quick brown fox jumps over the lazy dog", 'the',false));  
console.log(count("The quick brown fox jumps over the lazy dog", 'fox', false));  
. 
19.  
function escape_HTML(str) { 
    const element = document.createElement('div'); 
    if (str) { 
        element.innerText = str; 
        element.textContent = str; 
    } 
    return element.innerHTML; 
} 
console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));  
 
. 
20. 
function formatted_string(padString, targetLength, padChar) { 
    let numberString = targetLength.toString(); // Convert the number to a string 
    let targetLengthFinal = padString.length + numberString.length; // Total length including 
padding and number 
 
        if (padChar === '') { 
         
        return numberString + padString.slice(0, padString.length - numberString.length); 
    } else { 
                return padString.slice(0, padString.length - numberString.length) + numberString; 
    } 
} 
console.log(formatted_string('0000', 123, '1')); console.log(formatted_string('00000000', 123, 
''));  
. 
21.  
function repeat_string(str, count = null) { 
    if (typeof str !== 'string' || typeof count !== 'number' || count < 1) { 
        return "Error in string or count."; 
    } 
    return str.repeat(count); 
} 
console.log(repeat_string('a', 4));  
console.log(repeat_string('a'));         
. 
22. 
function subStrAfterChars(str, char1, char2) { 
   let index1 = str.indexOf(char1); 
  if (index1 !== -1) { 
    str = str.slice(index1 + 1); 
  } 
   
  let index2 = str.indexOf(char2); 
   
   if (index2 !== -1) { 
    return str.slice(index2 + 1); 
  } 
   
    return str; 
} 
console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':', 'a')); 
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E', 'b')); 
. 
23.  
function strip(str) { 
    return str.trim(); 
} 
console.log(strip('w3resource ')); 
console.log(strip(' w3resource'));  
console.log(strip(' w3resource '));  
. 
24.  
function truncate(str, wordLimit) { 
    let words = str.split(' '); 
    return words.slice(0, wordLimit).join(' '); 
} 
console.log(truncate('The quick brown fox jumps over the lazy dog', 4));   
. 
25.  
function alphabetize_string(str) { 
    return str.split('').sort().join(''); 
} 
console.log(alphabetize_string('United States'));  
. 
26.  
function remove_first_occurrence(str, searchStr) { 
    let index = str.indexOf(searchStr); 
    if (index !== -1) { 
        return str.slice(0, index) + str.slice(index + searchStr.length); 
    } 
    return str; 
} 
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the')); 
 
. 
27.  
function ascii_to_hexa(str) { 
    let hex = ''; 
    for (let i = 0; i < str.length; i++) { 
        hex += str.charCodeAt(i).toString(16); 
    } 
    return hex; 
} 
console.log(ascii_to_hexa('12'));   
console.log(ascii_to_hexa('100'));  
 
. 
28.  
function hex_to_ascii(hex) { 
    let str = ''; 
    for (let i = 0; i < hex.length; i += 2) { 
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16)); 
    } 
    return str; 
} 
console.log(hex_to_ascii('3132'));  
console.log(hex_to_ascii('313030')); 
. 
29.  
function search_word(str, word) { 
    let count = (str.match(new RegExp(word, 'gi')) || []).length; 
    return `'${word}' was found ${count} times.`; 
} 
console.log(search_word('The quick brown fox', 'fox'));  
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));  
. 
30.  
function string_endsWith(str, suffix) { 
    return str.endsWith(suffix); 
} 
console.log(string_endsWith('JS PHP PYTHON', 'PYTHON')); 
console.log(string_endsWith('JS PHP PYTHON', '')); 
. 
 
31. 
function escape_html(str) {  
 return str.replace(/&/g, "&amp;")  
           .replace(/</g, "&lt;")  
           .replace(/>/g, "&gt;")  
           .replace(/'/g, "&#39;")  
           .replace(/"/g, "&quot;");  
  }  
console.log(escape_html('PHP & MySQL'));  
console.log(escape_html('3 > 2')); 
 
32.   
function remove_non_ascii(str) {  
 return str.replace(/[^\x20-\x7E]/g, "");  
}  
console.log(remove_non_ascii('äÄçÇéÉêPHPMySQLöÖÐþúÚ')  
  
33.  
function remove_non_word(str) {  
 return str.replace(/[^\w\s-]/g, "");  
}  
console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));   
34.  
function sentenceCase(str) {  
return str.replace(/(^\w|\.\s*\w)/g, function(match) {  
return match.toUpperCase();  
});  
}  
console.log(sentenceCase('PHP exercises. python exercises.'));  
35.  
function strip_html_tags(str) {  
return str.replace(/<\/?[^>]+(>|$)/g, "");  
}  
console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));  
36.  
function zeroFill(value, width, sign) {  
const prefix = sign === '-' ? '-' : '+';  
const absValue = Math.abs(value).toString();  
const paddedValue = absValue.padStart(width,'0');  
return (value < 0 ? '-' : prefix) + paddedValue;  
}  
console.log(zeroFill(120, 5, '-'));  
console.log(zeroFill(29, 4));        
37.  
function compare_strings(str1, str2) {  
return str1.localeCompare(str2, undefined, {sensitivity: 'accent'}) === 0;  
}  
console.log(compare_strings('abcd', 'AbcD'));  
console.log(compare_strings('ABCD', 'Abce')); 
38.  
function case_insensitive_search(text, query) {  
const lowerText = text.toLowerCase();  
const lowerQuery = query.toLowerCase();  
return lowerText.includes(lowerQuery) ? "Matched": "Not Matched";  
}  
console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));  
console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));  
console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));  
