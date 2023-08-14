"use client"
import { PokeyContent } from "@/utils/content-pokey"
import Image from "next/image"
import useSWR from "swr"
import useSWRImmutable from "swr/immutable"
import { useEffect, useState, useRef } from "react"


export default function Pokey() {
    let count = 0
    const basedata = [1, 2, 3, 4, 5, 6, 7]
    const content = PokeyContent()
    const card = document.querySelectorAll(".id")
    // React states
    const [toggled, setToggled] = useState(false)
    const [revalidate, setRevalidate] = useState(true)
    const [shouldFetch, setShouldFetch] = useState(null)
    // API fetch
    const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json())
    let { data, error, isLoading } = useSWR("/data", fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: revalidate,
        revalidateOnReconnect: true
    })

    const safe = {
        data: null
    }
    // Functions

    function handleToggle() {

        setToggled(!toggled)
        setRevalidate(!revalidate)
    }

    const randomPokemon = basedata.map((count = 0) => {
        return (
            <div key={count}>
                <div className={toggled ? "api-pokemon" : "api-pokemon pause"} id={"api-poke-" + count}>
                    <Image src={content.img_card} alt="" />
                    <h3>Pokemon</h3>
                </div></div>
        )
        count++
    })

    function subSection(cardInfo: any) {
        return (
            
                <div className="pokemon-subContainer-details">
                 <div className="pokemon-grid-head prevent-select">
                    <span  onClick={() => {
                                            handleToggle()
                                        }}>X</span>
                 </div>
                    <div className="pokemon-grid pokemon-grid-details">
                    <ul>
                        <li>
                            <h1>{data[cardInfo - 1].name}</h1>
                            <div className="pokemon-line"></div>
                        </li>
                        <li>
                            <span>⭐⭐⭐⭐⭐</span>
                            <br />
                            <div className="pokemon-line"></div>
                        </li>
                        <li className="description">   <br />
                            <h1>There are quite a few seriously rare Pokémon cards out there, and they can get staggeringly expensive. While you might love playing the Pokémon TCG for its snazzy card battles, some Pokémon cards are so scarce, so legendary that they can fetch lifechanging sums at auction</h1>
                            <div className="pokemon-line"></div>
                        </li>
                     </ul>    
                    </div>

                    <div className="pokemon-grid prevent-select">
                        <img src={"" + data[cardInfo - 1].sprites.other["official-artwork"].front_default} alt="" />
                    </div>                       

                </div>
        )
    }
    return (
        <section className="pokey-main">
            <video className="pokey-video" autoPlay loop muted>
                <source src="../media/Circle4872.mp4" type="video/mp4" />
            </video>

            {toggled ? <h1>{subSection(shouldFetch)}</h1> : ""}

            <div className="pokey-head-title">
                <h2>Pokey Random </h2>
                <h3>Learn About Pokemon Near You</h3>
            </div>

            <div className="body_2">
                <section className="pokey-gallery prevent-select">

                    {isLoading ?
                        randomPokemon
                        :
                        data === "error" || data == null ?
                            basedata.map((count = 0) => {
                                return (
                                    <div
                                        key={count}
                                        onClick={() => {
                                            handleToggle()
                                        }} >
                                        <div className={toggled ? "api-pokemon" : "api-pokemon pause"} id={"api-poke-" + count}>
                                            <Image src={content.img_card} alt="" />
                                            <h3>Pokemon</h3>
                                        </div></div>
                                )
                                count++
                            })
                            :
                            data?.map((safe: any) => {
                                count++
                                return (

                                    <div
                                        key={count}
                                        data-card={count}
                                        className={toggled ? "api-pokemon" : "api-pokemon id pause"} id={"api-poke-" + (count)
                                        } onClick={(event) => {
                                            setShouldFetch(event.target.offsetParent.id.split("-")[2])
                                            handleToggle()

                                        }}>
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

