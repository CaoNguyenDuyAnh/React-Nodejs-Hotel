import "./searchItem.css"

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/402605354.webp?k=ec42c44c6982ae08b65257e3596ec25e02309c12b9392db2816a2621fd35b25c&o=&s=1" alt="" className="siImg" /> 
            <div className="siDesc">
                <h1 className="siTitle">Dalat Wind Hotel</h1>
                <span className="siDistance">Cách trung tâm 0,7km</span>
                <span className="siFeatures">Phòng 4 Người Hạng Tiết Kiệm - Tầng Hầm 2 giường đôi lớn</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Rất tốt</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailText">
                    <span className="siPrice"> $123</span>
                    <button className="siCheckBtn">Xem chỗ trống</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem