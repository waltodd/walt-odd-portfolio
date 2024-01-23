"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import { languageOptions } from '@/constants'


interface Language {
  value: string;
  label: string;
}

export const Header = () => {

  const [language, setLanguage] = useState<Language>(languageOptions[0]);
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const handleSelectLanguage = (lang:{value: string, label:string}) =>{
    setLanguage(lang)
    setIsToggled(!isToggled)
  }
  const handleToggle = () =>{
    setIsToggled(!isToggled)

  }
  return (
    <nav className='nav'>
      <div className='logo'>
        <Link href="/">
          walt-odd
        </Link>
      </div>
      <div className='language'>
        <div onClick={() =>handleToggle()}>{language.label}</div>

        {isToggled && (
          <div className='dropdown'>
          {languageOptions.map((lang, index) =>(
            <div className='dropdown-item' key={index} onClick={()=>handleSelectLanguage(lang)}>
              {lang.label}
            </div>
          ))}
          </div>
        )}
      </div>
    </nav>
  )
}
