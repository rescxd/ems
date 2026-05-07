import fileLogo from '@/assets/common/fileIcon.png';
import youtubelogo from '@/assets/common/youtubeLogo.svg';
import Image from 'next/image';

const Card = ({ file }) => {
    return (
        <a href={file?.url} target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col gap-[18px]">
                <div className="h-[215px] bg-[#F7F7F7] w-full rounded-[20px] flex items-center justify-center">
                    {file?.type === 'video' ? (
                        <div>
                            <Image src={youtubelogo} alt="youtube icon" />
                        </div>
                    ) : (
                        <div>
                            <Image src={fileLogo} alt="file icon" />
                        </div>
                    )}
                </div>
                <div className="">
                    <p className="text-[#262626] text-[clamp(17px,3vw,20px)] grotesk font-bold leading-[135%] tracking-[-0.6px] text-center">
                        {file?.title}
                    </p>
                </div>
            </div>
        </a>
    );
};

export default Card;
