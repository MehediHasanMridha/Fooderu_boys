import InfoBox from "../../shared-component/InfoBox";
import homeIcon from '../../assets/Home.svg'
import callIcon from '../../assets/call.svg'
import mailIcon from '../../assets/mail.svg'
import cakeIcon from '../../assets/cake.svg'
import HorizontalLine from "../../shared-component/HorizontalLine";



const InfoPersonal = () => {
    return (
        <div className="rounded-lg px-6 py-4 space-y-2 shadow-[0px_0px_6px_0px_rgba(0,0,0,0.10)]">

            <h2 className="text-[#585858] leading-5">Personal information</h2>
            <HorizontalLine />
            <InfoBox icon={homeIcon} text={"Dhaka, Bangladesh"} />
            <InfoBox icon={callIcon} text={"+880 1712-345 678"} />
            <InfoBox icon={mailIcon} text={"habibur123@gmal.com"} />
            <InfoBox icon={cakeIcon} text={"23 Apr 2000"} />
        </div>
    );
};

export default InfoPersonal;