// create a function that uses a closure to encapsulate a value
// the function should return an array where the first function is a getter, and the second a setter
// the function should have a second optional parameter that defines a custom setter 
function encapsulate(value, set){

    let attribute = value;

    function getValue(){
        return attribute;
    }

    function setValue(value){
        if (set === undefined){
            attribute = value;
        }
        else {
            attribute = set(value);
        }
    }


    return [getValue, setValue];
}



test("simple encap",()=>{
    const [getValue,setValue] = encapsulate(100)
    expect(getValue()).toBe(100)
    setValue(1000)
    expect(getValue()).toBe(1000)

}) 

test("Advanced encap", ()=>{
    const noNegative = function(value) {
        if(value < 0){
            return 0
        }else{
            return value
        } 
    }
    const [getValue,setValue] = encapsulate(100, noNegative)
    setValue(-99)
    expect(getValue()).toBe(0)
}) 