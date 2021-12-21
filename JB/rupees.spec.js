// In Zelda money takes the form of rupees
// rupees come in colors indicating their value 
// green = 1 ,blue = 5,red = 20, silver = 100, gold = 300
// calculate the total value
// note that if there is 0 of that rupee color it WILL NOT be on the object
// {green:2, blue:3, red:10} there are 0 silver and gold rupees

// hint good use case of guards 

function rupeeCalculator(wallet){

    //constants to hold value of specific colors
    const GREEN_VALUE = 1;
    const BLUE_VALUE = 5;
    const RED_VALUE = 20
    const SILVER_VALUE = 100;
    const GOLD_VALUE = 300;

    //assigns value from the object passed to this function. 
    //The guards assign 0 if there is no attribute passed
    const green = wallet.green ?? 0
    const blue = wallet.blue ?? 0
    const red = wallet.red ?? 0
    const silver = wallet.silver ?? 0
    const gold = wallet.gold ?? 0

    const total = (green * GREEN_VALUE) + (blue * BLUE_VALUE) + (red * RED_VALUE) + 
                  (silver * SILVER_VALUE) + (gold * GOLD_VALUE);
    
    return total;
}

test("dirt broke", ()=>{
    const wallet = {}
    const total = rupeeCalculator(wallet)
    expect(total).toBe(0)
})

test("At least one of each", ()=>{
    const wallet = {green:10,blue:4,red:5,silver:2,gold:1}
    const total = rupeeCalculator(wallet)
    expect(total).toBe(630)
})

test("Some missing", ()=>{
    const wallet = {blue:4,gold:1}
    const total = rupeeCalculator(wallet)
    expect(total).toBe(320)
})