import '../Styles/NavbarStyles.css';

const myFunction = (link:any) => {
    // var x = document.getElementById("myLinks");
    // if (x.style.display === "block") {
    //   x.style.display = "none";
    // } else {
    //   x.style.display = "block";
    // }
}



const TestNav = (link:any) => {
  return (
    <div>
      
      <div className="topnav">
  <a href="#home" className="active">Logo</a>

  <div id="myLinks">
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>    
<script>  
var link =  document.getElementById("myLinks");

</script>
  <a href="javascript:void(0);" className="icon" onClick={()=>myFunction(link)}>
    <i className="fa fa-bars"></i>
  </a>
</div>



    </div>
  )
}

export default TestNav
