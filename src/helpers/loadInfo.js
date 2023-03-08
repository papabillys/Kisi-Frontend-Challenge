
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

    let result = {
        data: [], 
        errors: null
    }; 

    try { 
        let url = "https://fakerapi.it/api/v1/images?_quantity="+ qty +"&_type=kittens"; 
        let res = await fetch(url); 
        res = await res.json();      
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