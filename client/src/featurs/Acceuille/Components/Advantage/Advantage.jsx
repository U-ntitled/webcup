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
        <div className=" flex justify-between items-center p-10">
            <div className="grid grid-cols-2 gap-y-8 gap-x-5 w-[45%] ">
                {
                    table.map((elem,key)=>(
                    <div key={key} className="bg-[#251B3C] flex flex-col justify-center items-center">
                        <div className=" bg-[#D9D9D9] "/>
                        <h3 className='h3 text-[#16F2F2] font-semibold'>{elem.title}</h3>
                        <p className='text-white font-Exo2'>
                            {elem.describe}
                        </p>
                    </div>
                    ))
                }
            </div>
            <div className="">
                <h2 className='h2 text-white font-bold'>
                    LOREM SIT DOLOR SIT DAK SUM LEE MI NOH 
                </h2>
            </div>
        </div>
    </div>
  )
}

export default Advantage