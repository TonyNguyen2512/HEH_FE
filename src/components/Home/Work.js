import ChooseMeals from '../../assets/images/home/schedule.png';
import DeliveryMeals from '../../assets/images/home/exercise.png';
import PickMeals from '../../assets/images/home/coins.png';

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: 'Benefits',
            text: 'Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.'
        },
        {
            image: ChooseMeals,
            title: 'Choose How Often',
            text: 'Lorem ipsum dolor sit amet consectetur. Maecenas orci et '
        },
        {
            image: DeliveryMeals,
            title: 'Quality exercise',
            text: 'Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum'
        }
    ];
    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Về ứng dụng</p>
                <h1 className="primary-heading">Hoạt động như thế nào</h1>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at
                    fringilla quam.
                </p>
            </div>
            <div className="work-section-bottom">
                {workInfoData.map((data) => (
                    <div className="work-section-info" key={data.title}>
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;
