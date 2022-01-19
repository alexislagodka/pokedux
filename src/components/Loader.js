import React from 'react'
import { TailSpin } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='loader'>
      <TailSpin color='#038E9F' height={100} width={100} />
    </div>
  )
}

export default Loader
