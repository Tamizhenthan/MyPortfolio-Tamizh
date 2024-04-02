import Typeanime from "./Typeanime"
import Photo from './photo.jsx'
import './photoStyles.css';
import React, { useEffect } from 'react';
import Socials from './Socials.jsx'

function Intro()
{

    useEffect(() => {
        const fadeElements = document.getElementsByClassName('scrollFade');
    
        function scrollFade() {
          const viewportBottom = window.scrollY + window.innerHeight;
    
          for (let index = 0; index < fadeElements.length; index++) {
            const element = fadeElements[index];
            const rect = element.getBoundingClientRect();
    
            const elementFourth = rect.height / 4;
            const fadeInPoint = window.innerHeight - elementFourth;
            const fadeOutPoint = -(rect.height / 2);
    
            if (rect.top <= fadeInPoint) {
              element.classList.add('scrollFade--visible', 'scrollFade--animate');
              element.classList.remove('scrollFade--hidden');
            } else {
              element.classList.remove('scrollFade--visible');
              element.classList.add('scrollFade--hidden');
            }
    
            if (rect.top <= fadeOutPoint) {
              element.classList.remove('scrollFade--visible');
              element.classList.add('scrollFade--hidden');
            }
          }
        }
    
        document.addEventListener('scroll', scrollFade);
        window.addEventListener('resize', scrollFade);
    
        scrollFade();
    
        return () => {
          document.removeEventListener('scroll', scrollFade);
          window.removeEventListener('resize', scrollFade);
        };
      }, []);

    const style1 ={
      whiteSpace: 'pre-line',
      paddingLeft: "40px",
      fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontWeight:430,
      fontSize: "16px",
    }

    const style2 ={
        fontSize: "55px",
        fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        paddingLeft: "30px",
        paddingBottom :0,
    }

    const style3 ={
        paddingTop: 0,
        fontSize: "25px",
        fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        paddingLeft: "125px",
        fontWeight:530,
    }

    const butt={
      fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: "17px",
      fontWeight:600,
      borderRadius:"10px",
    }

    
    const i = `Hi, I'm a computer science student &  a creative developer 
               based in India. I'm very passionate & dedicated to my work. `;
    
    return(
        <>
        <div className="item scrollFade">
        <Socials/>
        <div className="intro">
            <h1 style={style2}>Tamizhenthan S  👋</h1>
            <p style={style3}>I am a  <Typeanime/></p>
            <div style={style1}>
              <span>{i}</span>
            </div>
            <div className="sayHello">
              <button style={butt}>Say Hello!</button>
            </div>
        </div>
        <div className="Photo"> 
        <Photo/>
        </div>
        </div>
        </>
    )
}

export default Intro