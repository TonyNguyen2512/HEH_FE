const Contact = () => {
    return (
        <div className="contact-page-wrapper" id="contact">
            <h1 className="primary-heading">Câu hỏi cần được giải đáp?</h1>
            <h1 className="primary-heading">Hãy để chúng tôi giúp bạn</h1>
            <div className="contact-form-container">
                <input type="text" placeholder="yourmail@gmail.com" />
                <button className="secondary-button">Gửi</button>
            </div>
        </div>
    );
};

export default Contact;
