import img from '../assets/images/intro.jpg'

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex flex-col lg:flex-row mt-8 gap-5'>
                <div className='flex-1 space-y-3'>
                    <p className='text-4xl lg:text-7xl font-bold'>We work for <br /> client satisfaction</p>
                    <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, distinctio. Expedita ab
                         reprehenderit molestias animi porro harum, praesentium dolorem possimus fugiat 
                         perspiciatis illum commodi? Repudiandae neque ipsam porro sit! Eum?</p>
                    <div className= ''>
                        <button className='btn btn-info mr-9'>Book a service</button>
                        <button className='btn btn-success'>Read More</button>
                    </div>
                </div>

                <div className='flex-1'>
                    <img className='rounded-lg w-full' src={img} alt="Intro" />
                </div>
            </div>
        </div>
    );
};

export default Home;
