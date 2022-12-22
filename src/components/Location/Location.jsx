import "./Location.css"


export const Location = ({ city, country }) => {
    return (
        <div className="location__wrap">
            <div className="location__city">
                {city}
            </div>
            <div className="location__country">
                {country}
            </div>
        </div>
    )
}