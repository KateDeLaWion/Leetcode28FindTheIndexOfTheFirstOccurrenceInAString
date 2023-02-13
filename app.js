// Solution 1   time complexity O(n)
var strStr = function(haystack, needle) {

    return haystack.indexOf(needle); // if needle not found, this will return -1
        
    };



// Solution 2  two nested loops, the time complexity would be O(n^2),
var strStr = function(haystack, needle) {

    if(haystack.length < needle.length) return -1;
    
    let count;
    for (let i = 0; i < haystack.length; i++){
         count=0;
    
        for (let j = 0; j < needle.length; j++){
            if(haystack[i+j] == needle[j])
               count++;
               else break;
        }
    
        if (count==needle.length) return i;
    }
        return -1;
        
    };