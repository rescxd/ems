import Faq from '@/components/pages/home/customers/faq/Faq';
import Files from '@/components/pages/documentation/files/Files';

const Documentation = () => {
    return (
        <div className="flex flex-col gap-[20px]">
            <div className="relative" id="dla-kogo-ems">
                <div className="absolute top-0 left-0 right-0 bottom-0 h-full 4xl:rounded-b-[28px] 4xl:mx-[20px] z-[-1] bg-[#FFFFFF]"></div>
                <div className="container mx-auto pt-[50px] pb-[50px] md:pt-[65px] md:pb-[70px] xl:pb-[90px] xl:pb-[110px]">
                    <div className="">
                        <Files/>
                    </div>
                </div>
            </div>
            <div className="relative" id="">
                <div className="absolute top-0 left-0 right-0 bottom-0 h-full 4xl:rounded-[28px] 4xl:mx-[20px] z-[-1] bg-[#FFFFFF]"></div>
                <div className="container mx-auto py-[50px] md:py-[70px] lg:py-[90px] xl:py-[110px]">
                    <div className="">
                        <Faq/>
                    </div>
                </div>
            </div>
        </div>
    );
  
}

export default Documentation