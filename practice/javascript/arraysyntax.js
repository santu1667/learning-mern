function findInstruments(input){

    let instruments = [{
        name:"guitar",
        shop:"Santosh",
        price:299
    },
    {
        name:"Violin",
        shop:"Kunal",
        price:500
    },
    {
        name:"Keyboard",
        shop:"TCS",
        price:800
    }]
    console.log(instruments.keys());
    var filteredResults=[];
    for(let key of instruments){
        if(key.name.toLowerCase().includes(input.toString().toLowerCase()) ||
        key.price.toString().toLowerCase().includes(input.toString().toLowerCase()) ||
           key.shop.toLowerCase().includes(input.toString().toLowerCase()))
            {
            console.log('inisde equals');
            filteredResults.push(key)
        }
    }
    console.log(filteredResults);
}

findInstruments("v5");