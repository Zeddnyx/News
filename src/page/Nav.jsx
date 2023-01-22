import { useState } from 'react'
import Logo from '../asset/logo.svg'
import Menu from '../asset/icon-menu.svg'
import Close from '../asset/icon-menu-close.svg'
import { Link } from 'react-scroll'

export default function Nav() {
  const [nav, setNav] = useState(false)
  const click = () => {
    setNav(!nav)
  }

  const Li = ({ name, li }) => {
    return <li  className='hover:text-red'>
      <Link to={name} smooth={true} duration={900}>{li}</Link>
    </li>
  }

 return <nav> 
    <div className='sricky flex justify-between py-5 items-center text-darkB'>

      <div>
        <img className='w-10' src={Logo} alt="logo" /> 
      </div>

      <ul className='hidden lg:flex justify-between gap-10 text-darkG'>
        <Li name='home' li='Home' />
        <Li name='new' li='New' />
        <Li name='popular' li='Popular' />
        <Li name='trending' li='Trending' />
        <Li name='Category' li='Category' />
      </ul>

      <button onClick={click} className='outline-none lg:hidden z-40'>
        {!nav 
          ? <img src={Menu} alt="menu"   />
          : <img src={Close} alt="close" />
        }
      </button>

      <div className={!nav ? 'hidden' : 'lg:hidden z-30 right-0 top-0 text-[18px] absolute w-full h-screen bg-gray-500' }>
        <ul className=' flex flex-col gap-10 py-40 absolute  top-0 right-0 w-[70%] h-[100%] px-10 bg-white '> 
          <Li name='home' li='Home' /> 
          <Li name='new' li='New' />
          <Li name='popular' li='Popular' />
          <Li name='trending' li='Trending' />
          <Li name='Category' li='Category' />
        </ul>
      </div>

    </div>
  </nav>
}
