import img from '/MeBR.jpg'
import img2 from '/MeR.jpg'

export const AboutMe = () => {
    return (
        <div>
            <div className="px-[100px] flex py-[80px]">
                <img src={img} alt="Me" className='h-auto w-[400px] brightness-[60%]' />
                <div className='right-[10%] max-w-[738px]'>
                    <div className='text-[68px] font-bold'>Михаил Зайцев.
                        <br />
                        Frontend-Developer.</div>
                    <br />
                    <span className='text-[18px] '>Занимаюсь Frontend-разработкой на React больше года. Есть опыт проектирования баз данных и Backend-разработки на Node.js. За это время успел попробовать обширный стек технологий.</span>
                </div>
            </div>

            <div className="px-[100px] flex py-[80px]">
               
                <div className='right-[10%] max-w-[738px]'>
                    <div className='text-[68px] font-bold'>Михаил Зайцев.
                        <br />
                        Frontend-Developer.</div>
                    <br />
                    <span className='text-[18px] '>Занимаюсь Frontend-разработкой на React больше года. Есть опыт проектирования баз данных и Backend-разработки на Node.js. За это время успел попробовать обширный стек технологий.</span>
                </div>
                <img src={img2} alt="Me" className='h-auto w-[400px] brightness-[80%]' />
            </div>

        </div>

    )
}

