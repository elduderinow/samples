import React, { useState, useEffect, useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Header() {
    gsap.registerPlugin(ScrollTrigger)
    const title = useRef();

    return (
        <section className="header panel">
            <div className="grid grid-cols-12 p-5">
                <div className="col-span-6 ">
                    <p>fictive & co</p>
                </div>
                <div className="col-span-6">
                    <div className="intro flex align-bottom p-5">
                        <div className="intro-wrapper">
                            <h1 ref={title.ref}>some graphic design studio name</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}