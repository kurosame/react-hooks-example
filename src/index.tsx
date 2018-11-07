import UseContext from '@/containers/UseContext'
import UseEffect from '@/containers/UseEffect'
import UseState from '@/containers/UseState'
import React from 'react'
import { render } from 'react-dom'

render(
  <>
    <UseState />
    <UseEffect />
    <UseContext />
  </>,
  document.getElementById('root') as HTMLElement
)
