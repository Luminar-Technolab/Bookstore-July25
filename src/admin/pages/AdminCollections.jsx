import React, { useEffect, useState } from 'react'
import AdminHeader from "../components/AdminHeader";
import AdminSideBar from "../components/AdminSideBar";
import Footer from '../../components/Footer';
import { getAllAdminBooksAPI } from '../../services/allAPI';

function AdminCollections() {

  const[tab,setTab] = useState(1)
  const [allBooks,setAllBooks] = useState([])

  console.log(allBooks);
  
  useEffect(()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      if(tab == 1){
        getAllBooks(token)
      }
    }
  },[tab])

  const getAllBooks = async (token)=>{
     const reqHeader = {
      "Authorization":`Bearer ${token}`
    }
    const result = await getAllAdminBooksAPI(reqHeader)
    if(result.status==200){
      setAllBooks(result.data)
    }else {
      console.log(result);      
    }
  }

  return (
     <>
    <AdminHeader/>
    <div className='md:grid grid-cols-5' >
      <div className="col-span-1">
        <AdminSideBar/>
      </div>
      <div className='col-span-4 p-10'>
        <h1 className="my-5 text-center text-3xl font-bold">All Collections</h1>
        {/* tabs */}
        <div className="flex my-10 justify-center items-center">
            <p onClick={()=>setTab(1)} className={tab==1?"font-bold border-gray-200 text-xl border-t border-l border-r p-3 text-blue-600 cursor-pointer":"border-b font-bold border-gray-200 text-xl p-3"}>Books</p>
            <p onClick={()=>setTab(2)} className={tab==2?"font-bold border-gray-200 text-xl border-t border-l border-r p-3 text-blue-600 cursor-pointer":"border-b font-bold border-gray-200 text-xl p-3"}>Users</p>
        </div>
        {/* tab contents */}
        {
          tab==1 &&
          <div className='md:grid grid-cols-4 w-full my-5'>
             {/* duplicate book card */}
             {
              allBooks?.length>0 ?
                allBooks?.map(book=>(
                  <div key={book?._id} className="shadow rounded p-3 mx-4 mb-5 md:mb-0">
                    <img width={'300px'} height={'300px'}  src={book?.imageURL} alt="book" />
                    <div className="flex justify-center items-center flex-col mt-4">
                      <h3 className="text-blue-600 font-bold text-lg">{book?.author}</h3>
                      <h4 className='text-lg'>{book?.title}</h4>
                      <h4>$ {book?.discountPrice}</h4>
                      <div className='grid mt-3 w-full'>
                        <button className='bg-green-600 p-2 text-white'>APPROVE</button>
                      </div>
                    </div>
                  </div>
                ))
              :
              <p>Loading...</p>
             }
            
          </div>
        }
        {
          tab==2 && 
          <div className='md:grid grid-cols-3 w-full my-5'>
            {/* duplicate Users card */}
            <div className="rounded bg-gray-200 p-3 m-2 text-wrap">
              <p className="text-red-600 font-bold">ID : dr3ri3o9908</p>
              <div className="flex items-center  text-wrap mt-2">
                  {/* user image */}
                  <img width={'80px'} height={'80px'} style={{borderRadius:'50%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="user" />
                  {/* content */}
                  <div className='ms-5'>
                    <h4 className="font-bold text-2xl text-blue-800">name</h4>
                    <p>demo@gmail.com</p>
                  </div>
              </div>
            </div>
            
          </div>
        }
      </div>
      </div>
    <Footer/>
    </>
  )
}

export default AdminCollections