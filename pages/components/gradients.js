import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { root } from "postcss";


export default function Gradients() {
    gsap.registerPlugin(ScrollTrigger)
    const content = useRef();
    const [gradients, setGradients] = useState()

    useEffect(() => {
        let gradients = []

        for (let i = 0; i < 60; i++) {
            gradients.push(
                <div style={{ background: 'linear-gradient(-94deg, rgba(255,255,255,1) 0%, rgba(0,0,255,1) 50%' }} className={`grad grad${i}`}></div>
            )
        }
        setGradients(gradients)
      
    }, [])

    useEffect(() => {
        console.log(gradients)
        let q = gsap.utils.selector(content.current);
        let targets = q('.grad');
        console.log(targets)
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: q('.grad-collection'),
                toggleActions: "restart complete reverse resume",
                start: "top 30%",
                end: "top 0%",
                scrub: 1,
                pin: false
            }
        });
        tl.from(q(`.grad`), {
            background: 'linear-gradient(-130eg, rgba(0,0,215,1) 0%, rgba(0,255,90,1) 100%)',
        })
        tl.to(q(`.grad`), {
            background: 'linear-gradient(-88deg, rgba(216,0,215,1) 0%, rgba(0,255,90,1) 50%)',
        })

        tl.set(q('.text'), {
            opacity:0,
            marginTop:'12rem'
        })

        tl.to(q('.text'), {
            opacity:1,
            marginTop:'3rem'
        })

        for (let i = 0; i < 60; i++) {
            /*   tl.set(q(`.grad${i}`), {
                  background: 'linear-gradient(-100eg, rgba(0,0,215,1) 0%, rgba(0,255,90,1) 100%)'
              }) */
            /*  tl.to(q(`.grad${i}`), {
                 background: 'linear-gradient(-88deg, rgba(216,0,215,1) 0%, rgba(0,255,90,1) 100%)'
             }) */
        }

    }, [gradients])


    return (
        <section className="gradients panel">
            <div className="grid grid-cols-12">
                <div className="col-span-12">
                    <div ref={content} className="wrapper relative">
                        <div className="text absolute">
                          {/*   <h1>wannabe hipster dev</h1> */}
                        </div>
                        <div className="grad-collection">
                            {gradients && gradients.map((grad) => (
                                grad
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}