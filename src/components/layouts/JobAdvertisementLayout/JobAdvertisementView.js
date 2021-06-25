import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

export default function JobAdvertisementView({...props}) {
  let { id } = useParams()
  return (
    <>
      Job Advertisement View {id}
    </>
  )
}
