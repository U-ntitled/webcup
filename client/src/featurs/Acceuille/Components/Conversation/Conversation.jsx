import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../../assets/logo.svg'
import FilterListIcon from '@mui/icons-material/FilterList';
import './style.css'

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
            <h1 className='flex justify-center items-center gap-2 mb-7 h3'>
                <span>
                    <img src={logo} alt='logo'/>
                </span>
                LOGO
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
        <section className='w-[76%] RIGHT_SECTION'>

            {/* ------ICON HEADER------ */}
              <div className=' flex mt-2 m-20 mb-10 mr-10 justify-end p-5'>
                   <img className='p-3' src='' alt='icon notificcation' />
                   <div className='p-3'>
                        A
                   </div>
              </div>


            {/* SECTION MESSAGE */}
              <div>
                
                <div>
                  
                    {/* ------SECTION CHAT------ */}
                  <div className='right_chat_body'>
                    <div className='chat_block_a'>
                        <div className='photo_profile'>
                          A
                        </div>
                        <p className='message_boxA'>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolor ab expedita assumenda natus est doloremque dicta sed cum sequi necessitatibus, consequuntur perspiciatis nisi architecto distinctio laudantium reprehenderit rerum eligendi.
                       </p>
                    </div>

                    <div className='chat_block_b'>
                        <div className='photo_profile'>
                           B
                        </div>
                        <p className='message_boxB'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus odio corporis ullam error, quo sit dolore illum rem, ipsum dolores quaerat nesciunt eius libero, fugiat magni vero quae ratione.
                        </p>
                    </div>
                  </div>
                </div>
                
                {/* BOTTOM INPUT FORM BAR */}
                  <div className='right_chat_input'>
                      <form>
                           <input type='textarea' />
                           <span className='right_chat_send_button'>
                                Send
                           </span>
                           <img src='' alt='icon de microphone'/>
                      </form>
                  </div>
                  
              </div>
        </section>
    </main>
  )
}

export default Conversation



