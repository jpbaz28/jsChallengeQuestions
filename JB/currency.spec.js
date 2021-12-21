// write a function that takes in a number and gives back the output in USD
// with appropriate precision
// negative amounts should throw an error

function usd(amount = 0){
    let rounded = amount.toFixed(2);//rounds number to nearest hundredth
    let dollarString = "$" + rounded.toString(); //converts number to string and adds $
    return dollarString;
}

test("100 dollars", ()=>{
    const result = usd(100)
    expect(result).toBe("$100.00")
})

test("91.3688 dollars", ()=>{
    const result = usd(91.3688)
    expect(result).toBe('$91.37')
})

