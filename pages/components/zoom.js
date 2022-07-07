import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { root } from "postcss";


export default function Zoom() {
    gsap.registerPlugin(ScrollTrigger)
    const parallax = useRef();

    useEffect(() => {
        let q = gsap.utils.selector(parallax.current);

        gsap.to(parallax.current, {
            scrollTrigger: {
                trigger: parallax.current,
                start: "top 20%",
                end: "top 0%",
                ease: "none",
                scrub: 1,
                
            },
            width: '100%',
        })
        gsap.set(parallax.current, {
            scale: 0.2,
        })

        gsap.to(parallax.current, {
            scale: 1,
            marginTop:'0%'
        })

        gsap.to(q('.layer2'), {
            scrollTrigger: {
                trigger: q('.layer2'),
                start: "top 30%",
                end: "top 0%",
                ease: "none",
                scrub: 1,
            },
            scale: 1.1,
        })

        gsap.to(q('.layer3'), {
            scrollTrigger: {
                trigger: q('.layer3'),
                start: "top 30%",
                end: "top 0%",
                ease: "none",
                scrub: 1,
            },
            scale: 1.4,
        })

        gsap.to(q('.layer4'), {
            scrollTrigger: {
                trigger: q('.layer4'),
                start: "top 30%",
                end: "top 0%",
                ease: "none",
                scrub: 1,
            },
            scale: 2,
        })
        gsap.set(q('.layer5'), {
            scale: 0,
            rotate: 0
        })
        gsap.to(q('.layer5'), {
            scrollTrigger: {
                trigger: q('.layer5'),
                start: "top 30%",
                end: "bottom 0%",
                ease: "none",
                scrub: 1,
               
            },
            scale: 0.2,
            rotate: 360
        })
    }, [])

    return (
        <section className="zoom panel">
            <div className="grid grid-cols-12">
                <div className="col-span-12">
                    <div ref={parallax} className="parallax-wrapper">
                        <div className="layer layer1">
                            <div className="image-wrapper">
                                <Image priority={true} layout='fill' alt='' src={'/parrallax/1.jpg'} />
                            </div>
                        </div>
                        <div className="layer layer2">
                            <div className="image-wrapper">
                                <Image priority={true} layout='fill' alt='' src={'/parrallax/2.png'} />
                            </div>
                        </div>
                        <div className="layer layer3">
                            <div className="image-wrapper">
                                <Image priority={true} layout='fill' alt='' src={'/parrallax/3.png'} />
                            </div>
                        </div>
                        <div className="layer layer4">
                            <div className="image-wrapper">
                                <Image priority={true} layout='fill' alt='' src={'/parrallax/4.png'} />
                            </div>
                        </div>
                        <div className="layer layer5">
                            <div className="image-wrapper">
                                <Image priority={true} layout='fill' alt='' src={'/parrallax/bananna.png'} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}