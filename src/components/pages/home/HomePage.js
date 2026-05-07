import About from '@/components/pages/home/about/About';
import Solutions from '@/components/pages/home/solutions/Solutions';
import ForWho from '@/components/pages/home/forwho/ForWho';
import Customers from '@/components/pages/home/customers/Customers';
import Header from '@/components/pages/home/header/Header';

const HomePage = () => {
    return (
        <div className="flex flex-col gap-[16px]">
            <Header/>
            <About />
            <Solutions />
            <ForWho />
            <Customers />
        </div>
    );
};

export default HomePage;
