// kept this file for ref, it doesn't do anything 

interface Weather {
    city: City
    cnt: number
    cod: string
    list: Array<SingleDay>
    message: number
}

interface SingleDay {
    clouds: {
        all: number
    }
    dt: number
    dt_txt: string
    main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        sea_level: number
        temp: number
        temp_kf: number
        temp_max: number
        temp_min: number
    }
    pop: number
    sys: {
        pod: string
    }
    visibility: number
    weather: Array<SingleWeatherState>
    wind: {
        speed: number
        deg: number
        gust: number
    }
}

interface SingleWeatherState {
    description: string
    icon: string
    id: number
    main: string
}

interface City {
    coord: {
        lat: number
        lon: number
    }
    country: string
    id: number
    name: string
    population: number
    sunrise: number
    sunset: number
    timezone: number
}
