// import axios from "axios"
import "./Tempapp.css"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { GrLinkPrevious } from "react-icons/gr"
import { MdLocationOn } from "react-icons/md"

const Tempapp = () => {
    const [city, setCity] = useState(null)
    const { cityname } = useParams()
    const [search, setSearch] = useState(cityname)
    const navigate = useNavigate()


    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date();
    const day = date.getDate()
    let month = months[date.getMonth()];
    // console.log(day,month)

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=14a47383d97cf84059a0c75d123c6d34`)
            .then(res => setCity(res.data.main))
    }, [search])


    return (
        <div className="container">
            <button onClick={() => navigate("/")}><GrLinkPrevious size="40px" /></button>

            <div className="inputData">
                <p>Today, {day} {month}</p>
                <input
                    type="text"
                    className="inputField"
                    defaultValue=""
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div>

            </div>
            {
                !city ? (
                    <div>
                        <h1>No city found</h1>
                    </div>
                ) : (
                    <div className="info">
                        <div className="location_top">
                            <div className="location">
                                <h1 className="temp">{city.temp}°</h1>
                                <div>
                                    <MdLocationOn size="40px" />
                                    <span>{search}</span>
                                </div>
                            </div>
                        </div>

                        <div className="location_bottom">
                            <h3 className="tempmin_max"><span>Min</span> : {city.temp_min} °Cel</h3>
                            <h3 className="tempmin_max"><span>Max</span> : {city.temp_max} °Cel</h3>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default Tempapp