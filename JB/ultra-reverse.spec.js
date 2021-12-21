// write a function that takes in an array and reverses each word in the array then the array

function ultraReverse(ray){

}

test("Super Reverse", ()=>{
    let words = ["abc","def","xyz"]
    words = ultraReverse(words)
    expect(words).toEqual(["zyx","fed","cba"])

    function ultraReverse(words){

        let splitString1 = words[0].split("");
        let splitString2 = words[1].split("");
        let splitString3 = words[2].split("");

        let reverseString1 = splitString1.reverse();
        let reverseString2 = splitString2.reverse();
        let reverseString3 = splitString3.reverse();

        let joinArray1 = reverseString1.join("");
        let joinArray2 = reverseString2.join("");
        let joinArray3 = reverseString3.join("");

        let finalArray = [joinArray3, joinArray2, joinArray1]


        return finalArray;

    }
    
})