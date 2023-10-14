import LOGO from "../assets/AGNIA-LOGO.jpg"

const Footer = () => {

  return (
    <div className='flex flex-col space-y-10 p-6 mb-[5rem]'>
          <img src={LOGO} alt="LOGO" className="w-[6rem] rounded-md grid mx-auto" />
          <p className="grid mx-auto ">&#169; copyright all rights reserved.</p>
    </div>
  )
}

export default Footer