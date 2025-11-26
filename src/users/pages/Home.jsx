import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <Header/>
    <div>
      {/* landing part - search */}
      <div style={{height:'500px'}}  className='flex justify-center items-center flex-col bg-[url(/bg.jpg)] bg-cover bg-center text-white'>
        <div style={{height:'500px',backgroundColor:'rgba(0,0,0,0.5)'}}  className='w-full flex justify-center items-center flex-col '>
          <h1 className="text-5xl font-bold mb-2">Wonderful Gifts</h1>
          <p>Gift your family and friends a book</p>
          {/* seach */}
          <div className="mt-9 flex items-center">
            <input type="text" className="bg-white rounded-3xl text-black w-100 placeholder-gray-500 p-2" placeholder='Search Books Here'/>
            <button className='text-gray-500 ' style={{marginLeft:'-40px'}}><FaSearch /></button>
          </div>
        </div>
      </div>
      {/* new arrival */}
      <section className='md:px-40 p-5  my-5 flex flex-col justify-center items-center'>
        <h1 className="text-3xl font-bold">NEW ARRIVALS</h1>
        <h2 className="text-2xl">Explore Our Latest Collection</h2>
        {/* books row & col */}
        <div className="md:grid grid-cols-4 w-full mt-10">
          {/* duplicate book card div */}
            <div className="shadow rounded p-3 mx-4 mb-5 md:mb-0">
              <img width={'300px'} height={'300px'}  src="https://cdn11.bigcommerce.com/s-65f8qukrjx/images/stencil/500x659/products/6929/17271/Weir_Project_Hail_Mary_cover__95757.1680721262.jpg?c=1" alt="book" />
              <div className="flex justify-center items-center flex-col mt-4">
                <h3 className="text-blue-600 font-bold text-lg">Author</h3>
                <h4 className='text-lg'>title</h4>
                <h4>$ price</h4>
              </div>
            </div>
             {/* duplicate book card div */}
            <div className="shadow rounded p-3 mx-4">
              <img width={'300px'} height={'300px'}  src="https://cdn11.bigcommerce.com/s-65f8qukrjx/images/stencil/500x659/products/6929/17271/Weir_Project_Hail_Mary_cover__95757.1680721262.jpg?c=1" alt="book" />
              <div className="flex justify-center items-center flex-col mt-4">
                <h3 className="text-blue-600 font-bold text-lg">Author</h3>
                <h4 className='text-lg'>title</h4>
                <h4>$ price</h4>
              </div>
            </div>
             {/* duplicate book card div */}
            <div className="shadow rounded p-3 mx-4">
              <img width={'300px'} height={'300px'}  src="https://cdn11.bigcommerce.com/s-65f8qukrjx/images/stencil/500x659/products/6929/17271/Weir_Project_Hail_Mary_cover__95757.1680721262.jpg?c=1" alt="book" />
              <div className="flex justify-center items-center flex-col mt-4">
                <h3 className="text-blue-600 font-bold text-lg">Author</h3>
                <h4 className='text-lg'>title</h4>
                <h4>$ price</h4>
              </div>
            </div>
             {/* duplicate book card div */}
            <div className="shadow rounded p-3 mx-4">
              <img width={'300px'} height={'300px'}  src="https://cdn11.bigcommerce.com/s-65f8qukrjx/images/stencil/500x659/products/6929/17271/Weir_Project_Hail_Mary_cover__95757.1680721262.jpg?c=1" alt="book" />
              <div className="flex justify-center items-center flex-col mt-4">
                <h3 className="text-blue-600 font-bold text-lg">Author</h3>
                <h4 className='text-lg'>title</h4>
                <h4>$ price</h4>
              </div>
            </div>
        </div>
        {/* all books link */}
        <div className="text-center my-20">
          <Link to={'/books'} className="p-3 bg-black text-white ">Explore More...</Link>
        </div>
      </section>  
      {/* author */}
      <section className='md:px-40 p-5 my-5 md:grid grid-cols-2 items-center gap-10'>
          {/* author content */}
          <div className="text-center">
            <h1 className="text-2xl font-bold">FEATURED AUTHORS</h1>
            <h2 className="text-xl">Captivates With Every Word</h2>
            <p className='text-justify mt-9'>passionate writer, avid reader, and lifelong explorer of ideas. My journey as an author began with a simple thought — stories have the power to connect hearts, spark curiosity, and leave lasting impressions. Over the years, I’ve dedicated myself to creating books that inspire, entertain, and encourage readers of all ages to dream beyond boundaries.</p>

            <p className='text-justify mt-5'>My writing style blends emotion, creativity, and meaningful themes, often inspired by everyday moments, human experiences, and the beauty of possibility. Whether I’m crafting heartfelt characters, exploring mysterious plots, or sharing real-world insights, my goal remains the same: to give readers a story worth remembering.</p>
          </div>
          {/* autonr image */}
          <div className="p-5 flex justify-center items-center">
              <img className='w-full' src="https://images.squarespace-cdn.com/content/v1/64bfd6aa127fba0754a78d65/1690617601186-7MS4W32UWBXKFKZTCQ14/authorphotos5-1024x683.jpg" alt="author" />
          </div>
      </section>
      {/* testimony */}
      <section className='md:px-40 p-5  my-5 flex flex-col justify-center items-center'>
        <h1 className="text-3xl font-bold">TESTIMONIALS</h1>
        <h2 className="text-2xl">See What Others Are Saying</h2>
        <div className="my-10 flex justify-center items-center flex-col">
            {/* user image */}
            <img width={'200px'} height={'200px'} style={{borderRadius:'50%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg  " alt="user" />
            {/* feedback */}
            <p className='mt-5'>Lucas Alexander</p>
            <p className='text-justify mt-4'><span className='font-bold me-2'>“Amazing Collection and Easy Navigation!”</span> “I love how simple and smooth the shopping experience is. The categories, reviews, and recommendations helped me find exactly what I was looking for. I’ll definitely be back for more books! My order arrived earlier than expected and the packaging was perfect. The books were in excellent condition, and I even got a discount on my purchase. Highly recommended!”</p>
        </div>
      </section>  
    </div>
    <Footer/>
    </>
  )
}

export default Home