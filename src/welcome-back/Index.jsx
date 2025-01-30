import googleIcon from "../assets/flat-color-icons_google.svg";
import frame2 from "../assets/Frame (1).svg";
import frame3 from "../assets/Frame (2).svg";
import frame1 from "../assets/Frame.svg";
import logo from "../assets/Logo.png";
import facebookIcon from "../assets/logos_facebook.svg";

const WelcomeBack = () => {
  return (
    <div className="my-[72px] mx-6 flex flex-col items-center">
      {/* Logo */}
      <img className="w-[250px]" src={logo} alt="App Logo" />

      {/* Heading */}
      <div className="text-center mt-10 mb-[34px]">
        <h1 className="text-[#161616] text-[32px] font-semibold leading-[42px] font-inter">
          Welcome Back!
        </h1>
        <p className="text-[16px] font-normal leading-[140%] text-[#585858] font-inter">
          Already have an account? Log In now
        </p>
      </div>

      {/* Form */}

      {/* First Input Field */}
      <div className="relative w-[382px] md:w-[200px] ">
        {/* Icon inside input */}
        <img
          src={frame1}
          alt="email Icon"
          className="absolute left-[6.25%] w-5 top-1/2 transform -translate-y-1/2"
        />

        {/* Input Field */}
        <input
          type="email"
          placeholder="User name or email address"
          className="w-full h-[56px] pl-12 pr-4 text-[14px] font-normal leading-[22px] text-[#939393] font-inter text-left border border-[#D2D2D2] rounded-full bg-white focus:outline-none "
        />
      </div>

      {/* Second Input Field */}
      <div className="relative w-[382px] md:w-[452px] mt-6">
        {/* Icon inside input */}
        <img
          src={frame2}
          alt="password Icon"
          className="absolute left-[6.25%] top-1/2 transform -translate-y-1/2 w-5"
        />

        {/* Input Field */}
        <input
          type="password"
          placeholder="Enter password"
          className="w-full h-[56px] pl-12 pr-4 text-[14px] font-normal leading-[22px] text-[#939393] font-inter text-left border border-[#D2D2D2] rounded-full bg-white focus:outline-none"
        />

        {/* Second Icon */}
        <img
          src={frame3}
          alt="password visibility icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
        />
      </div>

      <div className="relative w-[334px] h-[21px] flex justify-between items-center mt-[10px] md:w-[409px] ">
        <div className="w-[140px] h-[21px] flex items-center gap-2">
          {/* Icon or Checkbox */}
          <input
            className="w-[16px] h-[16px] border border-[#161616]"
            type="checkbox"
            name="checkbox"
          />

          {/* Text */}
          <p className="w-[96px] text-[#161616] text-[14px] font-normal leading-[21px] font-inter text-left">
            Remember me
          </p>
        </div>

        {/* Forgot password? */}
        <div className="w-[119px] h-[21px] flex items-center gap-2">
          <p className="text-[#161616] text-[14px] font-normal leading-[21px] font-inter text-left">
            Forgot password?
          </p>
        </div>
      </div>

      {/* Log-in button */}
      <button className="mt-8 w-[382px] h-[56px] px-[10px] bg-gradient-to-r from-[#FFB800] to-[#FF7A00] rounded-full text-white text-[18px] font-medium leading-[30px] font-inter md:w-[452px] ">
        Log In
      </button>

      {/* Divider */}
      <div className="my-14 w-[388px] h-[21px] flex items-center gap-6">
        {/* Line 3 (First Line) */}
        <div className="w-[162px] border-t border-[#d2d2d2]"></div>

        {/* Text (Centered Text) */}
        <div className="w-[16px] h-[21px] flex items-center justify-start gap-[24px]">
          <p className="text-[#161616] text-[14px] font-normal leading-[21px] font-inter text-center">
            Or
          </p>
        </div>

        {/* Line 4 (Second Line) */}
        <div className="w-[162px] h-[0px] border-t border-[#d2d2d2]"></div>
      </div>

      {/* Log in with Google */}
      <button className="w-[382px] h-[56px] px-[24px] rounded-full border border-solid border-[#d2d2d2] flex items-center justify-center gap-2 md:w-[452px]">
        {/* Google Icon */}
        <img src={googleIcon} alt="Google Icon" className="w-[24px] h-[24px]" />

        {/* Log In Text */}
        <span className="text-[16px] font-inter text-[#272727] font-normal leading-[140%]">
          Log In with Google
        </span>
      </button>

      {/* Log in with Facebook */}
      <button className="mt-[18px] w-[382px] h-[56px] px-[24px] rounded-full border border-solid border-[#d2d2d2] flex items-center justify-center gap-2 md:w-[452px]">
        {/* Google Icon */}
        <img
          src={facebookIcon}
          alt="Facebook Icon"
          className="w-[24px] h-[24px]"
        />

        {/* Log In Text */}
        <span className="text-[16px] font-inter text-[#272727] font-normal leading-[140%]">
          Log In with Facebook
        </span>
      </button>

      <p className="mt-9 text-[16px] text-[#161616] font-inter font-medium leading-[19px]">
        Don’t have an account?{" "}
        <span className="bg-gradient-to-r from-[#FFB800] to-[#FF7A00] bg-clip-text text-transparent text-[16px] font-medium leading-[19px] font-inter underline">
          Sign up
        </span>
      </p>
    </div>
  );
};

export default WelcomeBack;
