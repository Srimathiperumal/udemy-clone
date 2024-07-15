function Navbar()
{
    return(
<div class="navbar">

<link rel={"stylesheet"}href={"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"}
    integrity={"sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="}
    crossorigin={"anonymous" }referrerpolicy={"no-referrer" }></link>
<div class="navbar__s1">
    <h1 class="navbar__s1__title">Udemy</h1>
</div>
<div class="navbar__s2">
    <i class="fa-solid fa-magnifying-glass" style={{color: "#121013;"}}></i>
    <input placeholder="search for anything here, Teach, Business, Art..."></input>
</div>
<div class="navbar__s3">
    <p> courses</p>
    <p>My learning</p> 
    <div class="mylearning">
       {/* <p>my learning</p>   */}
        <div class="mylearing__popup"> 
            <p>You did not purchase anything yet</p>

        </div>
    </div>
    <i class="fa-solid fa-cart-shopping" style={{color: "#121013;"}}></i>
    <i class="fa-solid fa-bell" style={{color: "#121013;"}}></i>
    <i class="fa-solid fa-user" style={{color: "#121013;"}}></i>

</div>
<div class="navbar__s4">
    <i class="fa-solid fa-bars"></i> </div>
</div>
    )
}

export default Navbar