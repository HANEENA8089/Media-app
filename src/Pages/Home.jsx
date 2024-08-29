import React, { useState } from 'react'
import Add from "../Components/Add"
import { Link } from 'react-router-dom'
import View from "../Components/View"
import Category from "../Components/Category"

function Home() {

  const [uploadVideoResponse,setUploadVideoResponse]=useState({})
  const [dropVideoResponse,setdropvideoResponse]=useState({})
  return (
    <>
      <div className="container mt-3 mb-3 d-flex justify-content-between">
        <div className='add-videos'>
          <Add setUploadVideoResponse={setUploadVideoResponse}/>
        </div>

        <Link to={'/watch-history'} style={{textDecoration:'none',color:'blueviolet',fontSize:'30px'}}>Watch-History       <i className="fa-solid fa-arrow-right-from-bracket fa-beat fa-1x mb-2"></i>
        </Link>
      </div>

      <div className="container-fluid mt-5 mb-3 row">
        <div className="all-videos col-lg-9">
          <h2>All-Videos</h2>
          <View uploadVideoResponse={uploadVideoResponse} setdropvideoResponse={setdropvideoResponse}/>
        </div>
        <div className="category col-lg-3">
          <Category dropVideoResponse={dropVideoResponse}/>
        </div>
      </div>
    </>
  )
}

export default Home
