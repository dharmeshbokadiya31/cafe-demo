import React from 'react'

const LayoutWrapper = ({ children }) => {
  return (
    <div className='relative flex items-center justify-center min-h-screen py-10'>
      <div className='relative w-[360px] h-[640px] border border-gray/20 bg-foreground overflow-hidden'>{children}</div>
    </div>
  )
}

export default LayoutWrapper