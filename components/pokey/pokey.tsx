"use client"
import { PokeyContent } from "@/utils/content-pokey"
import Image from "next/image"
import useSWR from "swr"
import { useEffect, useState } from "react"

export default function Pokey() {
    const safe = {
        data: null
    }
    let count = 0
    const basedata = [1, 2, 3, 4, 5, 6, 7]
    const content = PokeyContent()
    const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json())
    const [toggled, setToggled] = useState(false)
    let { data, error, isLoading } = useSWR("/data", fetcher)


    const randomPokemon = basedata.map((count = 0) => {
        return (
            <div className="api-pokemon pause" id={"api-poke-" + count}>
                <Image src={content.img_card} alt="" />
                <h3>Pokemon</h3>
            </div>
        )
        count++
    })


    // // pause animation & show info about when clicked
    // pokemon_selection.forEach((element) => {
    //   element.addEventListener("click", () => {
    //     console.log(element);
    //     pokemon_details.classList.toggle("pokemon_details_trans_js");
    //     pokemon_selection.forEach((element) => {
    //       element.classList.toggle("pause");
    //     });
    //   });
    // });

    return (
        <section className="pokey-main">
            <video className="pokey-video" autoPlay loop muted>
                <source src="../media/Circle4872.mp4" type="video/mp4" />
            </video>

            <div className="pokemon_details_trans pokemon_details_trans_js">
                <div className="pokemon_details">
                    <ul>
                        <li>
                            <h1>Name</h1>
                            <div></div>
                        </li>
                        <li>
                            <h1>Something</h1>
                            <div></div>
                        </li>
                        <li>
                            <h1>Something</h1>
                            <div></div>
                        </li>
                        <li>
                            <h1>random info</h1>
                            <div></div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="pokey-head-title">
                <h2>Pokey Random </h2>
                <h3>Learn About Pokemon Near You</h3>
            </div>

            <div className="body_2">
                <section className="pokey-gallery">

                    {isLoading ?
                        randomPokemon
                        :
                        data === "error" || data == null ?
                        basedata.map((count = 0) => {
                            isLoading = false
                            return (
                                <div className="api-pokemon pause" id={"api-poke-" + count}>
                                    <Image src={content.img_card} alt="" />
                                    <h3>Pokemon</h3>
                                </div>
                            )
                            count++
                        })
                        :
                            data?.map((safe:any) => {
                                count++
                                return (
                                    <div className="api-pokemon pause" id={"api-poke-" + (count)}>
                                        <img
                                            src={"" + data[count - 1].sprites.other["official-artwork"].front_default}
                                            width={100}
                                            height={100}
                                            alt="" />
                                        <h1>{data[count - 1].name}</h1>
                                    </div>
                                )
                            })
                            


                    }
                </section>

                <section className="pokemon-ball-footer">
                    <div className="pokemon-ball-footer-image">
                        <Image src={content.img_poke_ball} alt="" />
                    </div>
                </section>
            </div>

        </section>
    )
}

