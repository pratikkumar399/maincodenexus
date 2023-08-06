/* eslint-disable react-hooks/exhaustive-deps */
import './Carousel.css';

const Carousel = () => {


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card d-flex mx-auto">
                        <div className="card-image">
                            <img
                                className="img-fluid d-flex mx-auto"
                                src="https://i.imgur.com/3TlwnLF.jpg"
                            />
                        </div>
                        <div className="card-text">
                            <div className="card-title">Lorem Ipsum!</div>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                            commodo ligula eget dolor. Aenean massa. Nam quam nunc, blandit vel,
                            luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
                            tincidunt tempus Duis leo. Donec sodales sagittis magna
                        </div>
                        <div className="footer">
                            <span id="name">
                                Micheal Smith
                                <br />
                            </span>
                            <span id="position">
                                CEO of <a href="#">Google.com</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card d-flex mx-auto">
                        <div className="card-image">
                            <img
                                className="img-fluid d-flex mx-auto"
                                src="https://i.imgur.com/Uz4FjGZ.jpg"
                            />
                        </div>
                        <div className="card-text">
                            <div className="card-title">Lorem Ipsum!</div>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                            commodo ligula eget dolor. Aenean massa. Nam quam nunc, blandit vel,
                            luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
                            tincidunt tempus Duis leo. Donec sodales sagittis magna
                        </div>
                        <div className="footer">
                            <span id="name">
                                Angellia Miller
                                <br />
                            </span>
                            <span id="position">
                                CEO of <a href="#">Facebook.com</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card d-flex mx-auto ">
                        <div className="card-image">
                            <img
                                className="img-fluid d-flex mx-auto"
                                src="https://i.imgur.com/udGH5tO.jpg"
                            />
                        </div>
                        <div className="card-text">
                            <div className="card-title">Lorem Ipsum!</div>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                            commodo ligula eget dolor. Aenean massa. Nam quam nunc, blandit vel,
                            luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
                            tincidunt tempus Duis leo. Donec sodales sagittis magna
                        </div>
                        <div className="footer">
                            <span id="name">
                                Christina Williams
                                <br />
                            </span>
                            <span id="position">
                                UX Designer at <a href="#">Youtube.com</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Carousel;
