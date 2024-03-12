import { useRouter } from 'next/navigation'
import React from 'react'

type HeaderType = {
    sub?: string
}

const Header = ({ sub }: HeaderType) => {

  const router = useRouter()

  const goHome = () => {
    router.push('/')
  }

  return (
    <div id="header">
        <div id="header-title" onClick={goHome}>
            <img id="header-title-logo" src={'/logo1.png'} width='50' height='50' alt='logo' />
            <h1 id="header-title-text">Photos</h1>
            { sub ? <span id="header-title-sub">{sub}</span> : <></> }
        </div>
    </div>
  )
}

export default Header