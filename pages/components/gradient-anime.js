import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { GSDevTools } from 'gsap';
import { root } from "postcss";


export default function GradientsAnime() {
    gsap.registerPlugin(ScrollTrigger)
    const content = useRef();
    const [gradients, setGradients] = useState()


    useEffect(() => {
        let gradients = []

        for (let i = 0; i < 60; i++) {
            gradients.push(
                <div style={{ background: 'linear-gradient(-89deg, rgba(255,0,255,1) 0%, rgba(255,200,255,1) 50%' }} className={`grad grad${i}`}></div>
            )
        }
        setGradients(gradients)

    }, [])

    useEffect(() => {
        console.log(gradients)
        let q = gsap.utils.selector(content.current);
        let targets = q('.grad');
        console.log(targets)


        let tl = gsap.timeline();
        for (let i = 0; i < targets.length; i++) {
            tl.to(q(`.grad${i}`), {
                backgroundImage: `linear-gradient(${90 + (i * (30 / targets.length))}deg, rgba(${216 - (i * 0.65)},0,${29 + (i * 4.65)},1) ${0 + (i * (10 / targets.length))}%, rgba(0,205,55,1) 50%)`,
                duration: 4,
                repeat: -1,
                yoyo: false,
                paused:false
            }, '-=8')
        }

        let grad2 = () => {
            let tl = gsap.timeline();
            for (let i = 0; i < targets.length; i++) {
                tl.from(q(`.grad${i}`), {
                    backgroundImage: `linear-gradient(${70 + (i * (30 / targets.length))}deg, rgba(${216 + (i * 0.65)},0,${255 - (i * 4.65)},1) ${0 + (i * (10 / targets.length))}%, rgba(16,152,55,1) 50%)`,
                    duration: 10,
                    repeat: 1
                }, '-=20')
            }

        }



        /*  GSDevTools.create({ animation: master }) */







        /*  tl.to(q(`.grad`), {
             background: 'linear-gradient(-92deg, rgba(255,0,0,1) 0%, rgba(255,255,90,1)  50%)',
         }, '-=5') */

        /*  tl.to(q(`.grad`), {
             background: 'linear-gradient(-94deg, rgba(255,255,255,1) 0%, rgba(0,0,255,1) 50%',
         }) */



        /*  tl.to(q(`.grad`), {
             background: 'linear-gradient(-130eg, rgba(0,215,0,1) 0%, rgba(255,255,90,1) 100%)',
         }) */

        /*  tl.set(q('.text'), {
             opacity: 0,
             marginTop: '12rem'
         })
 
         tl.to(q('.text'), {
             opacity: 1,
             marginTop: '3rem'
         }) */


    }, [gradients])


    return (
        <section className="gradients panel">
            <div className="grid grid-cols-12">
                <div className="col-span-12">
                    <div ref={content} className="wrapper relative">
                        <div className="text absolute">
                            <h1>aint that some shit</h1>
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