import html from '../images/html.png'
import js from '../images/js.png'
import react from '../images/react.png'
import Bootstrap from '../images/Bootstrap.png'
import css from '../images/css.png'
import Tailwind  from '../images/Tailwind.png'
import node  from '../images/node.png'
import express  from '../images/express.png'
import mongodb  from '../images/mongodb.jpg'
import sql  from '../images/sql.jpg'
import { Divider, Tooltip  } from 'antd'
import React, { useMemo, useState } from 'react';

const text = <span>prompt text</span>;

const Skills = (req, res) =>{
    
    const [arrow, setArrow] = useState('Show');
  const mergedArrow = useMemo(() => {
    if (arrow === 'Hide') {
      return false;
    }
    if (arrow === 'Show') {
      return true;
    }
    return {
      pointAtCenter: true,
    };
  }, [arrow]);

    return(
        <div className="bg-slate-800">
            <h1 className='text-white text-center font-bold text-2xl pt-2 pb-16'>My Skills</h1>
            <div className='px-52 text-center'>
                <div className='flex gap-10 text-white text-xl font-bold justify-center'>
                <Tooltip placement="left" title='I have a strong proficiency in building and structuring web pages efficiently.' arrow={mergedArrow} color='blue'>
                    <div className='transition-all duration-700 ease-in-out bg-slate-700 text-white p-4 rounded-lg hover:bg-slate-900 hover:scale-105 hover:bg-slate-900 p-5 bg-slate-700 rounded'>
                        <img className='w-24 h-24 mb-7' src={html}/>
                        <h1>HTML</h1>
                    </div>
                    </Tooltip>
                    <Tooltip placement="top" color='blue' title='Im skilled in JavaScript for building dynamic web applications' arrow={mergedArrow}>
                    <div className="transition-all duration-700 ease-in-out bg-slate-700 text-white p-4 rounded-lg hover:bg-slate-900 hover:scale-105 hover:bg-slate-900 p-5 bg-slate-700 rounded">
                        <img className='w-24 h-24 mb-7' src={js}/>
                        <h1>js</h1>
                    </div>
                    </Tooltip>
                    <Tooltip placement="right" color='blue' title='Im proficient in CSS for styling and designing web pages.' arrow={mergedArrow}>
                    <div className="transition-all duration-700 ease-in-out bg-slate-700 text-white p-4 rounded-lg hover:bg-slate-900 hover:scale-105 hover:bg-slate-900 p-5 bg-slate-700 rounded">
                        <img className='w-24 h-24 mb-7' src={css}/>
                        <h1>CSS</h1>
                    </div>
                    </Tooltip>
                </div>

                <Divider />
                
                <div className='flex gap-5 text-white text-xl font-bold justify-center'>
                <Tooltip placement="left" color='blue' title='Im experienced in React for building efficient and interactive user interfaces.' arrow={mergedArrow}>
                    <div className="transition-all duration-700 ease-in-out bg-slate-700 text-white p-4 rounded-lg hover:bg-slate-900 hover:scale-105 hover:bg-slate-900 p-5 bg-slate-700 rounded">
                        <img className='w-24 h-24 mb-7' src={react}/>
                        <h1>React</h1>
                    </div>
                    </Tooltip>
                    <Tooltip placement="top" color='blue' title='Im proficient in using Bootstrap for responsive and mobile-first web design' arrow={mergedArrow}>
                    <div className="transition-all duration-700 ease-in-out bg-slate-700 text-white p-4 rounded-lg hover:bg-slate-900 hover:scale-105 hover:bg-slate-900 p-5 bg-slate-700 rounded">
                        <img className='w-24 h-24 mb-7' src={Bootstrap}/>
                        <h1>Bootsrap</h1>
                    </div>
                    </Tooltip>
                    <Tooltip placement="top" color='blue' title="I'm skilled in Tailwind CSS for creating fast, responsive, and custom-designed user interfaces." arrow={mergedArrow}>
                    <div className="transition-all duration-700 ease-in-out bg-slate-700 text-white p-4 rounded-lg hover:bg-slate-900 hover:scale-105 hover:bg-slate-900 p-5 bg-slate-700 rounded">
                        <img className='w-24 h-24 mb-7' src={Tailwind }/>
                        <h1>Tailwind </h1>
                    </div>
                    </Tooltip>

                    <Tooltip placement="top" color='blue' title='Im proficient in Node.js for building scalable, server-side applications.' arrow={mergedArrow}>
                    <div className="transition-all duration-700 ease-in-out bg-slate-700 text-white p-4 rounded-lg hover:bg-slate-900 hover:scale-105 hover:bg-slate-900 p-5 bg-slate-700 rounded">
                        <img className='w-24 h-24 mb-7' src={node}/>
                        <h1>Node</h1>
                    </div>
                    </Tooltip>
                    <Tooltip color='blue' placement="right" title="I'm experienced in using Express.js for building fast and robust web applications with Node.js" arrow={mergedArrow}>
                    <div className="transition-all duration-700 ease-in-out bg-slate-700 text-white p-4 rounded-lg hover:bg-slate-900 hover:scale-105 hover:bg-slate-900 p-5 bg-slate-700 rounded">
                        <img className='w-24 h-24 mb-7 rounded-full' src={express   }/>
                        <h1>Express</h1>
                    </div>
                    </Tooltip>
                </div>

                <Divider className='text-white'/>
                
                <div className='flex gap-24 text-white text-xl font-bold justify-center'>
                    <Tooltip color='blue' placement="left" title="Skilled in SQL for managing relational databases efficiently" arrow={mergedArrow}>
                        <div className="transition-all duration-700 ease-in-out bg-slate-700 text-white p-4 rounded-lg hover:bg-slate-900 hover:scale-105 hover:bg-slate-900 p-5 bg-slate-700 rounded">
                            <img className='w-24 h-24 mb-7' src={sql}/>
                            <h1>sql</h1>
                        </div>
                    </Tooltip>
                        <Tooltip color='blue' placement="right" title="Experienced in MongoDB for handling NoSQL databases with flexible schema design and efficient data management" arrow={mergedArrow}>
                    <div className="transition-all duration-700 ease-in-out bg-slate-700 text-white p-4 rounded-lg hover:bg-slate-900 hover:scale-105 hover:bg-slate-900 p-5 bg-slate-700 rounded">
                        <img className='w-24 h-24 mb-7' src={mongodb}/>
                        <h1>Mongodb</h1>
                    </div>
                    </Tooltip>
                </div>
              
            </div>
        </div>
    )
}



export default Skills;