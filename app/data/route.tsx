import { NextRequest, NextResponse } from 'next/server'
export async function GET(request: NextRequest) {

    // Calls the pokeapi and ask for random pokemons from 0 to 892
    const fail = null
    const count = 7
    let randomNumTemp = null
    let randomNumStorage:any= []
    let pokemonData = []
    for (let i = 0; i < count; i++) {
      let randomNum = Math.floor(Math.random() * 892)
      let randomNumTemp = randomNum
    if (randomNumStorage.includes(randomNumTemp)) {
    i--
    continue
    }else{
      randomNumStorage.push(randomNumTemp)
      let base_url = `https://pokeapi.co/api/v2/pokemon/${randomNumTemp}`;
    try {
        const response = await fetch(base_url);
       const data = await response.json();
       pokemonData.push(data)
    } catch (error) {
        return NextResponse.json("error")
    
    }
    }
    }
    //   const Pokemon_names = data.name;
    //   const Pokemon_pic = data.sprites.other["official-artwork"].front_default;
    
    
    
    // // display pokemon to the Dom
    // const add_ele = async () => {
    //   for (let index = 0; index <= pokemon_selection_array[0].length; index++) {
    //     await fetch_details();
    //     //
    //     pokemon_selection_array[0][index].textContent = "";
    //     //
    //     let make = pokemon_selection_array[0][index];
    //     let name_element = document.createElement("h1");
    //     let img_element = document.createElement("img");
    //     let img_element_src = document.createAttribute("src");
    //     let name_element_value = document.createTextNode(Pokemon_names);
    //     name_element.appendChild(name_element_value);
    //     make.appendChild(img_element).src = Pokemon_pic;
    //     make.appendChild(name_element);
    //   }
    // };
    
    // add_ele();
    
    return(
        NextResponse.json(pokemonData) 
    )
    
    }