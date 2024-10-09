function List(){
    //const fruits = ["apple", "orange", "banana"];

    //make it look nice

    //const listItems = fruits.map(fruit => <li>{fruit}</li>);


    //example 2

    const fruits = [{id:1, name: "apple", calories: 95}, 
                    {id:2, name: "orange", calories: 45}, 
                    {id:3, name: "banana", calories: 37}]
    //dispolay the fruits nicemy'
        //react wants us to add uniques key to the items 
    const list = fruits.map(fruit => <li key = {fruit.id}>{fruit.name} : <b>{fruit.calories}</b></li>);             



    //SORT 

    //fruits.sort((a,b) => a.name.localeCompare(b.name)); // ALPHABETICAL
    //fruits.sort((a,b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL
    //fruits.sort((a,b) => a.calories - b.calories); //ASCENDING ORDER // NUMERIC
    //fruits.sort((a,b => b.calories - a.calories)); //  REVERSE // 

    //FILTER

    const lowCal = fruits.filter(fruit => fruit.calories < 100);
        //now there will be a lowcal list that contains the low calories foods. 
        //we want to map the lowcal list for our answer 
    //const lowCal = fruits.filter(fruit => fruit.calories => 100); //gives fruits taht are high calorie

    const List2 = lowCal.map(fruit => <li key  = {fruit.id}> {fruit.name} : <b>{fruit.calories}</b> </li>);

    return(
        
        <ol>{List2}</ol>

        
    );


}

export default List