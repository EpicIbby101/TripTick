import Features from '@/components/Features'
import { Navbar } from '@/components/Navbar'
import Recents from '@/components/Recents'
import { Searchbar } from '@/components/Searchbar'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Dashboard = () => {
  return (
    <div className=''>
      <Navbar />
      <Recents />
      <Features />
    </div>
  )
}

export default Dashboard