import ProjectImg from "./assets/Images/projectImg.png";
import GitImg from "./assets/Images/github.png";
import GotoImg from "./assets/Images/GOTOL.png";
const Projects =()=>{
    return(
        <>
         <div className="mb-6 ms-24" id="projects"> 
        <h1 className="font-bold text-2xl text-sky-500 mb-3">PORTFOLIO</h1>
          <h2 className="font-bold text-3xl text-gray-700">Each project is a unique piece of development 🧩</h2>
           </div>
        <div className="md:ms-24 m-10 md:me-20  rounded-lg mb-6 bg-gray-40 shadow-2xl p-4">

       
           <div className="flex md:flex-row flex-col">
    <div className="group  border-4 shadow-2xl rounded-lg md:h-[32rem] md:w-[44rem]  overflow-hidden relative">
      <div
        className="  md:h-full md:w-full transform transition-transform duration-1000 md:group-hover:-translate-y-full group-hover:-translate-y-1/3"
        style={{ height: '100%', width: '100%' }}
      >
        <a target="_blank" href=" https://gauravsaini81.github.io/E-Commerce-The_CleanStylefashion/"> <img
          src={ProjectImg}
          alt="project Image"
         
        /></a>
       </div>
       </div>
       <div className="flex flex-col w-3/4 ms-12 me-20  ">
<h1 className="text-center pb-6 text-3xl text-gray-800 font-bold" >E-commerce Website</h1>
<h5 className="p-6 text-xl font-semi-bold text-gray-600">
A clothing e-commerce website is an online platform dedicated to the buying and selling of clothing items.
 It provides a virtual storefront where customers can browse, select, and purchase a wide range of apparel,
  footwear, and accessories. These websites typically offer an extensive collection of fashion products, catering
   to various styles, sizes, and preferences.</h5>
   
<div className="flex items-center justify-center pt-12">
<div className="bg-gray-50 shadow-2xl text-white font-bold py-2 px-4 rounded me-3  ">
  <h4 className="text-gray-700 text-xl font-bold">JavaScript</h4>
</div>
<div className="bg-gray-50 shadow-2xl text-white font-bold py-2 px-4 rounded ms-3">
  <h4 className="text-gray-700 text-xl font-bold"> Tailwind CSS</h4>
  
</div>
</div>

<div className="flex md:space-x-24 space-x-3   justify-center md:ps-12 ps-3 pt-20">
<a href="https://github.com/GauravSaini81/E-Commerce-The_CleanStylefashion">
<div className="flex items-center p-3 shadow-2xl ">
 
  <h3 className="text-xl font-bold me-3"> SOURCE CODE </h3>
  <img className="h-10 w-10 " src={GitImg} alt="" />
  
  
</div>
</a>
<a href=" https://gauravsaini81.github.io/E-Commerce-The_CleanStylefashion/">
<div className="flex items-center p-3 shadow-2xl ">
 
  <h3 className="text-xl font-bold me-3">LIVE DEMO </h3>
  <img className="h-10 w-10 md:p-0 p-2" src={GotoImg} alt="" />
 
  
</div>
</a>
</div>
     
     
       </div>
      
    </div>
    </div>
       
        </>
    );
};
export default Projects;