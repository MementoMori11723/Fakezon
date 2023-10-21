import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
const Search = () => {
  return (
    <div className='w-[100%]'>
      <div className='flex items-center h-10 bg-fakezon-yellow rounded'>
        <select className='p-2 bg-gray-300 h-10 w-[75px] text-black border rounded-l text-xs xl:text-sm'><option>All</option><option>Deals</option><option>Fakezon</option><option>Fashion</option><option>Computers</option><option>Home</option><option>Mobiles</option></select>
        <input className='flex grow items-center h-[100%] text-black' type="text"/>
        <button className='w-[45px]'><MagnifyingGlassIcon className='h-[22px] m-auto stroke-slate-900'/></button>
      </div>
    </div>
  )
}
export default Search