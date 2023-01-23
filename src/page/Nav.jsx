import { useState } from 'react'
import Logo from '../asset/logo.svg'
import Menu from '../asset/icon-menu.svg'
import Close from '../asset/icon-menu-close.svg'

export default function Nav() {
  const [nav, setNav] = useState(false)
  const click = () => {
    setNav(!nav)
  }

  const Li = ({ name, li }) => {
    return <li  className='hover:text-red'>
      {li}
    </li>
  }

 return <nav className='fixed w-full bg-white top-0 left-0 px-8'> 
    <div className='sticky flex justify-between py-5 items-center text-darkB'>

      <div>
        <img className='w-10' src={Logo} alt="logo" /> 
      </div>

      <ul className='hidden lg:flex justify-between gap-10 text-darkG'>
        <Li li='Home' />
        <Li li='New' />
        <Li li='Popular' />
        <Li li='Trending' />
        <Li li='Category' />
      </ul>

      <button onClick={click} className='outline-none lg:hidden z-40'>
        {!nav 
          ? <img src={Menu} alt="menu"   />
          : <img src={Close} alt="close" />
        }
      </button>

      <div className={!nav ? 'hidden' : 'lg:hidden z-30 left-0 top-0 text-[18px] absolute w-full h-screen' }>
        <ul className=' flex flex-col gap-10 py-40 absolute  top-0 right-0 w-[70%] h-[100%] px-10 bg-white '> 
          <Li li='Home' /> 
          <Li li='New' />
          <Li li='Popular' />
          <Li li='Trending' />
          <Li li='Category' />
        </ul>
      </div>

    </div>
  </nav>
}
