import 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { Search } from './'

const NavBar = () => {
  return (
    <header className='min-w-[1000px]'>
        <div className='flex bg-fakezon text-white h-[60px]'>
            <div className='flex items-center m-4'>
                <img className='h-[35px] w-[100px] m-2' src={"../images/amazon.png"}/>
                <div className='pr-4 pl-4'>
                    <div className='text-xs xl:text-sm'>Delivery to</div>
                    <div className='text-sm xl:text-base font-bold flex'><img className='h-[20px] w-[20px]' src={"../location.svg"}/>Hyderabad</div>
                </div>
            </div>
            <div className='flex grow relative items-center'><Search/></div>
            <div className='flex items-center m-4'>
                <div className='pr-4 pl-4'>
                    <div className='text-xs xl:text-sm'>Hello, sign in</div>
                    <div className='text-sm xl:text-base font-bold'>Accounts & Lists</div>
                </div>
                <div className='pr-4 pl-4'>
                    <div className='text-xs xl:text-sm'>Returns</div>
                    <div className='text-sm xl:text-base font-bold'>& Orders</div>
                </div>
                <div className='pr-3 pl-3 flex '>
                    <ShoppingCartIcon className='h-[38px] mt-2'/>
                    <div className='mt-7 text-xs xl:text-sm font-bold'>
                        Cart
                    </div>
                </div>
            </div>
        </div>
        <div className='flex bg-fakezon-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6'><div>Today's Deals</div><div>Customer Service</div><div>Registry</div><div>Gift Cards</div><div>Sell</div></div>
    </header>
  )
}

export default NavBar
