// A string is considered "screaming" if 50% or more of its characters are capitalized
// noScreams is a function that should take in an array of strings and return an array with all screams removed

// FORBIDDEN KEYWORDS
// for, while

function noScreams(ray){

    //function uses regex expression to compare number of uppercase to lowercase
    //numbers. Used as a condition for the filter below to make a non-screaming array.
    //Returns where number of uppercase is less than number of lowercase in string.
    function hasMoreUppers(str){
        return (str.length - str.replace(/[A-Z]/g, '').length) < 
        (str.length - str.replace(/[a-z]/g, '').length);
    }
    
    //calls filter method on array with condition specified in hasMoreUppers()
    const screamsRemoved = ray.filter(hasMoreUppers);
    
    return screamsRemoved;
}

test("All Screaming", ()=>{
    const result = noScreams(["AAAA","BBBB", "CCCC"])
    expect(result.length).toBe(0)
}) 

test("None Screaming", ()=>{
    const result = noScreams(["aaaa","bbbb", "cccc"])
    expect(result.length).toBe(3)
}) 

test("Some Screaming", ()=>{
    const result = noScreams(["aaaA","BBBb", "cccC"])
    expect(result.length).toBe(2)
}) 


// for (let i = 0; i < ray.length; i++) {
//     let upperCount = 0;
//     let lowerCount = 0;

//     let splitRay = ray[i].split();
//     for (let j = 0; j < splitRay.length; j++) {

//         if ((splitRay[j].isUpperCase()) === true) {
//             upperCount++
//         }
//         else {
//             lowerCount++
//         }  
//     }
//     if (upperCOunt >= lowerCount) {
//         ray[i].pop();
//     }  
//     upperCount = 0;
//     lowerCount = 0;
// }
// return ray;