// write a function that takes in a list of scores and returns a list of intitals
// ordered from highest score to lowest
// Assume no duplicate scores

// FORBIDDEN KEYWORDS
// for, while
// hint use map and sort ***array.map() or Map????***

function highScores(scores){
   
    //sort scores from lowest points to highest descending order
    scores.sort((firstItem, secondItem) => secondItem.points - firstItem.points);

    //map new array with only initials
    const reformattedArray = scores.map((obj) => {
        return obj.initials;
    });
    
    return reformattedArray;
};



test('High Scores',()=>{
    const scores = [
    {initials:"ACR", points: 1000},
    {initials:"JAG", points: 1200},
    {initials:"TED", points: 90},
    {initials:"AAA", points: 0}
    ]
    const ordered = highScores(scores)
    expect(ordered).toEqual(['JAG','ACR','TED','AAA'])

})