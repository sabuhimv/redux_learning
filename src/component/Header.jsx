import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {

    const {dark,language} = useSelector(state => state.site) 
    
    return (
    <div>
        header
        <nav>
            <Link to={'/'} className='active'>
                ANASAYFA
            </Link>
            <Link to={'/about'} className='active'>
                HAKKINDA
            </Link>
            <Link to={'/profile'} className='active'>
                PROFIL
            </Link>
        </nav>
        <div>
            dark mod = {dark ? 'var' : 'yox'} <br />
            movcud dil = {language}
        </div>
    </div>
  )
}

export default Header