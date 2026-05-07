import Bottom from '@/components/pages/home/solutions/bottom/Bottom';
import Top from '@/components/pages/home/solutions/top/Top';

const Solutions = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 bottom-0 h-full 4xl:rounded-[24px] 4xl:mx-[20px] z-[-1] bg-[#252525]"></div>
            <div className="container relative mx-auto py-[50px] md:py-[70px] lg:py-[90px] xl:py-[110px]">
                <div className="absolute bottom-[328px] left-[157px] w-[1306px] h-[255px] bg-[#FFFFFF33] blur-[400px] rounded-[1306px]"></div>

                <div className="flex flex-col gap-[50px] md:gap-[70px] xl:gap-[90px] 2xl:gap-[110px]">
                    <div className="">
                        <Top />
                    </div>
                    <div className="">
                        <Bottom />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solutions;
