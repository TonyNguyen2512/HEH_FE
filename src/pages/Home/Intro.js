import { FiArrowRight } from 'react-icons/fi';
import BannerBackground from '../../assets/images/home/home-banner-background.png';
import BannerImage from '../../assets/images/home/home-banner-image.png';
import Navbar from '../../components/Home/Navbar';
import { Link } from 'react-router-dom';

const Introduction = () => {
    return (
        <div className="home-container">
            <Navbar />
            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src={BannerBackground} alt="" />
                </div>
                <div className="home-text-section">
                    <h1 className="primary-heading">Nhà vật lý trị liệu của bạn ở đây, nhanh chóng và tiện lợi</h1>
                    <p className="primary-text">
                        Tất cả những gì bạn phải làm là liên hệ với chúng tôi hoặc tạo một tài khoản để tham gia cùng chúng tôi trong hành
                        trình của chúng tôi
                    </p>
                    <Link to="/signup">
                        <button className="secondary-button">
                            Đăng nhập ngay <FiArrowRight />{' '}
                        </button>
                    </Link>
                </div>
                <div className="home-image-section">
                    <img src={BannerImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Introduction;
