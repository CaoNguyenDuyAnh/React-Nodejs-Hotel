import "./hotel.css";
import Navbar from "../../component/navbar/navbar";
import Header from "../../component/header/header";
import EmailList from "../../component/emailList/emailList";
import Footer from "../../component/footer/footer";

import { FaArrowCircleLeft, FaArrowCircleRight, FaMapMarkerAlt, FaTimesCircle } from "react-icons/fa"
import { useState } from "react";

const Hotel = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/395135026.jpg?k=2762bfad066a56fde19ae2937be7ba275ec4403ef4c63b2035faeca4924feb37&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/395135140.jpg?k=1c69bc58069e89fc2436d3edcfbe48ef826e90ff3b0467340412c1b3f544137b&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/395135144.jpg?k=c3c753576b440407f9f18f24939785e25cc6156dff0bc3cdf3fda72842dc7289&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/395135150.jpg?k=b1f5e4951c00f91428ecb328c4c2d70ad6d0a786e3b82d89b4e5a161b30dcdb4&o=&hp=1"
        }
    ];


    const handleOpen = (index) => {
        setSlideNumber(index);
        setOpen(true)
    }

    const handleMove = (direction) => {
        let newSlideNumber;
        if(direction === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        }else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }
        setSlideNumber(newSlideNumber)
    }
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FaTimesCircle className="close" onClick={()=>setOpen(false)}/>
                    
                    <FaArrowCircleLeft className="arrow" onClick={() => handleMove("l")}/>
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                    </div>
                    <FaArrowCircleRight className="arrow" onClick={() => handleMove("r")}/>
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Đặt ngay</button>
                    <h1 className="hotelTitle">Hotel</h1>
                    <div className="hotelAddress">
                        <FaMapMarkerAlt />
                        <span>Đà lạt</span>
                    </div>
                    <div className="hotelImages">
                        {photos.map((photo, index) => (
                            <div className="hotelImgWrapper">
                                <img onClick={()=> handleOpen(index)} src={photo.src} alt="" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailText">
                            <h1 className="hotelTitle"></h1>
                            <p className="hotelDesc">Located in Da Lat and with Lam Vien Square reachable within 1.7 km, Thanh Thanh Premier Dalat Hotel provides concierge services, non-smoking rooms, a restaurant, free WiFi throughout the property and a bar. This 3-star hotel offers free shuttle service and room service. The accommodation features a 24-hour front desk, a tour desk and currency exchange for guests.

                                Guest rooms are equipped with a flat-screen TV with cable channels, fridge, a kettle, a shower, free toiletries and a desk. Each room comes with a private bathroom with a hairdryer, while certain rooms include a terrace and others also offer city views. At the hotel the rooms come with bed linen and towels.

                                The daily breakfast offers buffet, continental or Asian options.

                                The area is popular for hiking and fishing, and bike hire is available at this 3-star hotel.

                                Xuan Huong Lake is 1.9 km from Thanh Thanh Premier Dalat Hotel, while Yersin Park Da Lat is 2 km away. The nearest airport is Lien Khuong Airport, 28 km from the accommodation.

                                Đây là khu vực ở Đà Lạt mà khách yêu thích, theo các đánh giá độc lập.</p>
                        </div>
                        <div className="hotelDetailPrice">
                            <h1>Hoàn hảo cho 3 đêm ở</h1>
                            <span>Nằm tại khu vực được đánh giá cao nhất ở Đà Lạt, khách sạn này có điểm vị trí xuất sắc 8,7</span>
                            <h2>
                                <b>200,000 VNĐ</b> (3 đêm)
                            </h2>
                            <button>Đặt ngay</button>
                        </div>
                    </div>
                </div>
                <EmailList />
                <Footer />
            </div>

        </div>
    )
}

export default Hotel