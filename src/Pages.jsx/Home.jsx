import React, { useEffect, useState, useRef } from 'react'
import { searchRef } from 'react';
import { Link } from 'react-router-dom';
import Headline from '../Headline';

const Home = (props) => {

  const [value, setvalue] = useState([]);
  const [search, setsearch] = useState("cricket");
  let searchRef = useRef()
  async function fetchnews() {
    let res = await fetch(`https://newsapi.org/v2/everything?q=${props.ans ? props.ans : search}&apiKey=6f49978b8e61488cab535d6b195611a9 `)
    let data = await res.json()
    console.log(data)
    setvalue(data.articles) // after console

  }



  useEffect(() => {
    fetchnews()
  }, [search, props.ans])
  const handlesearch = (e) => {
    e.preventDefault();
    let searchvalue = searchRef.current.value
    setsearch(searchvalue)
    console.log(searchvalue)
  }

  return (
    <div className='ms-2  py-4' style={{ backgroundColor: "white" }}>
      <marquee behavior="infinite" direction="right"><h1 id='tophead'>Top International News</h1></marquee>

      <div className='mb-4' style={{ marginTop: "100px !important" }}>
        <form className="form  d-flex w-50  m-auto ">
          <input className="form-control mr-sm-2 text-center" type="search" placeholder="Search" aria-label="Search" style={{ borderRadius: '10px', fontWeight:'bold',border: '4px solid skyblue' }} />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={{ borderRadius: '10px', height:'45px',width:'100px', marginLeft: '10px',fontWeight:'bold' }}>Search</button>
        </form>
      </div>
      <div className=' container  d-flex m-auto ' style={{ marginLeft: '70px', marginBottom: '50px', background: 'white' }}>

        <div className='row row-cols-3 w-75 me-4'>
          {value.map((ele) => {
            return <div className="card mt-2 " style={{ borderRadius: '20px', border: '4px solid white' }}>
              <img className="card-img-top" src={ele.urlToImage} alt="Card image cap" style={{ borderRadius: '50%', height: '14rem' }} />
              {/* author */}
              <marquee behavior="" direction="Right"> <h5 style={{ color: 'maroon', fontWeight: 'bold', textAlign: 'center' }}>{ele.author}</h5>
              </marquee>
              <h5 className='text-truncate' style={{ color: 'blue', textAlign: 'center' }}>{ele.title}</h5>

              <div className="card-body class text-center ">
                <Link to="#" className="btn  " style={{borderRadius:'10px',color:'white',background:'red'}}>View Details News</Link>
              </div>


            </div>

          })}

        </div>

        {/* //  second-div */}
        <div className=" w-25 text-center main mt-4" style={{ color: 'red', overflowY: "hidden" }}>
          <div id=''>
            <h3 className='text-center  topHeadline ' style={{ color: 'yellow', fontWeight: 'bold', background: 'red', height: '' }}>Top Headline </h3>

            <div className='headline mt-5'>
              <Headline />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
