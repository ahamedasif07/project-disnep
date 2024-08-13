import logo from '../assets/img/Logos.png'
import { MdDone } from "react-icons/md";
import image from '../assets/img/Image.png'

const Footer = () => {
    return (
        <div>
         {/* chose your plan start*/}
         <section className='pb-12'>
            <div className="mt-28 grid justify-center pb-10 " >
                <h2 className="font-bold text-3xl grid justify-center">Choose Your Plan</h2>
                <p className="grid mt-1 text-center justify-center">Switch or cancel* anytime.</p>
                <div className='bg-[#2B2D37] mt-2 inline-block p-1 mx-auto rounded-full'>
                    <button className='bg-blue-600  px-3 py-2 rounded-full text-gray-200 uppercase '>Disney Bundle</button>Disney+<button></button>
                </div>
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
           <div className='grid justify-center text-center text-gray-400 mt-5'>
           <p>*Effective at the end of the billing </p>
            <p>period</p>
            <p>Terms apply</p>
           </div>
         </section>
         {/* chose your plan end*/}

         {/* watch you went section start */}
         <section className='grid py-14 justify-center'>
            <div className='md:flex px-8 justify-center grid gap-5'>
              <div className='md:w-1/2'>
              <figure className=' '>
                    <img className=' grid justify-center' src={image} alt="" />
                </figure>
              </div>
                <div className='md:w-1/2 grid justify-center pl-2'>
                    <h1 className='font-semibold text-4xl'>Watch the way you want</h1>
                    <li>Host virtual movie nights with GroupWatch. Pause, rewind, and react with up to six friends. To invite or be invited to join GroupWatch, subscription is required.</li>
                    <li>Download any movie or series and watch it on the go</li>
                    <li>Keep your family safe with easy parental controls.</li>
                    <li>An ever-growing range of titles in stunning 4K UHD and Dolby Atmos sound on compatible devices.</li>
                    <li>Stream on up to four devices at the same time.</li>
                </div>
            </div>
         </section>
         {/* watch you went section end */}

         {/* Frequently Asked Questions start */}
         <section>
            <div>
                <h2 className='text-2xl font-semibold text-center'>Frequently Asked Questions</h2>
            </div>
            <div>
            <section className=" dark:text-gray-400">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What is Disney+?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam taciti at adipiscing est. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How much does Disney+ cost?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What can I watch on Disney+?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Where can I watch Disney+??</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What is the Disney Bundle??</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
			</details>
		</div>
	</div>
</section>
            </div>
         </section>
         {/* Frequently Asked Questions end */}

         {/* section footer st */}
         <footer className="px-4 py-8 grid justify-center dark:text-gray-600">
            <div className='grid justify-center'>
            
	<div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
		<div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
			<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full ">
				
			
			</div>
			<ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
				<li>
					<a rel="noopener noreferrer" href="#">Terms of Use</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="#">Privacy</a>
				</li>
			</ul>
		</div>
		<ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
			<li>
				<a rel="noopener noreferrer" href="#">Instagram</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#">Facebook</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#">Twitter</a>
			</li>
		</ul>
	</div>
            </div>
</footer>
         {/* section footer end */}
            
        </div>
    );
};

export default Footer;