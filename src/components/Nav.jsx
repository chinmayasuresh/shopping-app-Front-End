import React from 'react'

const Nav = () => {
  return (
    <div>

<div>
<nav class="navbar navbar-expand-lg  bg-body-tertiary" data-bs-theme="danger">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><em><b>SHOPPING APP</b></em></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/"><b><em>ADD PRODUCT</em></b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/search"><b><em>SEARCH PRODUCT</em></b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/view"><b><em>VIEW PRODUCT</em></b></a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="/search"></a>
        </li>
       
       
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-warning" href="/search" type="submit">SIGNIN</button>
      </form>
    </div>
  </div>
</nav>










    </div>












    </div>
  )
}

export default Nav