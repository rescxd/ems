import Bottom from '@/components/pages/home/forwho/bottom/Bottom';
import Top from '@/components/pages/home/forwho/top/Top';
import Security from '@/components/pages/home/forwho/security/Security';

const ForWho = () => {
    return (
        <div className="relative" id="dla-kogo-ems">
            <div className="absolute top-0 left-0 right-0 bottom-0 h-full 4xl:rounded-[28px] 4xl:mx-[20px] z-[-1] bg-[#FFFFFF]"></div>
            <div className="container mx-auto py-[50px] md:py-[70px] lg:py-[90px] xl:py-[110px]">
                <div className="flex flex-col gap-[50px] md:gap-[70px] xl:gap-[90px] 2xl:gap-[110px]">
                    <div className="">
                        <Top />
                    </div>
                    <div className="">
                        <Bottom />
                    </div>
                    <div className="">
                        <Security/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForWho;
