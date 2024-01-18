import LocationImG from "./assets/Images/map.png";
import GmailImG from "./assets/Images/gmail.png";




const Contact =()=>{
    return(<>
<div className="pt-28 ps-28 pb-12   " id="contact">
    <h3 className="pb-5 text-xl text-sky-500 font-bold">CONTACT</h3>
  <h2 className="pb-5 text-3xl text-gray-800 font-bold">Don't be shy! Hit me up! 👇</h2>
 
</div>
<div  className="flex md:flex-row md:items-start md:justify-start items-center justify-center flex-col ps-28">
<div className="flex items-center md:ps-5  pe-16 md:mb-0 mb-6">
    <img className="h-16 w-16" src={LocationImG} alt="" />
    <div className=" ps-6 flex flex-col">
    <h6>Location</h6>
    <h5>Dehradun , India</h5>
    </div>
    
    
    </div>
    <div className="flex items-center md:ps-16 ">
    <img className="h-16 w-16" src={GmailImG}alt="" />
    <div  className="ps-6 flex flex-col">
    <h6>Location</h6>
   <a href="mailto:gaurav8191@gmail.com">gaurav8191@gmail.com </a>
   </div>
   </div>
    
    </div>




    </>);
};
export default Contact;