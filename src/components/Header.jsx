import style from './Header.module.css'

import igniteLogo from '../img/ignite-logo.svg'


export function Header () {
    
    return (
        <header className={style.header}>
            <img src={ igniteLogo } alt='Logo do Ignite'/>
        </header>

    )
}