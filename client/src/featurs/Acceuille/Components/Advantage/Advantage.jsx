import React from 'react'
import Diversity1Icon from '@mui/icons-material/Diversity1';
import DatasetIcon from '@mui/icons-material/Dataset';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import NightsStayIcon from '@mui/icons-material/NightsStay';

function Advantage() {
    const table = [{
        title :'Friendly',
        describe: 'Onirix is a friendly AI. It offers you a better experience while telling it your dreams',
        icon:<Diversity1Icon sx={{fontSize:"70px", color:"#DDD"}}/>
    },
    {
        title :'Powerful Dataset',
        describe: 'Onirix has a very strong Dataset so that it will be well-trained and will have a lot of performance',
        icon:<DatasetIcon sx={{fontSize:"70px", color:"#DDD"}}/>
    },
    {
        title :'Available to everyone',
        describe: 'Onirix has a free and premium edition. Both are satisfying. The premium edition is available at a great price and is very promising',
        icon:<AccessibilityNewIcon sx={{fontSize:"70px", color:"#DDD"}}/>
    },
    {
        title :'Dreamscape',
        describe: 'Onirix will guide you while traveling across the dreamland ',
        icon:<NightsStayIcon sx={{fontSize:"70px", color:"#DDD"}}/>
    }

]
  return (
    <div className='bg-[#09081A]'>
        <div className=" flex justify-between p-10">
            <div className="grid grid-cols-2 gap-y-8 gap-x-5 w-[45%] ">
                {
                    table.map((elem,key)=>(
                    <div key={key} className="bg-[#251B3C] flex flex-col justify-center items-center w-[70%] p-6 text-center rounded-lg">
                        {elem.icon}
                        <h3 className='h3 text-[#16F2F2] font-Exo2 font-semibold adv-title'>{elem.title}</h3>
                        <p className='adv text-white font-Exo2 text-sm pb-4'>
                            {elem.describe}
                        </p>
                    </div>
                    ))
                }
            </div>
            <div className="w-[50%] flex flex-col justify-between   ">
                <div className=" flex flex-col space-y-5">
                    <h2 className='h2 text-white font-bold'>
                        LOREM SIT DOLOR SIT DAK SUM LEE MI NOH 
                    </h2>
                    <p className='text-white font-Exo2'>
                        Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, 
                        ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent
                         per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                    </p>
                    <button className='flex justify-center items-center h-[6vh] w-[16vw] font-Exo2 bg-[#C525EA] text-white font-bold'>
                        TRY IT FO FREE 
                    </button>
                </div>
                <div className="flex space-y-3 flex-col">
                    <h3 className='h3 text-white' >Follow us:</h3>
                    <div className=" flex space-x-2">
                        <div className="bg-[#C525EA] rounded-full w-8 h-8"></div>
                        <div className="bg-[#C525EA] rounded-full w-8 h-8"></div>
                        <div className="bg-[#C525EA] rounded-full w-8 h-8"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Advantage