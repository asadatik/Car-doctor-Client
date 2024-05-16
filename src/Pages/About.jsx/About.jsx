import man from '../../assets/images/about_us/person.jpg';
import part from '../../assets/images/about_us/parts.jpg';


const About = () => {
    return (
        <div className="my-10" >
              <div className="hero rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...  ">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative   '>
                   <img src={man} className="w-3/4 rounded-lg  shadow-2xl" />
                    <img src={part} className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-5 p-4'>
                    <h3 className='text-3xl text-orange-500 font-bold'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn btn-warning">Get More Info</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;