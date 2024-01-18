import gitImg from "./assets/Images/github.png";
import LinkIn from "./assets/Images/linkedin.png";
const Footer =()=>{
    return(<>
<div className="bg-gray-700 ps-32 mt-24 pt-12 pb-12 " >
<div className=" flex items-center justify-between font-bold text-xl ">
<h3>Copyright © 2024. All rights are reserved</h3>
<div className="flex md:pe-32 pe-28">
    <a href="https://github.com/GauravSaini81" target="_blank"><img className="m-3 w-[2rem] h-[2rem]" src={gitImg} alt="Repositiory" /></a>
<a href="https://www.linkedin.com/in/gaurav-saini-248aaa223/" target="_blank"><img className=" m-3 w-[2rem] h-[2rem]" src={LinkIn} alt="social handle" /></a>

</div>
</div>
</div>

    </>);
    };
export default Footer;