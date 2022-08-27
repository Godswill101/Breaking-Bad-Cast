import React from 'react'
import Spinner from '../../image/spinner.gif'


const spinner = () => {
  return (
    <img src={Spinner} style={{width: '400px', margin: 'auto', display: 'block' }} alt='Loading' />
  )
}

export default spinner