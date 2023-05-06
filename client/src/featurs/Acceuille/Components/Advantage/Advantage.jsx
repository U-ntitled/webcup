import React from 'react'

function Advantage() {
    const table = [{
        title :'Title1',
        describe: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Possimus quo dolores quas, quis, ad commodi quos repudiandae consectetur quibusdam vitae accusamus nesciunt!'
    },
    {
        title :'Title2',
        describe: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Possimus quo dolores quas, quis, ad commodi quos repudiandae consectetur quibusdam vitae accusamus nesciunt!'
    },
    {
        title :'Title3',
        describe: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Possimus quo dolores quas, quis, ad commodi quos repudiandae consectetur quibusdam vitae accusamus nesciunt!'
    },
    {
        title :'Titl4',
        describe: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Possimus quo dolores quas, quis, ad commodi quos repudiandae consectetur quibusdam vitae accusamus nesciunt!'
    }

]
  return (
    <div className='bg-[#09081A]'>
        <div className=" flex justify-between p-10">
            <div className="grid grid-cols-2 gap-y-8 gap-x-5 w-[45%] ">
                {
                    table.map((elem,key)=>(
                    <div key={key} className="bg-[#251B3C] flex flex-col justify-center items-center p-6 text-center rounded-lg">
                        <div className=" bg-[#D9D9D9] h-20 w-36  "/>
                        <h3 className='h3 text-[#16F2F2] font-semibold'>{elem.title}</h3>
                        <p className='text-white font-Exo2 text-sm'>
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