import heroImage from '../images/heroImage.png'
import '../css/MainSection.css'
import { SwitchCamera, DownloadCloud, UserPen } from 'lucide-react';
import {Button} from "@nextui-org/react";
import AOS from 'aos';
import React, { useState } from 'react';

import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Skills from './Skills';
import { DownloadOutlined } from '@ant-design/icons';
import Contact from './Contact';

const MainSection = (reg, res) =>{
    const [size, setSize] = useState('large'); // default is 'middle'

    // uesEffect for AOS
    useEffect(()=>{
        AOS.init();
    },[]);
    return(
        <div>
            <div className='items-center gap-5 justify-center flex'>
                <div>
                    <h1
                     data-aos="fade-right"
                     data-aos-easing="linear"
                     data-aos-duration="1500"
                    className='text-orange-800 font-semibold'>My name is Emmanuel Oppong Coffie
                    </h1>
                    <h1 className='w-3/4 font-bold text-blue-800 text-5xl'>I am a FrontEnd Developer from Ghana</h1>
                    <div className='flex gap-48 mt-5'>
                        <Button>      
                            <UserPen />
                            Contact Me
                            </Button>
                        <Button>
                        <DownloadCloud />
                            Download CV
                            </Button>
                    </div>
                    
                </div>
                <div
                 data-aos="zoom-in-left"
                 data-aos-easing="linear"
                 data-aos-duration="1500">
                    <img id='heroimage' className='w-4/5' src={heroImage}/>
                </div>
            </div>

            {/* second section */}
            <div className='mt-10 mx-32 px-32 py-5 shadow-red-900 rounded shadow-xl grid grid-cols-3 bg-red-200 gap-20'>
            <div 
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
             className='flex flex-col justify-center items-center border-r-2 border-red-600'>
            <SwitchCamera color='orangered'/>
                    <h1 className='my-4 font-bold text-xl'>FrontEnd Developer</h1>
                    <p>
                         applications, and we will improve components experience
                         some great Third-Party Libraries additionally.
                    </p>
                </div>
            <div 
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
             className='flex flex-col justify-center items-center border-r-2 border-red-600'>
            <SwitchCamera color='orangered'/>
                    <h1 className='my-4 font-bold text-xl'>FrontEnd Developer</h1>
                    <p>
                         applications, and we will improve components experience
                         some great Third-Party Libraries additionally.
                    </p>
                </div>
            <div 
             
             data-aos="fade-left"
             data-aos-easing="linear"
             data-aos-duration="1500"className='flex flex-col justify-center items-center'>
            <SwitchCamera color='orangered'/>
                    <h1 className='my-4 font-bold text-xl'>FrontEnd Developer</h1>
                    <p>
                         applications, and we will improve components experience
                         some great Third-Party Libraries additionally.
                    </p>
                </div>
               
            </div>

            <Skills />
            <div 
             data-aos="zoom-in"
             data-aos-easing="linear"
             data-aos-duration="3000"
             >
            < Contact />
            </div>
        </div>
    )
}

export default MainSection;