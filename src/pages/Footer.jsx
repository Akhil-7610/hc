// import { FaLinkedinIn } from "react-icons/fa";
// import { CaLogo, eagleLogo, logo } from "../assets";


const Footer = () => {
  return (
    <footer className="text-gray-700 bg-black pb-6 px-6 md:px-16 border-t-1 border-gray-500 p-8 text-white">
      {/* Main Sections */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between ">
        {/* Logo and Social */}
        <div className="flex flex-col items-center">
          {/* <img className="rounded w-30 md:w-45 mb-4 shadow-2xl  " src="" alt="ATLAS Logo" /> */}
         <span className="text-2xl font-bold"> Hardik Chhabra</span>

          {/* <div className="flex gap-1 text-xl font-bold" > 
            <a href="https://www.linkedin.com/in/atlas-chartered-support-a8a459380/" target="_blank" aria-label="LinkedIn" className="text-blue-700 hover:text-blue-800 flex "> LinkedIn :<FaLinkedinIn size={28} /></a>


          </div> */}
          {/* <div className="flex gap-4">
            <img className="rounded max-w-15 md:max-w-20 mt-5 mb-4 shadow-2xl " src={eagleLogo} alt="Garud Logo" />
            <img className="rounded max-w-15 md:max-w-20 mt-5 mb-4 shadow-2xl " src={CaLogo} alt="CA Logo" />
          </div> */}
        </div>

        {/* Products & Bedroom Sets */}
        {/* <div className="flex flex-col items-center " >
          <h4 className="text-base font-semibold mb-2 tracking-wider border-b-2 border-amber-600 ">Services</h4>
          <ul className="flex flex-col items-center text-s leading-8 ">
            <li>Global Outsourcing</li>
            <li>Auditing & Assurance</li>
            <li>Taxation & Consultancy</li>
            <li>Book-keeping & Accounting</li>
          </ul>
        </div> */}

        {/* Address & Contacts */}
        <div className="flex flex-col items-center">
          <h4 className="text-base font-semibold mb-2 tracking-wider border-b-2 border-amber-600">ADDRESS</h4>
          <div className="flex flex-col items-center">
            <p className="text-s text-white mb-2 uppercase flex flex-col items-center ">

              Sri Ganganagar (335001) <br /> <span>rajasthan, India </span>
            </p>
          </div>

          <h4 className="text-base font-semibold mb-1 mt-4 border-b-2 border-amber-600">CONTACT US</h4>
          <div className="flex flex-col items-center">
            <a href="tel:+918239553268" className="text-s mb-0.5  text-blue-600">+91 8290655122</a>
          </div>

          <h4 className="text-base font-semibold mb-1 mt-4 border-b-2 border-amber-600">E-MAIL ID</h4>
          <div className="flex flex-col items-center">
            <a className="text-s text-blue-600" href="" target="_blank">hardikchhabra@gmail.com</a>

            {/* <p className="text-s">atlaschartered@gmail.com</p>
            <p className="text-s">parasjain7014@gmail.com</p> */}
          </div>

          <h4 className="text-base font-semibold mb-1 mt-4 border-b-2 border-amber-600"> LinkedIn </h4>
          {/* <div className="flex gap-1 text-xl font-bold" >
            <a href="https://www.linkedin.com/in/atlas-chartered-support-a8a459380/" target="_blank" aria-label="LinkedIn" className="text-blue-700 hover:text-blue-800 flex "><FaLinkedinIn size={28} /></a>
          </div> */}
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-4 flex flex-col text-x md:flex-row text-center md:justify-between text-gray-400  gap-2">
        {/* <h2 className="text-center md:text-left mb-2 md:mb-0 sm:text-base md:text-lg lg:text-xl">
          Associated with CA Jain Paras & Company, Chartered Accountants, All work is carried out by them.
        </h2> */}
        <div >
          <span className="text-x hover:text-gray-100">Privacy Policy</span> | <span className="text-x hover:text-gray-100">Terms & Condition</span>
        </div>
        <div className="text-center md:text-right text-x hover:text-gray-100">
          Copyright © {new Date().getFullYear()} Hardik Chhabra
        </div>
      </div>
    </footer>
  );
};

export default Footer;


