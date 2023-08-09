import Image from "next/image";
import img_card from "../public/img/pokemon.0.0.jpg"
import img_poke_ball from "../public/img/pokemon-ball-img.jpg"
import header_img from "../public/img/background-ob.jpg"
import header_logo from "../public/img/pokemon_logo_bw_fullsize.png"

export function PokeyContent(){
return(
     {
img_card :img_card,
img_poke_ball:img_poke_ball,
    }
  
)

}
export function HeaderContent(){
    return(
         {
            header_img:header_img,
            header_logo:header_logo,
        }
      
    )
    
    }