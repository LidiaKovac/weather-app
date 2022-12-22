import { FC } from "react"
import "./Location.scss"
interface LocationProps {
    city: string
    country: string
}

export const Location: FC<LocationProps> = ({ city, country }) => {
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