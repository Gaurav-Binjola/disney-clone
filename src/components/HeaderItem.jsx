import React from 'react'

const HeaderItem = ({name, Icon}) => {
  return (
    <div className='text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer mb-3'>
        <Icon />
        <h2 className='hover:border-b-2 hidden md:block'>{name}</h2>
        
    </div>
  )
}

export default HeaderItem