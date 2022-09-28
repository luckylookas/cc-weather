interface HazeResponse {
    hourly: {
        aerosol_optical_depth: number[]
    }
}

export const getHaze = ({lat, lon}: {lat: number, lon: number}): Promise<number> => {
    const now = new Date().toISOString().split('T')[0]
    const uri = `https://air-quality-api.open-meteo.com/v1/air-quality
    ?latitude=${lat}
    &longitude=${lon}
    &hourly=aerosol_optical_depth
    &start_date=${now}
    &end_date=${now}`.replaceAll(' ', '')

    return fetch(uri)
        .then((response) => response.json())
        .then((response) => (response as HazeResponse).hourly.aerosol_optical_depth)
        .then((haze) => haze.reduce((prev, next) => prev + next, 0) / haze.length)
}
