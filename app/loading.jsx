'use client'
import ClipLoader from 'react-spinners/ClipLoader'

const override = {
  display: 'block',
  margin: '100px auto'
}

export default function LoadingPage() {
  return (
    <ClipLoader color={"#3b82f6"} cssOverride={override} size={`150`} aria-label={"Loading Spinner"}/>
  )
}
