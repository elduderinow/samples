import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Header from './components/header'
import ImageScroll from './components/Image-scroll'
import Zoom from './components/zoom'
import Flip from './components/flip'
import Gradients from './components/gradients'
import GradientsAnime from './components/gradient-anime'

import Todo from './components/todo'




export default function Home() {
  return (
    <>
      <Todo />
      {/*  <Header /> */}
      {/*  <ImageScroll /> */}

      {/*  <Flip /> */}

      {/*  <GradientsAnime /> */}
      {/*  <Zoom /> */}
      {/*   <Gradients /> */}
    </>

  )
}
