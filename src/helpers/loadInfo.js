/*
*Return the data in a object format like { data, errors }. 
*Data is an array containing objects for each photo and every photo object contains: 
    name (the title of the card), 
    image (the image of the card)
    description (the text that is being displayed on hover)
    isHover (a variable to keep track of the state of the card)

*I use Faker Api in order to get data which can be found here https://fakerapi.it/en 
*At Faker Api, head to images section. 

*I am using kittens as a theme, because a lot of other themes are from an API that is about to shut down and the images contain the watermark to inform us about that.
*/

// keep 1 of 2 functions 
export async function loadImages(botLimit, topLimit){ 

    let result = {
        data: [], 
        errors: null
    }; 

    try { 
        let total_ids = ""; 
        for (let i=botLimit; i<=topLimit; i++){ 
            total_ids = total_ids + i + ',' 
        }
        total_ids = total_ids.slice(0,-1); 

        let url = "https://rickandmortyapi.com/api/character/" + total_ids; 
        let res = await fetch(url); 
        res = await res.json();      
        console.log(res);  
        res.forEach(el => {
            let temp = { 
                name: el.name, 
                image: el.image, 
                isHover: false, 
                extra_data: { 
                    status: el.status, 
                    species: el.species, 
                    gender: el.gender, 
                    origin: el.origin.name 
                }
            }
            result.data.push(temp); 
        });    
    }catch(err){ 
        console.log(err); 
        result.errors = err;   
    }    
    return result; 
}

export async function loadImagesNew(qty){ 

    // Init the return object 
    let result = {
        data: [], 
        errors: null
    }; 

    try { 
        // Format url and fetch it 
        let url = "https://fakerapi.it/api/v1/images?_quantity="+ qty +"&_type=kittens"; 
        let res = await fetch(url); 
        res = await res.json();   
        
        // Keep the data needed. 
        // Also added isHover in order to keep track of each cards state ( if its hovered or not ) 
        res.data.forEach(el => {
            let temp = { 
                name: el.title, 
                image: el.url, 
                isHover: false, 
                description: el.description
            }
            result.data.push(temp); 
        });    
    }catch(err){ 
        console.log(err); 
        result.errors = err;   
    }    
    return result; 
}