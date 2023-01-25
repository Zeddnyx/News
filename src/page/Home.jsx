import { useEffect,useState } from 'react'

const key = 'GttouUsyGPZrqd1yxwb2r0SARAkUyn5u'

export default function Home() {

  const [datas, setDatas] = useState([])
  const [load, setLoad] = useState(false)

  let article = 'world'

  const api = async () => {
    setLoad(true)
    const api2 = await fetch(`https://api.nytimes.com/svc/topstories/v2/${article}.json?api-key=${key}`)
    const data = await api2.json()
    setDatas(data.results)
    console.log(datas.results)
    setLoad(false)
  }
  useEffect(() => {
    api()
  }, [])


  const Main = () => {
    return <div className='font-inter grid xl:w-[600px]'>
      <div className='h-80 my-5 bg-gray-500' >
      </div>

      <div className='grid gap-7 lg:grid-cols-2 pr-20 sm:pr-36 lg:w-full lg:pr-10 '>
        <h1 className='font-extrabold text-4xl'>{datas[9].title}</h1>
        <div>
          <p className='text-darkG mb-5 sm:pr-40 lg:pr-0'>{datas[9].abstract}</p>
          <button  className='h-12 w-40 bg-red font-bold text-white text-center py-3 hover:bg-black' type="button"><a href={datas[9].url}>READ MORE</a></button>
        </div>
      </div>
    </div>
  }
   
  const News = () => {
    return <article className='bg-darkB w-full px-5 py-5 text-white grid gap-5 lg:my-5 lg:w-[500px] h-[600px] overflow-x-auto'>
        <h2 className='font-extrabold text-4xl mb-5 text-orange'>New</h2>
        {datas.map((data, i) => {
          return <div key={i}>
            <a href={data.url } className='grid gap-2 border-b py-5'>
              <h3 className='font-extrabold text-white text-lg hover:text-orange'>{data.title}</h3>
              <p className='text-grayB text-sm'>{data.abstract}</p>
            </a>
          </div>
        })}
    </article>
  }

  const Recomend = () => {
    return <div className='grid gap-5 xl:grid-cols-3 xl:gap-96'>
      {datas.map((data, i) => {
        return <a href={data.url} className=' grid grid-cols-2 gap-4 h-60 xl:w-80'  key={i}>
          <div className='bg-grayB h-56 w- e'>
          </div>

          <div className='h-60 grid gap-3'>
            <h2 className='text-5xl font-extrabold text-grayB'>0{i}</h2>
            <h1 className='font-bold text-xl overflow-y-auto hover:text-red'>{data.title}</h1>
          </div>
        </a>
      })}
    </div>
  }

  // if the data that given from API its undefine butno errord try using loading
  return <section className='my-20'>
    {datas?.length > 0 
      ? (
        <div className='grid grid-cols-1 gap-20 xl:gap-40 xl:grid-cols-2'>
          <Main />
          <News />
          <Recomend />
        </div>
      ) : (
        <div className='my-40 mx-auto text-center text-lg'>
          Loading ...
        </div>
      )
    }
  </section>
}
