import AboutIMG from "./assets/Images/Working.jpg";




const About =()=>{
    return (
        <>
        <div className=" flex md:flex-row flex-col md:p-28 p-12 items-center justify-center"id="about" >
      
      <img className="min-h-96 min-w-96  rounded-lg" src={AboutIMG} alt="About Section Image" />

     <div className="flex flex-col pt-6 md:ps-24 p-12 ">
     <h3 className="font-bold text-xl text-sky-500 pb-3">ABOUT ME</h3>
     <h4 className="font-bold text-3xl text-gray-800 pb-3">
     A dedicated Front-end Developer
        based in Dehradun, India 	&#127470;&#127475;

     </h4>
     <h6 className="font-semibold text-md text-gray-500 pb-3">As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, 
        CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive
         websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces
          through writing clean and optimized code and utilizing cutting-edge development tools and techniques.
           I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding
            web applications.</h6>
     </div>
     </div>
    
        </>
    );
};
export default About;