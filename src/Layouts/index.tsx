import React, { FC, ReactElement } from 'react'
import { Navbar } from '../component/navbar/navbar'
import { Footer } from '../component/footer/footer'
import { Sidebar } from '../component/sidebar/sidebar'
import {Outlet} from 'react-router-dom'

interface Iprops {
    children?: ReactElement
}

export const Layout: FC<Iprops>  = ({children}) => {
  return (
    <div className="flex flex-wrap">
  <nav className="w-full">
    <Navbar />
  </nav>
  
  <div className="w-full md:w-1/4 lg:w-1/5 px-4">
    <Sidebar />
  </div>
  <main className="w-full md:w-3/4 lg:w-4/5 p-6 mt-10">
    <Outlet></Outlet>
  </main>
  <footer className="w-full">
    <Footer />
  </footer>
</div>
  )
}

