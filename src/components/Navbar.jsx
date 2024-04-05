import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = (props) => {
function handleClick(ans){
console.log(ans);
props.handleClick(ans)
}
  return (
    <div>
  <nav className="navbar navbar-expand-lg  " style={{background:'white',height:'50px',background:'red'}}>
  <div className="container-fluid ">
    <a className="navbar-brand" href="#" style={{color:'blue',fontWeight:'bold',fontSize:'25px',}}><img id='logo' src="https://as1.ftcdn.net/v2/jpg/02/87/78/24/1000_F_287782442_fdSmWmnTd4r6BRhySbxL9uPJbvneoubJ.jpg" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent link">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-danger">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" style={{color:'white',fontWeight:'bold',fontSize:'26px'}}>Home</Link>
        </li>
        <li  onClick={()=>handleClick('Cricket')} className="nav-item">
          <Link className="nav-link active" aria-current="India" to="" style={{color:'white',fontWeight:'bold',fontSize:'26px'}}>Cricket</Link>
        </li>
       
        <li onClick={()=>handleClick('India')} className="nav-item">
          <Link className="nav-link active" aria-current="page" to=""style={{color:'white',fontWeight:'bold',fontSize:'26px'}}>India</Link>
        </li>

        <li onClick={()=>handleClick('Entertainment')} className="nav-item">
          <Link className="nav-link active" aria-current="page" to="" style={{color:'white',fontWeight:'bold',fontSize:'26px'}}>Entertainment</Link>
        </li>
        <li  onClick={()=>handleClick('Politics')} className="nav-item">
          <Link className="nav-link active" aria-current="page" to="" style={{color:'white',fontWeight:'bold',fontSize:'26px'}}>Politics</Link>
        </li>
    
      </ul>
     
    </div>
  </div>
  
</nav>
{/* <marquee behavior="infinite" direction="right"><h1>Top Headline News World</h1></marquee> */}

    </div>
  )
}

export default Navbar
