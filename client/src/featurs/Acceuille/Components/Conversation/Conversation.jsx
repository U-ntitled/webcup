import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../../assets/logo.svg'
import FilterListIcon from '@mui/icons-material/FilterList';
import SendIcon from '@mui/icons-material/Send';
import './style.css'
import MicIcon from '@mui/icons-material/Mic';

function Conversation() {
    const [questions, setQuestions] = useState([])
    const [dreamlist, setDreamList] = useState([
      'Dream List1',
      'Papayy Music',
      'Fc Barcelona Dream',
      'Dream List4',
      'Dream List5'
    ])
    useEffect( () =>
        async function fetchPreviousQuestions(){
             const results = await fetch('../../questionlist.json')
                   console.log(results)
                   if(results.data){
                        setQuestions(results.data)
                   }
        }
    )
  return (
    <main className=' flex w-[100%] h-[100vh] bg-[#09081A] text-white'>
        <aside className='flex-1 p-3 py-5 w-[20%] '>
            <h1 className='flex   gap-2 mb-7 text-[1.8rem]'>
                <span>
                    <img src={logo} alt='logo'/>
                </span>
                DREAMLAND
            </h1>
             <nav>
                <form>
                    <input 
                          type='search' 
                          name='q' 
                          placeholder='Search..'
                          className='p-3 bg-[#251B3C]  rounded-full border-none focus:outline-none'/>
                </form>
                <div className=" flex justify-start space-x-3">
                  <p>Filter</p>
                  <FilterListIcon />
                </div>
                <ul className='flex flex-col mt-5 text-center'>
                     {dreamlist.map((elem,key)=>(
                        <Link key={key} className=' pt-5 border-[#251B3C] pb-2 border-b' to='#'>{elem}</Link>
                     ))}   
                </ul>

             </nav>

        </aside>

        {/* ________MAIN CHAT________ */}
        <section className='w-[76%] h-[100%] RIGHT_SECTION'>

            {/* ------ICON HEADER------ */}
              <div className=' flex mt-2 m-20 mb-10  mr-10 justify-end p-5'>
                   <img className='p-3' src='' alt='icon notificcation' />
                   <div className='p-3'>
                        A
                   </div>
              </div>


            {/* SECTION MESSAGE */}
              <div className='flex flex-col  justify-end h-[80%]'>
                
                <div className=' h-[100%]'>
                  
                    {/* ------SECTION CHAT------ */}
                  <div className='right_chat_body'>
                    <div className="flex flex-row-reverse justify-start m-8">

                          <div className='photo_profile w-[3rem] h-[3rem] m-2  text-center rounded-full bg-slate-500'>
                            
                          </div>
                      <div className='chat_block_a  w-[60%] h-[40%] bg-[#2201be] p-5'>
                          <p className='message_boxA'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolor ab expedita assumenda natus est doloremque dicta sed cum sequi necessitatibus, consequuntur perspiciatis nisi architecto distinctio laudantium reprehenderit rerum eligendi.
                        </p>
                      </div>
                    </div>
                      <div className="flex flex-row justify-start">
                        <div className='photo_profile w-[3rem] h-[3rem] m-2  text-center rounded-full bg-slate-500'>
                            
                        </div>
                        <div className='chat_block_b bg-[#2d2149] w-[60%] h-[40%] p-5'>
                            <p className='message_boxB'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur. A repellendus odio corporis ullam error, quo sit dolore illum rem, ipsum dolores quaerat nesciunt eius libero, fugiat magni vero quae ratione.
                            </p>
                        </div>

                      </div>
                  </div>
                </div>
                
                {/* BOTTOM INPUT FORM BAR */}
                  <div className='right_chat_input h-[100%]'>
                      <form className='flex flex-row  items-end h-[100%]'>
                           <input type='textarea' className='rounded-3xl send w-[55%] h-[12%] p-5'/>
                           <div className="flex flex-row justify-between w-[5%] pl-3 py-[.55rem] space-x-5">
                              <div className="">
                                <MicIcon sx={{fontSize:"2rem", color:"#25C2F0"}}/>
                              </div>
                              <div className="">
                                <SendIcon sx={{fontSize:"2rem", color:"#25C2F0"}}/>
                              </div>
                           </div>
                      </form>
                  </div>
                  
              </div>
        </section>
    </main>
  )
}

export default Conversation



