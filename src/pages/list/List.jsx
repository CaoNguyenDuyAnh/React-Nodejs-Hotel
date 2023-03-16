import "./list.css";
import Navbar from "../../component/navbar/navbar";
import Header from "../../component/header/header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../component/searchItem/SearchItem";
const List = () => {
    const location = useLocation();
    const [destination, setdestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [openDate, setopenDate] = useState(false)
    const [options, setOptions] = useState(location.state.options)
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label htmlFor="">Địa điểm</label>
                            <input placeholder={destination} type="text" name="" id="" />
                        </div>
                        <div className="lsItem">
                            <label htmlFor="">Ngày</label>
                            <span onClick={() => setopenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} - ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                            {openDate && (<DateRange
                                onChange={item => setDate([item.selection])}
                                minDate={new Date()}
                                ranges={date}
                            />)}
                        </div>
                        <div className="lsItem">
                            <label htmlFor="">Options</label>
                            <div className="lsOption">
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Giá tối thiểu <small>Một đêm </small></span>
                                    <input type="number" className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Giá Tối đa <small>Một đêm </small></span>
                                    <input type="number" className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Người lớn</span>
                                    <input type="number" min={1} className="lsOptionInput" placeholder={options.adult} />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Trẻ em</span>
                                    <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Phòng</span>
                                    <input type="number" min={1} className="lsOptionInput" placeholder={options.room} />
                                </div>
                            </div>

                        </div>
                        <button>Tìm kiếm</button>
                    </div>
                    <div className="listResult">
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List