import logo from '../assets/img/Logos.png'
import { MdDone } from "react-icons/md";

const Footer = () => {
    return (
        <div>
         {/* chose your plan start*/}
         <section>
            <div className="mt-28 pb-10" >
                <h2 className="font-bold text-3xl grid justify-center">Choose Your Plan</h2>
                <p className="grid mt-1 text-center justify-center">Switch or cancel* anytime.</p>
            </div>
            <div className='grid lg:grid-cols-3 justify-around md:grid-cols-2 sm:grid-cols-1 px-6 gap-8'>
                <div className='border  border-gray-300 py-4 px-8'>
                    <div className='pb-10'>
                    <img src={logo} alt="" />
                    <h2>Duo Basic</h2>
                    <p>With Ads</p>
                    <div className='flex gap-2 items-center'>
                        <span className=''><MdDone></MdDone></span>
                    <p>Thousands of shows, movies, and Originals on Disney+ and Hulu</p>
                    </div>
                    </div>
                    <span className='block text-gray-400'> <strong>$ 9.99</strong>/month</span>
                    <button className='bg-blue-600 mt-2 px-4 py-2 rounded-sm text-gray-200 uppercase '>select</button>

                </div>
                <div className='border  border-gray-300 py-4 px-6'>
                    <div className='pb-10'>
                    <img src={logo} alt="" />
                    <h2>Duo Basic</h2>
                    <p>With Ads</p>
                    <div className='flex gap-2 items-center'>
                        <span className=''><MdDone></MdDone></span>
                    <p>Thousands of shows, movies, and Originals on Disney+ and Hulu</p>
                    </div>
                    </div>
                    <span className='block text-gray-400'> <strong>$ 9.99</strong>/month</span>
                    <button className='bg-blue-600 mt-2 px-4 py-2 rounded-sm text-gray-200 uppercase '>select</button>

                </div>
                <div className='border  border-gray-300 py-4 px-6'>
                    <div className='pb-10'>
                    <img src={logo} alt="" />
                    <h2>Duo Basic</h2>
                    <p>With Ads</p>
                    <div className='flex gap-2 items-center'>
                        <span className=''><MdDone></MdDone></span>
                    <p>Thousands of shows, movies, and Originals on Disney+ and Hulu</p>
                    </div>
                    </div>
                    <span className='block text-gray-400'> <strong>$ 9.99</strong>/month</span>
                    <button className='bg-blue-600 mt-2 px-4 py-2 rounded-sm text-gray-200 uppercase '>select</button>

                </div>
            </div>
         </section>
         {/* chose your plan end*/}
            
        </div>
    );
};

export default Footer;