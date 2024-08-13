import bgImage from '../assets/img/Background.jpg'
import disnep from '../assets/img/original 1.png'
import brandLogos from '../assets/img/Brand Logos.png'

const Header = () => {
    return (
        <header className=' '>
            <div  className="bg-cover h-[600px] bg-top  bg-center h-screen"
      style={{ backgroundImage: `url(${bgImage})` }}>
        <div className='flex  h-[600px] pb-10 justify-around items-center'>
           <div>
           <figure>
                <img className='mb-10 grid ' src={disnep} alt="disnep logo"  />
            </figure>
            <div className='flex  px-3 gap-4'>
            <button className='bg-blue-600 px-3 py-2 rounded-sm text-gray-200 uppercase '>get them both</button>
            <button className='bg-blue-600 px-3 py-2 rounded-sm text-gray-200 uppercase '>get all three</button>
            </div>
            <p className='pt-2 px-3 pb-1 text-gray-400'>All of these and more now streaming.
            </p>
            <p className='pb-2 px-3 text-gray-400 '>The Disney Bundle Duo Basic includes Disney+ (With Ads) and Hulu (With Ads). Terms Apply.</p>
             <img className='sm:w-full px-3 mt-2' src={brandLogos} alt=""  />
             <p className='py-2 px-3'> View All Plan Options</p>
           </div>
           <div>

           </div>
        </div>

            </div>
        </header>
    );
};

export default Header;