import React, { useEffect } from 'react';


import P5Wrapper from 'react-p5-wrapper';
import './GuqinBackground.js'; 

import './style.css'; // 导入样式文件
import Backgroundimage2 from './backgroundimage2.png';
import Backgroundimage from './backgroundimage.jpeg';
import Loge from './LOGE.png';
import Detail1 from './detail1.png';
import Detail2 from './detail2.png';
import Detail3 from './detail3.png';
import Detail4 from './detail4.png';
import Detail5 from './detail5.png';
import Detail6 from './detail6.png';
import Fingering1 from './fingering1.png';
import Fingering2 from './fingering2.png';

import Music from './music.mp3';




function Guqin() {
    useEffect(() => {
        const animationElement = document.getElementById('canvasContainer1'); 
      }, []);

  return (
    <div>
      <title>GUQIN</title>
      <meta charSet="utf-8" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" type="text/css" href="style.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Liu+Jian+Mao+Cao&family=Rajdhani:wght@500&family=Roboto&display=swap"
        rel="stylesheet"
      />

      <div id="canvasContainer1"></div>

      

      <main>
            <div className="startpage">
            <img id="left-image" className="image" src={Backgroundimage2} alt="" />
            <img id="center-image" className="image" src={Backgroundimage} alt="" />
            <div className="BGM">
                <audio src={Music} autoplay loop controls></audio>
                </div>
            <img id="right-image" className="image" src={Loge} alt="" />
            </div>



            <div className="videoWords">
                <a><a name="pl">
                Pop Music Performance</a></a>
                <br />
                <a>流行乐演奏</a>
            </div>
            <div className="video">
                <iframe width="700" height="400" src="https://www.youtube.com/embed/h0AAFhx3RmA?si=mgVtbuCLCOMubEM_&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div className="introduction">
                <h5>The guqin (Chinese: 古琴) is a plucked seven-string Chinese musical instrument. It's over 3,000 years old, and has traditionally been favoured by scholars and literati as an instrument of great subtlety and refinement, as highlighted by the quote "a gentleman does not part with his qin or se without good reason,"as well as being associated with the ancient Chinese philosopher Confucius.  It is sometimes referred to by the Chinese as "the father of Chinese music" or "the instrument of the sages".  </h5>
            
                <h5>Since ancient times, "qin"(“琴”) has been its special reference, and it has been renamed Guqin since the 1920s in order to distinguish it from the piano (Chinese: Gang Qin)</h5>
                
                <h5>The qin is the most exalted musical instrument in ancient Chinese culture, ranking first among the four arts of "Qin, chess, calligraphy and painting"(琴棋书画).</h5>
                
                <h5>On 7 November 2003, UNESCO announced that the Chinese guqin was selected as an Intangible World Cultural Heritage. In 2006, guqin was listed in the List of National Non-material Cultural Heritage in China. In 2010, a Song period guqin was sold for $22 million, making it the most expensive musical instrument ever sold.</h5>
            </div>
            <div className="Introtitle">
                <h6>What's Guqin?</h6>
            </div>

            <div className="guqinDetails1">
                <img id="first-pic" className="image" src={Detail1}  alt="" />
                <img id="second-pic" className="image" src={Detail2}  alt="" />
                <img id="third-pic" className="image" src={Detail3}  alt="" />
                
            </div>
            <div className="guqinDetailsWords">
                <p>Construction 古琴结构</p>
            </div>
            <div className="guqinDetails2">
                <img id="forth-pic" className="image" src={Detail4}  alt="" />
                <img id="fifth-pic" className="image" src={Detail5}  alt="" />
                <img id="sixth-pic" className="image" src={Detail6}  alt="" />
            </div>

            <div className="guqinFingering">
                <img id="finger1" className="image" src={Fingering1}  alt="" />
                <img id="finger2" className="image" src={Fingering2}  alt="" />
            </div>
            <div className="guqinFingeringWords">
                <h7>Fingering</h7>
                <br />
                <br />
                <br />
                <h7>古琴指法</h7>
            </div>
        </main>

    </div>
  );
  
}




export default Guqin;
