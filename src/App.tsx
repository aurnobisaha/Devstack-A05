import { Suspense } from 'react'

import Nav from './components/Nav'
import Banner from './components/Banner'
import Cards from './components/cards/cards'
//import Stack from './components/stack/stack';

import type { Icards } from './types/cards'

const cardsfetch = async (): Promise<Icards[]> => {
  const res = await fetch("/data.json")
  const data = await res.json()
  return data
}

function App() {

  //const [stack, setStack] = useState<Icards[]>([]);

  const cardspromise = cardsfetch()

  return (
    <>

      <Nav />
      <Banner />

      <div className='px-25'>
        <h1 className='text-4xl font-bold text-[#0F172A]'>
          Explore the{' '}
          <span className='bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>
            Technologies
          </span>
        </h1>

        <p className='text-[#64748B]'>
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <Suspense fallback={<h2>Loading.....</h2>}>

        <div className='grid grid-cols-4 gap-6 px-8'>

          {/* Technology Cards */}
          <div className='col-span-3'>
            <Cards
              cardspromise={cardspromise}
              // setStack={setStack}
            />
          </div>


          
          <div className='bg-white rounded-2xl border border-slate-200 p-5 mt-8 h-50'>

            <h2 className='text-2xl font-bold text-[#0F172A]'>
              Your Stack
            </h2>

            <p className='text-[#64748B] mt-1'>
              No technologies selected yet.
            </p>

            <div className='border border-dashed border-[#CBD5E1] rounded-xl h-15  mt-4 flex items-center justify-center'>

              <p className='text-[#94A3B8]'>
                Your stack is empty.
              </p>

            </div>

          </div>

        </div>

      </Suspense>

    </>
  )
}

export default App