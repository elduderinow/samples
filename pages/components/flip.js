import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { root } from "postcss";


export default function Flip() {
    gsap.registerPlugin(ScrollTrigger)
    const content = useRef();

    useEffect(() => {
        let q = gsap.utils.selector(content.current);

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: content.current,
                toggleActions: "restart complete reverse resume",
                start: "top 100%",
                markers: true,
                scrub: true,
                pin: true
            }
        });

        tl.to(q(".p-one"), {
            autoAlpha: 0
        });
        tl.from(q(".p-two"), {
            autoAlpha: 0,
            y: 20
        });
        tl.set(
            q(".img-one"),
            {
                autoAlpha: 0
            },
            "<"
        );
        tl.from(
            q(".img-two"),
            {
                autoAlpha: 0
            },
            "<"
        );
    }, [])

    return (
        <section className="flip panel">
            <div ref={content} class="container">
                <div class="text">
                    <div class="p-one">
                        <p>Chupa chups toffee chocolate dessert chupa chups chupa chups donut. Marshmallow pudding biscuit toffee lemon drops caramels. Biscuit croissant topping. Apple pie powder candy gummi bears gingerbread topping.</p>
                    </div>
                    <div class="p-two">
                        <p>Dessert tart dragée chocolate bar chupa chups cookie candy. Jujubes muffin sesame snaps sesame snaps chocolate cake pastry gummies danish marzipan. Marshmallow croissant chocolate bar lollipop. Topping fruitcake sweet roll. Bonbon fruitcake dessert bear claw fruitcake bonbon lollipop tart.
                        </p>
                    </div>
                </div>

                <div class="laptop">
                    <img class="img-one" src="https://i.ibb.co/KmtsRDw/GIL-Dashboard.png" alt="" />
                    <img class="img-two" src="https://i.ibb.co/ZKrZhYt/GIL-multi-Langue.png" alt="" />
                </div>
            </div>
        </section>
    )
}