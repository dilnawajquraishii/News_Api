import React, { useEffect, useRef,useState } from 'react'
import { Link } from 'react-router-dom';

const Headline = (props) =>{
  const [value, setvalue] = useState([]);
  async function fetchheading(){
    let res= await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=6f49978b8e61488cab535d6b195611a9`)
    let data=await res.json()
    // console.log(data)
    setvalue(data.articles)
  }
  useEffect(()=>{
    fetchheading()
    // setvalue(data)
  },[])
  console.log(value)

  return (
    <div  className='head 'style={{background:'white',marginBlock:'30px'}}>
      {value.map((ele)=>{
// return <div><h5 style={{fontFamily:'arial'}}>{ele.content}</h5></div>
return    <Link to={ele.url} className="card mt-4 m-auto" style={{width: '20rem',height:'300px',borderRadius:'20px',border:'4px solid purple'}}>
<img className="card-img-top" src={ele.urlToImage} alt="Card image cap" style={{borderRadius:'10px',height:"230px"}} />
{/* author */}
<marquee behavior="" direction="Right"><h5 style={{color:'maroon',fontWeight:'bold',textAlign:'center'}}>{ele.author}</h5>
</marquee>
<h5 className='text-truncate' style={{color:'blue',textAlign:'center',fontSize:'17px'}}>{ele.title}</h5>

<div className="card-body class">
  <Link to="#" className="btn " style={{color:'white',background:'blue'}}>More News</Link>
</div>
{/* </div> */}
  
    </Link>
      })}
    </div>
  )
}

export default Headline
