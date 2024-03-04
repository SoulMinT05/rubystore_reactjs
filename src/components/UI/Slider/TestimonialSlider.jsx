import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ava01 from '../../../assets/images/ava-1.jpg';
import ava02 from '../../../assets/images/ava-2.jpg';
import ava03 from '../../../assets/images/ava-3.jpg';
import ava04 from '../../../assets/images/ava-4.jpg';
import ava05 from '../../../assets/images/ava-5.jpg';
import ava06 from '../../../assets/images/ava-6.jpg';
import ava07 from '../../../assets/images/ava-7.jpg';
import ava08 from '../../../assets/images/ava-8.jpg';
import ava09 from '../../../assets/images/ava-9.jpg';
import ava10 from '../../../assets/images/ava-10.jpg';
import ava11 from '../../../assets/images/ava-11.jpg';
import ava12 from '../../../assets/images/ava-12.jpg';
import '../../../styles/TestimonialSlider.css';

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, display: 'block', backgroundColor: '#fff' }} onClick={onClick} />
    );
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, display: 'block', backgroundColor: '#fff' }} onClick={onClick} />
    );
}

function TestimonialSlider() {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
    };

    return (
        <Slider {...settings}>
            <div className=" slider-wrapper">
                <div className="slider-wrapper__img">
                    <img
                        src={ava01}
                        alt="avatar"
                        className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl slider-img"
                    />
                </div>
                <div className="slider-info">
                    <h6 className="slider-title">HIEUTHUHAI</h6>
                    <p className="text-center review__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quidem. Illum porro officia
                        veniam, est autem culpa, necessitatibus totam facilis magnam dolores perspiciatis impedit
                        temporibus sit architecto deserunt repellat neque.
                    </p>
                </div>
            </div>
            <div className=" slider-wrapper">
                <div className="slider-wrapper__img">
                    <img
                        src={ava02}
                        alt="avatar"
                        className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl slider-img"
                    />
                </div>
                <div className="slider-info">
                    <h6 className="slider-title">Kim Jisoo</h6>
                    <p className="text-center review__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quidem. Illum porro officia
                        veniam, est autem culpa, necessitatibus totam facilis magnam dolores perspiciatis impedit
                        temporibus sit architecto deserunt repellat neque.
                    </p>
                </div>
            </div>
            <div className=" slider-wrapper">
                <div className="slider-wrapper__img">
                    <img
                        src={ava03}
                        alt="avatar"
                        className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl slider-img"
                    />
                </div>
                <div className="slider-info">
                    <h6 className="slider-title">Rosé</h6>
                    <p className="text-center review__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quidem. Illum porro officia
                        veniam, est autem culpa, necessitatibus totam facilis magnam dolores perspiciatis impedit
                        temporibus sit architecto deserunt repellat neque.
                    </p>
                </div>
            </div>

            <div className=" slider-wrapper">
                <div className="slider-wrapper__img">
                    <img
                        src={ava04}
                        alt="avatar"
                        className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl slider-img"
                    />
                </div>
                <div className="slider-info">
                    <h6 className="slider-title">Doan Hai My</h6>
                    <p className="text-center review__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quidem. Illum porro officia
                        veniam, est autem culpa, necessitatibus totam facilis magnam dolores perspiciatis impedit
                        temporibus sit architecto deserunt repellat neque.
                    </p>
                </div>
            </div>
            <div className=" slider-wrapper">
                <div className="slider-wrapper__img">
                    <img
                        src={ava05}
                        alt="avatar"
                        className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl slider-img"
                    />
                </div>
                <div className="slider-info">
                    <h6 className="slider-title">Ngo Kien Huy</h6>
                    <p className="text-center review__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quidem. Illum porro officia
                        veniam, est autem culpa, necessitatibus totam facilis magnam dolores perspiciatis impedit
                        temporibus sit architecto deserunt repellat neque.
                    </p>
                </div>
            </div>
            <div className=" slider-wrapper">
                <div className="slider-wrapper__img">
                    <img
                        src={ava06}
                        alt="avatar"
                        className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl slider-img"
                    />
                </div>
                <div className="slider-info">
                    <h6 className="slider-title">Son Tung MTP</h6>
                    <p className="text-center review__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quidem. Illum porro officia
                        veniam, est autem culpa, necessitatibus totam facilis magnam dolores perspiciatis impedit
                        temporibus sit architecto deserunt repellat neque.
                    </p>
                </div>
            </div>
            <div className=" slider-wrapper">
                <div className="slider-wrapper__img">
                    <img
                        src={ava07}
                        alt="avatar"
                        className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl slider-img"
                    />
                </div>
                <div className="slider-info">
                    <h6 className="slider-title">Phi Linh</h6>
                    <p className="text-center review__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quidem. Illum porro officia
                        veniam, est autem culpa, necessitatibus totam facilis magnam dolores perspiciatis impedit
                        temporibus sit architecto deserunt repellat neque.
                    </p>
                </div>
            </div>
            <div className=" slider-wrapper">
                <div className="slider-wrapper__img">
                    <img
                        src={ava08}
                        alt="avatar"
                        className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl slider-img"
                    />
                </div>
                <div className="slider-info">
                    <h6 className="slider-title">Issac</h6>
                    <p className="text-center review__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quidem. Illum porro officia
                        veniam, est aautem culpa, necessitatibus totam facilis magnam dolores perspiciatis impedit
                        temporibus sit architecto deserunt repellat neque.
                    </p>
                </div>
            </div>

            <div className=" slider-wrapper">
                <div className="slider-wrapper__img">
                    <img
                        src={ava11}
                        alt="avatar"
                        className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl slider-img"
                    />
                </div>
                <div className="slider-info">
                    <h6 className="slider-title">Anh Tu</h6>
                    <p className="text-center review__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quidem. Illum porro officia
                        veniam, est autem culpa, necessitatibus totam facilis magnam dolores perspiciatis impedit
                        temporibus sit architecto deserunt repellat neque.
                    </p>
                </div>
            </div>
            <div className=" slider-wrapper">
                <div className="slider-wrapper__img">
                    <img
                        src={ava12}
                        alt="avatar"
                        className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl slider-img"
                    />
                </div>
                <div className="slider-info">
                    <h6 className="slider-title">Mai Phuong</h6>
                    <p className="text-center review__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quidem. Illum porro officia
                        veniam, est autem culpa, necessitatibus totam facilis magnam dolores perspiciatis impedit
                        temporibus sit architecto deserunt repellat neque.
                    </p>
                </div>
            </div>
        </Slider>
    );
}

export default TestimonialSlider;
