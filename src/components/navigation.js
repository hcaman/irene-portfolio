import React, { useEffect, useRef } from 'react'
import { useNavigationData } from '../hooks/useNavigationData'
import { NavLink } from './ui/Links'

const Navigation = () => {
  const { datoCmsNavigation, allDatoCmsSectionsTitle } = useNavigationData()
  const { name, lastname, buttonText } = datoCmsNavigation
  const navElement = useRef()
  const handleScroll = event => {
    const showMenu =  window.scrollY > 200;
    navElement.current.style.display = showMenu ? 'flex' : 'none'
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navItems = allDatoCmsSectionsTitle.nodes.map((item, i) => {
    const { linkMenu, linkName, section, originalId } = item
    const sectionName = JSON.parse(section)[0]
    return (
      linkMenu && (
        <NavLink key={originalId || i} link={sectionName} name={linkName} />
      )
    )
  })
  return (
    <nav
      ref={navElement}
      onScroll={handleScroll}
      className="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5"
    >
      <a href="/#" className="navbar-brand ml-lg-3">
        <h1 className="m-0 display-5">
          <span className="text-primary">{name}</span>{lastname}
        </h1>
      </a>
      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse px-lg-3" id="navbarCollapse">
        <div className="navbar-nav m-auto py-0">{navItems}</div>
        <a
          href="/#contact"
          className="btn btn-outline-primary d-none d-lg-block"
        >
          {buttonText}
        </a>
      </div>
    </nav>
  )
}

export default Navigation
