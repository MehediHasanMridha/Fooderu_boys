import React from "react";
import Logo from "../assets/Logo.png";
import Rectangle127 from "../assets/Rectangle 127.jpg";
import Google from "../assets/Google.png";
import Facebook from "../assets/Facebook.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const SignUp = () => {
  return (
    <>
      <div className="flex w-screen h-screen ">
        <div className="relative w-screen h-screen  2xl:w-1/2 2xl:h-screen  ">
          <div
            className="absolute  w-[250px] h-[77.38px] top-[72px] left-[90px] 
        md:w-[235.61px] md:h-[72.93px] md:top-[191.32px] md:left-[275.19px]
        tb:w-[250px] tb:h-[77.38px] tb:top-[203px] tb:left-[292px]
        2xl:w-[250px] 2xl:h-[77.38px] 2xl:top-[118px] 2xl:left-[355px]
        
        
        "
            //style={{  height: "77.38px", top: "72px" }}
          >
            <img src={Logo} alt="Logo" className="" />
          </div>
          <div
            className="absolute flex-coloum 
          w-[382px] h-[68px] top-[189px] left-[24px] gap-[4px] 
          md:w-[452.37px] md:h-[61.77px] md:top-[301.58px] md:left-[166.81px] md:gap-[3.77px]
          tb:w-[480px] tb:h-[68px] tb:top-[320px] tb:left-[177px] tb:gap-[4px]
          2xl:w-[480px] 2xl:h-[68px] 2xl:top-[235px] 2xl:left-[240px] 2xl:gap-[4px]
          
          
          "
          >
            <div
              className="flex justify-center items-center 
            w-[382px] h-[42px] md:w-[452.37px] md:h-[40px]
            tb:w-[480px] tb:h-[42px] 2xl:w-[480px] 2xl:h-[42px]
            
            
            "
            >
              <p
                className="text-[32px] md:text-[30.16px] tb:text-[32px] 2xl:text-[32px]
              leading-[42px] md:leading-[39.58px] tb:leading-[42px] 2xl:leading-[42px]
              font-body font-semibold text-[#161616] "
              >
                Sign Up
              </p>
            </div>
            <div
              className="flex justify-center items-center w-[382px] h-[22px] 
             md:h-[18px] md:w-[452.37px] tb:w-[480px] tb:h-[22px] 2xl:w-[480px] 2xl:h-[22px]"
            >
              <p
                className="text-[16px] md:text-[15.08px] tb:text-[16px] 2xl:text-[16px]
              leading-[22.4px] md:leading-[18.25px] tb:leading-[22.4px] 2xl:leading-[22.4px]
              font-body text-[#585858] font-normal"
              >
                Don't have an account? Create now
              </p>
            </div>
          </div>

          <div
            className=" absolute justify-center items-center flex border-[#D2D2D2] w-[382px] h-[56px] top-[291px] left-[24px] border-[1px]  pt-[12px] pb-[12px] pl-[24px] pr-[24px] rounded-[100px] gap-[8px]
        md:w-[452.37px] md:h-[52.78px] md:top-[397.71px] md:left-[166.81px] md:border-[0.94px] md:pt-[11.31px] md:pb-[11.31px] md:pl-[22.62px] md:pr-[22.62px] md:rounded-[94.24px] md:gap-[7.54px]
        tb:w-[480px] tb:h-[56px] tb:top-[422px] tb:left-[177px] tb:border-[1px] tb:pt-[12px] tb:pb-[12px] tb:pl-[24px] tb:pr-[24px] tb:rounded-[100px] tb:gap-[8px]
        2xl:w-[480px] 2xl:h-[56px] 2xl:top-[337px] 2xl:left-[240px] 2xl:border-[1px] 2xl:pt-[12px] 2xl:pb-[12px] 2xl:pl-[24px] 2xl:pr-[24px] 2xl:rounded-[100px] 2xl:gap-[8px]"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className=" text-gray-400 h-[20px] w-[20px]
              md:h-[18.85px] md:w-[18.85px]
              tb:h-[20px] tb:w-[20px]
              2xl:h-[20px] 2xl:w-[20px]"
            />
            <input
              className=" font-body font-normal leading-[22px] md:leading-[20.73px] tb:leading-[22px]
              text-[14px] md:text-[13.19px] tb:text-[14px] 2xl:text-[14px]  w-[306px] h-[22px] 
              md:h-[21px] md:w-[380.75px]
              tb:h-[22px] tb:w-[404px]
              2xl:h-[22px] 2xl:w-[404px]"
              id="email"
              type="email"
              placeholder=" User name or email address"
            />
          </div>

          <div
            className=" absolute justify-center items-center flex border-[#D2D2D2] w-[382px] h-[56px] top-[371px] left-[24px] border-[1px]  pt-[12px] pb-[12px] pl-[24px] pr-[24px] rounded-[100px] gap-[8px]
        md:w-[452.37px] md:h-[52.78px] md:top-[473.11px] md:left-[166.81px] md:border-[0.94px] md:pt-[11.31px] md:pb-[11.31px] md:pl-[22.62px] md:pr-[22.62px] md:rounded-[94.24px] md:gap-[7.54px]
        tb:w-[480px] tb:h-[56px] tb:top-[502px] tb:left-[177px] tb:border-[1px] tb:pt-[12px] tb:pb-[12px] tb:pl-[24px] tb:pr-[24px] tb:rounded-[100px] tb:gap-[8px]
        2xl:w-[480px] 2xl:h-[56px] 2xl:top-[417px] 2xl:left-[240px] 2xl:border-[1px] 2xl:pt-[12px] 2xl:pb-[12px] 2xl:pl-[24px] 2xl:pr-[24px] 2xl:rounded-[100px] 2xl:gap-[8px]"
          >
            <FontAwesomeIcon
              icon={faLock}
              className=" text-gray-400 h-[20px] w-[20px]
              md:h-[18.85px] md:w-[18.85px]
              tb:h-[20px] tb:w-[20px]
              2xl:h-[20px] 2xl:w-[20px]"
            />
            <input
              className=" font-body font-normal leading-[22px] md:leading-[20.73px] tb:leading-[22px]
              text-[14px] md:text-[13.19px] tb:text-[14px] 2xl:text-[14px]  w-[274px] h-[22px] 
              md:h-[21px] md:w-[350.59px]
              tb:h-[22px] tb:w-[372px]
              2xl:h-[22px] 2xl:w-[372px]"
              id="password"
              type="password"
              placeholder=" Enter Password"
            />
            <FontAwesomeIcon
              icon={faEyeSlash}
              className=" text-gray-400 h-[20px] w-[20px]
              md:h-[18.85px] md:w-[18.85px]
              tb:h-[20px] tb:w-[20px]
              2xl:h-[20px] 2xl:w-[20px]"
            />
          </div>

          <div
            className="absolute flex items-center justify-between 
          w-[334px] h-[21px] top-[433px] left-[48px]
          md:w-[409.96px] md:h-[20px] md:top-[531.54px] md:left-[188.49px]
          tb:w-[435px] tb:h-[21px] tb:top-[564px] tb:left-[200px]
          2xl:w-[435px] 2xl:h-[21px] 2xl:top-[479px] 2xl:left-[263px]
          "
          >
            <div
              className="  flex items-center 
            w-[120px] h-[21px] gap-[8px]
            md:w-[113.62px] md:h-[20px] md:gap-[7.54px]
            tb:w-[120px] tb:h-[21px] tb:gap-[8px]
            2xl:w-[120px] 2xl:h-[21px] 
            "
            >
              <input
                type="checkbox"
                id="rememberMe"
                className=" text-blue-600 border-[#161616]  focus:ring-green-500
                h-[16px] w-[16px] rounded-[4px] border-[1px]
                md:h-[15.08px] md:w-[15.08px] md:rounded-[3.77px] md:border-[0.94px]
                tb:h-[16px] tb:w-[16px] tb:rounded-[4px] tb:border-[1px]
                2xl:h-[16px] 2xl:w-[16px] 2xl:rounded-[4px] 2xl:border-[1px]
                "
              />
              <label
                htmlFor="rememberMe"
                className=" text-[#161616] font-body font-medium 
              leading-[21px] text-[14px]
              md:leading-[19.79px] md:text-[13.19px]
              tb:leading-[21px] tb:text-[14px]"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className=" text-[#FFB800] md:text-[#2131F0]  underline hover:underline
              font-body font-normal 
              leading-[21px] text-[14px]
              md:leading-[19.79px] md:text-[13.19px]
              tb:leading-[21px] tb:text-[14px]
            
            "
            >
              Forgot password?
            </a>
          </div>
          <div className="absolute flex items-center justify-center bg-[#FFB800]
        w-[382px] h-[56px] top-[486px] left-[24px]  p-[10px] rounded-[100px] gap-[8px]
        md:w-[452.37px] md:h-[52.78px] md:top-[581.49px] md:left-[166.81px] md:p-[9.42px] md:rounded-[94.24px] md:gap-[9.42px]
        tb:w-[480px] tb:h-[56px] tb:top-[617px] tb:left[177px] tb:p-[10px]  tb:rounded-[100px] tb:gap-[10px]
        2xl:w-[480px] 2xl:h-[56px] 2xl:top-[532px] 2xl:left-[240px] 
          ">
            <button className="font-body font-medium  bg-[#FFB800] text-[#FFFFFF] 
            w-[53] h-[30px] leading-[30px] text-[18px]
            md:w-[50] md:h-[29px] md:leading-[28.27px] md:text-[16.96px]
            tb:w-[53] tb:h-[30px] tb:leading-[30px] tb:text-[18px]
            2xl:w-[53] 2xl:h-[26px] 2xl:leading-[26px] 2xl:text-[20px]
            
            
            ">
              Sign Up
            </button>
          </div>
          <div className=" absolute flex justify-between items-center
          
          w-[382px] h-[21px] top-[598px] left-[24px] gap[24px]
          md:w-[380.67px] md:h-[20px] md:top-[687.04px] md:left-[202.63px] md:gap[32.04px]
          tb:w-[404px] tb:h-[21px] tb:top-[729px] tb:left-[215px] tb:gap[34px]
          2xl:w-[404px] 2xl:h-[21px] 2xl:top-[644px] 2xl:left-[278px] 2xl:gap[34px] ">
            <div className=" h-0  border-[#D2D2D2]
            w-[159px] border-[1px]
            md:w-[150.79px] md:border-[0.94px]
            tb:w-[160px] tb:border-[1px]
            
            ">

            </div>
            <p className=" font-body font-normal 
            text-[14px] leading-[21px]
            md:text-[13.19px] md:leading-[19.79px]
            tb:text-[14px] tb:leading-[21px]" >Or</p>
            <div className=" h-0  border-[#D2D2D2]
            w-[159px] border-[1px]
            md:w-[150.79px] md:border-[0.94px]
            tb:w-[160px] tb:border-[1px]
            
            ">

            </div>
          </div>
        </div>
        <div className=" absolute justify-center items-center flex border-[#D2D2D2] w-[382px] h-[56px] top-[675px] left-[24px] border-[1px]  pt-[12px] pb-[12px] pl-[24px] pr-[24px] rounded-[100px] gap-[8px]
        md:w-[452.37px] md:h-[52.78px] md:top-[759.61px] md:left-[166.81px] md:border-[0.94px] md:pt-[11.31px] md:pb-[11.31px] md:pl-[22.62px] md:pr-[22.62px] md:rounded-[94.24px] md:gap-[7.54px]
        tb:w-[480px] tb:h-[56px] tb:top-[806px] tb:left-[177px] tb:border-[1px] tb:pt-[12px] tb:pb-[12px] tb:pl-[24px] tb:pr-[24px] tb:rounded-[100px] tb:gap-[8px]
        2xl:w-[480px] 2xl:h-[56px] 2xl:top-[721px] 2xl:left-[240px] 2xl:border-[1px] 2xl:pt-[12px] 2xl:pb-[12px] 2xl:pl-[24px] 2xl:pr-[24px] 2xl:rounded-[100px] 2xl:gap-[8px]"
        >
          
          <img src={Google} alt="Google Photo" className=" h-[24px] w-[24px] " />
          <button className="text-[#272727] font-body font-normal 
              w-[142px] h-[22px] leading-[21px] text-[14px]
              md:w-[134px] md:h-[18px] md:leading-[19.79px] md:text-[13.19px]
              tb:w-[142px] tb:h-[22px] tb:leading-[21px] tb:text-[14px] ">
            Log in with Google
          </button>

        </div>
        <div className=" absolute justify-center items-center flex border-[#D2D2D2] w-[382px] h-[56px] top-[749px] left-[24px] border-[1px]  pt-[12px] pb-[12px] pl-[24px] pr-[24px] rounded-[100px] gap-[8px]
        md:w-[452.37px] md:h-[52.78px] md:top-[829.35px] md:left-[166.81px] md:border-[0.94px] md:pt-[11.31px] md:pb-[11.31px] md:pl-[22.62px] md:pr-[22.62px] md:rounded-[94.24px] md:gap-[7.54px]
        tb:w-[480px] tb:h-[56px] tb:top-[880px] tb:left-[177px] tb:border-[1px] tb:pt-[12px] tb:pb-[12px] tb:pl-[24px] tb:pr-[24px] tb:rounded-[100px] tb:gap-[8px]
        2xl:w-[480px] 2xl:h-[56px] 2xl:top-[795px] 2xl:left-[240px] 2xl:border-[1px] 2xl:pt-[12px] 2xl:pb-[12px] 2xl:pl-[24px] 2xl:pr-[24px] 2xl:rounded-[100px] 2xl:gap-[8px]"
        >
          
          <img src={Facebook} alt="Facebook Photo" className=" h-[24px] w-[24px] " />
          <button className="text-[#272727] font-body font-normal 
              w-[142px] h-[22px] leading-[21px] text-[14px]
              md:w-[134px] md:h-[18px] md:leading-[19.79px] md:text-[13.19px]
              tb:w-[142px] tb:h-[22px] tb:leading-[21px] tb:text-[14px] ">
            Log in with Facebook
          </button>

        </div>
        <div className="absolute flex items-center
          w-[245px] h-[19px] top-[841px] left-[93px] gap-[8px]
          md:w-[231.54px] md:h-[18px] md:top-[916.06px] md:left-[278.02px] md:gap-[7.54px]
          tb:w-[245px] tb:h-[19px] tb:top-[972px] tb:left-[295px] tb:gap-[8px]
          2xl:w-[245px] 2xl:h-[19px] 2xl:top-[887px] 2xl:left-[358px]
        
        
        ">
          <p className=" text-[#161616]
              font-body font-medium 
              leading-[19.36px] text-[16px]
              md:leading-[18.25px] md:text-[15.08px]
              tb:leading-[19.36px] tb:text-[16px]
          
          
          
          "> Already have an account?</p>
          <a href="link" className="text-[#FFB800] md:text-[#2131F0] underline hover:underline font-body font-medium
          leading-[19.36px] text-[16px]
              md:leading-[18.25px] md:text-[15.08px]
              tb:leading-[19.36px] tb:text-[16px]
          
          ">Log In</a>
        </div>
        <div className="fixed left-1/2 hidden 2xl:block 2xl:w-1/2 2xl:h-full 2xl:overflow-hidden ">
          <img
            src={Rectangle127}
            alt="Food image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
    </>
  );
};
export default SignUp;
