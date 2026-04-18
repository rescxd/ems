import Bottom from '@/components/common/footer/bottom/Bottom';
import Form from '@/components/common/footer/form/Form';

const Footer = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 bottom-0 h-full 4xl:rounded-[28px] 4xl:mx-[20px] z-[-1] bg-[#252525]"></div>
            <div className="container relative mx-auto pt-[50px] md:pt-[70px] lg:pt-[90px] xl:pt-[110px] pb-[40px]">
                <div className="flex flex-col gap-[50px] md:gap-[70px] xl:gap-[90px] 2xl:gap-[110px]">
                    <div className="">
                        <Form />
                    </div>
                    <div className="">
                        <Bottom />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
