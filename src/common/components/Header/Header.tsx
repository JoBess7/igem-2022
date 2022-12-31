import './Header.css'

import { Routes, Trees } from '../../Routes'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { Sling as Hamburger } from 'hamburger-react'
import classNames from 'classnames'
import Images from '../../Images'

function Header () {
  const [burgerOpened, setBurgerOpened] = useState(false)

  const burgerClasses = classNames('burger-menu', {
    'burger-menu-visible': burgerOpened
  })

  const [burgerState, setBurgerState] = useState(
    Trees.map((tree) => {
      return {
        opened: false,
        id: tree.name
      }
    })
  )

  const [counter, setCounter] = useState(0)

  const toggleBurgerDropdown = (index: number): void => {
    const tmpState = burgerState
    tmpState[index].opened = !tmpState[index].opened
    setCounter(counter + 1)
    setBurgerState(tmpState)
  }

  return (
    <header>
      <div className={burgerClasses}>
        {Trees.map((tree, index) => (
          <div
            key={tree.name}
            className={`burger-element ${
              burgerState[index].opened ? 'burger-element-visible' : ''
            }`}
          >
            <div onClick={() => toggleBurgerDropdown(index)} className='burger-element-title'>
              <img srcSet={Images.HeaderArrowDown} />
              <span>{tree.name}</span>
            </div>
            <div className='burger-element-dropdown'>
              {tree.children.map((child) => (
                <Link className='dropdown-link-burger' to={child.link} key={child.name}>
                  {child.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className='container'>
        <div className='logo'>
          <Link to={Routes.Home}>
            <img srcSet={Images.LogoBeetle} alt='' />
            <img srcSet={Images.LogoText} alt='' />
          </Link>
        </div>

        <div className='secondary-container'>
          <div className='links'>
            {Trees.map((tree) => (
              <div className='tree' key={tree.name}>
                <div className='tree-title'>
                  <div className='tree-title-elements'>
                    <span>{tree.name}</span>
                    <img srcSet={Images.HeaderArrowDown} />
                  </div>

                  <div className='tree-dropdown'>
                    {tree.children.map((child) => (
                      <Link className='dropdown-link' to={child.link} key={child.name}>
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Hamburger color='#f2f7fa' size={30} toggled={burgerOpened} toggle={setBurgerOpened} />
        </div>
      </div>
    </header>
  )
}

export default Header
