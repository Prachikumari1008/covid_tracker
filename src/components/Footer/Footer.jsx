import React from 'react';
import style from './Footer.module.css';

const Footer = () => {

    const Year = new Date();
    const FullYear = Year.getFullYear();

    return (

        <footer class={style.section__footer}>
            <div class={style.copyright}>
                <p>{`© ${FullYear} All Rights Reserved `}</p>
            </div>

            <div class={style.follow}>
                <div class={style.follow__icon}>
                      <a className={style.fab} href="https://github.com/Prachikumari1008" target="_newtab"><i className="fab fa-github-square"></i></a>
                 </div>
            </div> 

        </footer>


    )
}

export default Footer;