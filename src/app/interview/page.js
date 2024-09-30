import React from 'react'
import LeftSidebar from './components/LeftSidebar'
import ChatSidebar from './components/ChatSidebar'
import ChatWindow from './components/ChatWindow'
// import Sidebar from './components/LeftSidebar'

export default function page() {
  return (
    <div className=" flex h-screen">
        <LeftSidebar/>
        <ChatSidebar />
        <ChatWindow />
    </div>
  )
}
