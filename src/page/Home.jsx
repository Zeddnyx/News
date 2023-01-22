import { useEffect,useState } from 'react'

const key = '371686652c2d4820b5caf9b8a161e109'

export default function Home() {

  const [datas, setDatas] = useState([])

  const api = async () => {
    const api2 = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${key}`)
    const data = await api2.json()
    const jsonnya = data.articles
    const numb = Math.floor(Math.random() * 9)
    setDatas(jsonnya)
  }
  useEffect(() => {
    api()
  }, [])

  return <section className='my-5'>
    <div className='grid gap-20 lg:gap-1 lg:grid-cols-2'>

     <div className='grid '>
        <div className='w-full h-60' >
          <img src={datas[0].urlToImage} alt={datas[0].title} />
        </div>

        <div className='grid gap-7 lg:grid-cols-2'>
          <h1 className='font-extrabold text-4xl'>{datas[0].title}</h1> 
          <div>
            <p className='text-darkG mb-5'>{datas[0].description}</p>
            <div className='h-12 w-40 bg-red font-bold text-white text-center py-3 '>
              <a href={datas[0].url}>READ MORE</a>
            </div>
          </div>
        </div>
     </div>

      <div className='bg-darkB w-full px-5 py-5 text-white grid gap-5'>

        <div>
          <h2 className='font-extrabold text-4xl mb-5 text-orange'>New</h2>
          <a href={datas[1].url } className='grid gap-2 border-b py-5'>
            <h3 className='font-extrabold text-white text-lg'>{datas[1].title}</h3>
            <p className='text-grayB'>{datas[1].description}</p>
          </a>
        </div>
        <div>
          <a href={datas[2].url } className='grid gap-2 border-b py-5'>
            <h3 className='font-extrabold text-white text-lg'>{datas[2].title}</h3>
            <p className='text-grayB'>{datas[2].description}</p>
          </a>
        </div>
        <div>
          <a href={datas[3].url } className='grid gap-2'>
            <h3 className='font-extrabold text-white text-lg'>{datas[3].title}</h3>
            <p className='text-grayB'>{datas[3].description}</p>
          </a>
        </div>
        
      </div>
    </div>
  </section>


}
