import { BsFillPlayCircleFill } from 'react-icons/bs';
import AboutBackgroundImage from '../../assets/images/home/about-background-image.png';
import AboutBackground from '../../assets/images/home/about-background.png';

const About = () => {
    return (
        <div className="about-section-container" id="about">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" />
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt="" />
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">Về chúng tôi</p>
                <h1 className="primary-heading">Sức khỏe là quan trọng nhất</h1>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at
                    fringilla quam.
                </p>
                <p className="primary-text">
                    Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
                </p>
                <div className="about-buttons-container">
                    <button className="secondary-button">Tìm hiểu thêm</button>
                    <button className="watch-video-button">
                        <BsFillPlayCircleFill /> Xem video
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
