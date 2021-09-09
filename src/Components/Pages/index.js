import React from 'react'
import { useState } from 'react'
import About from '../About'
import { homeObjOne, homeObjTwo, homeObjThree } from '../About/Data'
import Contact from '../Contact'
import Header from '../Header'
import Navbar from '../Nav'

import Sidebar from '../Sidebar'


const Home = () => {

      const [isOpen, setIsOpen] = useState(false)

      const toggle = () => {
            setIsOpen(!isOpen)
      }

      return (

            <>

                  <Sidebar isOpen={isOpen} toggle={toggle}/>
                  <Navbar toggle={toggle}/>
                  <Header />
                  <About {...homeObjOne}/>
                  <About {...homeObjTwo}/>
                  <About {...homeObjThree}/>

                  <Contact />

            </>
      )
}

export default Home

