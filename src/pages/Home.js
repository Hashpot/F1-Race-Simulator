import {useState} from 'react'
import { useNavigate, createSearchParams } from 'react-router-dom'
import { useRaces } from '../hooks/useRaces'
import { useSeasons } from '../hooks/useSeasons'


function Home() {
    const {seasons} = useSeasons()
    const [yearSelected, setYearSelected] = useState(new Date().getFullYear().toString())
    const {circuits} = useRaces(yearSelected)
    const navigate = useNavigate()

    let raceSelected = ''

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        if (yearSelected && raceSelected)
            navigate({
                pathname:'/view',
                search: `?${createSearchParams({year:yearSelected,race:raceSelected})}`
            })
        else
            alert('Please, select a race')
        
    }


    return (
        <div className='grid place-content-center bg-red-800 text-white h-screen w-screen overflow-auto' style={{backgroundColor: '#171730'}}>
        <div className='flex flex-col items-center justify-center h-full'>
            <div className='w-96 space-y-3 text-center'>
                <h1 className='text-6xl font-bold'>Race Simulator </h1>
            </div>
            
            {/* Race Selection Form */}
            <form className='flex flex-col pt-5 items-center space-y-10' onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row md:items-center md:space-x-4 w-full">
                    <label className='flex flex-col w-full md:w-auto'>
                        Select a year
                        <select className='w-full md:w-32 rounded-md px-3 py-2 text-center text-black' onChange={(e)=> {setYearSelected(e.target.value)}}>
                            {
                                seasons.map(year =>
                                    <option key={year} value={year}>{year}</option>
                                )
                            }
                        </select>
                    </label>
                    
                    <label className='flex flex-col w-full md:w-auto'>
                        Select a Race
                        <select className='w-full md:w-60 rounded-md px-3 py-2 text-center text-black' onChange={(e)=> {raceSelected = e.target.value}}>
                            {
                                circuits.map(circuit =>
                                    <option key={circuit.date} value={circuit.round}>{circuit.round}. {circuit.raceName}</option>    
                                )
                            }
                        </select>
                    </label>
                </div>
                
                <button type='submit' className='transition-all w-30 rounded-md px-4 py-3 bg-gradient-to-r from-indigo-900 to-violet-800 hover:scale-110 active:scale-100'>
                    Simulate Race
                </button>
                
            </form>
        </div>
    </div>
    
    
    
    )
}

export default Home
