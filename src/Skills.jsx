
import HtmlIMg from "./assets/Images/Html.png";
import CSSImg from "./assets/Images/css-icon.png";
import javaImg from "./assets/Images/Java.png";
import JavaScriptImg from "./assets/Images/javascript-programming-language-icon.png";
import ReactImg from "./assets/Images/react-js-icon.png";
import TailwindCSS from "./assets/Images/tailwind-css-icon.png";



const Skills =()=>{
    return(

<>
<div className="flex md:flex-row flex-col   md:p-28 p-12 items-center  content-center ">
<h1 className="font-semibold text-xl text-gray-600 items-center  content-center">Tech Stack <span className="ms-6 font-semibold text-xl text-gray-500">|</span></h1>
<div className="flex md:pt-0 pt-6 pb-6 items-center  content-center  transition duration-500 hover:scale-110">
    <img className="w-[5rem] h-auto ms-12 " src={HtmlIMg} alt="" />
    <img className="w-[5rem] h-auto" src={CSSImg} alt="" />
</div>
<div className="flex md:pt-0 pt-6 pb-6items-center  content-center  transition duration-500 hover:scale-110">
    <img className="w-[6rem] h-auto ms-12" src={JavaScriptImg} alt="" />
    <img className="w-[6rem] h-auto" src={ReactImg} alt="" />

</div>
<div className="flex md:pt-0 pt-6 pb-6 items-center  content-center transition duration-500 hover:scale-110">
    <img className="w-[6rem] h-auto ms-12" src={TailwindCSS} alt="" />
    <img className="w-[6rem] h-auto " src={javaImg} alt="" />
</div>
</div>
</>

    );
};
export default Skills;