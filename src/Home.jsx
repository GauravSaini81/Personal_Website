
import gitImg from "./assets/Images/github.png";
import LinkIn from "./assets/Images/linkedin.png";
import Profile from "./assets/Images/Photo-01.jpeg"
import MyComponent from "./AnimationText";
import Skills from "./Skills";

const Home =()=>{
    return(
<>
<div className=" w-full " id="home">
    <div className="  md:p-28 p-12  flex  flex-col-reverse  md:flex-row justify-center items-center   ">
<div className=" flex flex-col justify-center  ">



    <div className="font-bold text-4xl  ">
Hello I m , <br />
<span className=" font-bold text-7xl">Gaurav  <span className="text-sky-600">Saini</span></span>
</div>

<MyComponent />


<h3 className="font-semibold text-gray-500 text-xl  ">
Enthusiastic React developer, good at solving problems, and someone who enjoys development and  coding. Let's work together to make great things happen! &#x2728;
</h3>
<div className="flex">
    <a href="https://github.com/GauravSaini81" target="_blank"><img className="m-3 w-[2rem] h-[2rem]" src={gitImg} alt="Repositiory" /></a>
<a href="https://www.linkedin.com/in/gaurav-saini-248aaa223/" target="_blank"><img className=" m-3 w-[2rem] h-[2rem]" src={LinkIn} alt="social handle" /></a>


</div>
</div>
<span className=" md:w-32 w-3 h-full " ></span>
<div className="grow md:shrink-0 ">
    <img className="border rounded-full  md:h-[30rem]  shadow-2xl transform  transition duration-500 md:hover:scale-110" src={Profile} alt="Profile Picture" />
</div>
</div>
<Skills/>
</div>

</>

    )
};
export default Home;
