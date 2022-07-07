import React, { useState, useEffect, useRef } from "react"
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

export default function ImageScroll() {
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(ScrollToPlugin);
    const image = useRef();
    const test = useRef();
    const scroll = useRef()
    /*  ScrollTrigger.defaults({ scroller: image.current }); */

    function goToSection(i, anim) {
        gsap.to(window, {
            scrollTo: { y: i * innerHeight, autoKill: true },
            duration: 0.5
        });

        if (anim) {
            anim.restart();
        }
    }


    useEffect(() => {
        //scroll to section
         /*  gsap.utils.toArray(".panel").forEach((panel, i) => {
              ScrollTrigger.create({
                  trigger: panel,
                  onEnter: () => goToSection(i)
              });
  
              ScrollTrigger.create({
                  trigger: panel,
                  start: "bottom bottom",
                  onEnterBack: () => goToSection(i),
              });
          }); */

        gsap.set(image.current, {
            width: '0%',
            height: '100%',
        })

        gsap.to(image.current, {
            scrollTrigger: {
                trigger: image.current,
                start: "top 80%",
                end: "top 10%",
                ease: "none",
                scrub: 1,
            },
            width: '100%',
        })

        gsap.set(image.current, {
            width: '100%',
            height: '100%',
        })

        gsap.to(image.current, {
            scrollTrigger: {
                trigger: scroll.current,
                start: "top 30%",
                end: "top 0",
                ease: "none",
                scrub: 1,
                scroller: '.scroll-content'
            },
            width: '50%',
            height: '50%'
        })
    }, [])

    return (
        <section className="image-scroll panel">
            <div className="grid grid-cols-12">
                <div className="col-span-6 relative">
                    <div ref={image} className="image-wrapper">
                    </div>
                    <div className="markers">
                        <div className="wrapper relative">
                            <h1 className="studio">STUDIO</h1>
                        </div>
                    </div>
                </div>
                <div className="col-span-6">
                    <div className="scroll-content p-5">
                        <h1>Title title</h1>
                        <h4>subtitle</h4>

                        <div className="body-text">
                            The Ferrari F50 (Type F130) is a mid-engine sports car manufactured by Italian automobile manufacturer Ferrari from 1995 to 1997. Introduced in 1995, the car is a two-door, two seat targa top. The car is powered by a 4.7 L naturally aspirated Tipo F130B 60-valve V12 engine that was developed from the 3.5 L V12 used in the 1990 Ferrari 641 Formula One car. The car's design is an evolution of the 1989 Ferrari Mythos concept car.[7]
                            <br /><br />
                            Only a total of 349 cars were made with the last car rolling off the production line in July 1997. [1]

                            <br /><br />
                            <span className="scroll-test" ref={scroll}></span>
                            The F50's engine predated the car; it was used in the Ferrari 333 SP for the American IMSA GT Championship in 1994, allowing it to become eligible for the stock engine World Sports Car category.
                            <br /><br />
                            Following the motorsport theme of the Ferrari F40 LM, Ferrari developed the F50 based F50 GT in collaboration with its racing partners Dallara and Michelotto to compete in GT1-class racing. Notable changes made to the car include a fixed roof, a large rear spoiler, new front spoiler, adjustable suspension system, Speedline racing alloy wheels with racing slicks and a large rear diffuser. The 4.7-litre V12 engine in the F50 GT was tuned to generate a power output of around 551 kW (749 PS; 739 hp) at 10,500 rpm. A test held in 1996 proved the car to be quicker even than the 333SP, but this went unnoticed as Ferrari cancelled the F50 GT project due to entry of purpose built racing cars in competition such as the Porsche 911 GT1 and due to lack of funding, instead focusing on Formula One after the BPR Global GT Series folded. Ferrari sold off the three complete chassis that were built - the test car 001, 002 and 003. Chassis 002 and 003 had bodies fitted before being sold. The remaining three tubs were reportedly destroyed.[8][9]
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}