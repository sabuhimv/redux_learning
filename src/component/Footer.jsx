import React, { useState, useDispatch } from 'react'
import { useSelector } from 'react-redux'
import { setDarkMode, setLanguage } from '../redux/features/ThemeAndLang/site'

const Footer = () => {
    // const dispatch = useDispatch()


    // const { dark, language } = useSelector(state => state.site)
    // const languages = ['tr', 'en']

    // const handleLang = (lang) => {
    //     dispatch(setLanguage(lang))
    // } 



    return (
        <div>
            footer
            {/* <div>
                {languages.map((lang, index) => (
                    <button onClick={() => handleLang(lang)} className={lang == language ? 'active' : ''} key={index}>{lang}</button>

                ))}
            </div>

            <div>
                <button onClick={() => dispatch(setDarkMode())}>
                    {dark ? 'Lighta kech' : 'Darka kech'}
                </button>
            </div> */}
        </div>
    )
}

export default Footer