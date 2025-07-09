import registration_img from "../../assets/registration_food.png"
import logo from "../../assets/icons/Logo.svg"
import EmailIcon from "../../assets/icons/Frame.svg"
import Input from "../../shared-component/Input";
import passIcon from "../../assets/icons/pass.svg"
import Button from "../../shared-component/Button";
import { FacebookIcon, GoogleIcon } from "../../assets/icons/SVG";

const Registration = () => {
    return (
        // main container 
        <div className="flex justify-between  font-[inter] min-h-screen 2xl:max-h-screen">

            {/* text  content */}
            <div className="flex flex-col justify-center items-center xl:w-1/2 sm:w-[80%] sm:h-[80%] mx-auto my-auto">
                {/* logo  */}
                <img className="mx-auto shrink-0
                xl:w-[250px] xl:h-[77.068px] 
                md:w-[235.612px] md:h-[72.632px]
                " src={logo} alt="" />
                {/* sign up from  */}
                <form className="text-center">

                    <div className="my-[35px]">
                        {/* title  */}
                        <h2 className="
                    text-[#161616]  font-semibold
                      xl:text-[32px]  xl:leading-[42px] 
                      md:text-[30px]  md:leading-[39px] ">
                            Sign Up
                        </h2>
                        {/* subtitle */}
                        <p className="
                    text-[#585858]  font-normal
                    xl:text-[16px] xl:leading-[140%]
                    md:text-[15px] md:leading-normal">
                            Don;t have an account?  Create now
                        </p>
                    </div>

                    {/* input fields  */}
                    <div className="flex flex-col gap-6">
                        {/* email input field  */}
                        <Input
                            name={"Email Address"}
                            type={"email"}
                            icon={EmailIcon}
                        />
                        {/* password input field  */}

                        <Input
                            name={"Password"}
                            type={"password"}
                            icon={passIcon}
                        />

                        <div className="flex mx-auto justify-between items-center
                        xl:w-[435px] 
                        md:w-[409px]">
                            <label >
                                <input type="checkbox" className="mr-2" id="remember" />
                                <span className="text-center text-[#161616] font-normal 
                                xl:text-[14px] xl:leading-[21px]
                                md:text-[13px] md:leading-[19px]">Remember me</span>
                            </label>
                            <a className="text-center text-[#161616] font-normal 
                            xl:text-[14px] xl:leading-[21px]
                            md:text-[13px] md:leading-[19px]"
                                href="#">
                                Forgot password?
                            </a>
                        </div>

                    </div>
                    {/* sign up button  */}
                    <div className="mt-5">
                        <Button
                            name={"Sign Up"}
                            variant="Primary"
                            icon={""}
                        />
                    </div>

                </form>

                {/* divider  */}

                <div className="inline-flex items-center gap-[34px] my-14">
                    <div className="bg-[#D2D2D2] w-[160px] h-[1px]"> </div>
                    or
                    <div className="bg-[#D2D2D2] w-[160px] h-[1px]"></div>
                </div>



                {/* social buttons  */}
                <div className="flex flex-col gap-5">
                    <Button
                        name={"Log In with Google"}
                        variant="Social"
                        icon={<GoogleIcon />}
                    />
                    <Button
                        name={"Log In with Facebook"}
                        variant="Social"
                        icon={<FacebookIcon />}
                    />
                </div>

                {/* bottom part  */}

                <div className="mt-6">
                    <span className="font-medium leading-normal"> Already have an account? </span>
                    <a className="text-blue-500 underline" href="#" >
                        Log In
                    </a>
                </div>


            </div>
            {/* image content  */}
            <div className="w-1/2 hidden xl:block">
                <img className="w-full h-full object-cover" src={registration_img} alt="" />
            </div>
        </div>
    );
};

export default Registration;