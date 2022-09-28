import React, {useEffect, useMemo, useState} from 'react';
import './App.css';
import {getHaze} from "./air-quality.service";
import {cities, City} from "./data";

export const App = () => {

    const [city, setCity] = useState<City>(cities[0])
    const [haze, setHaze] = useState<number | null>(null)

    const backdropFilter = useMemo(() => `blur(${(haze === null ? 1 : haze) / 5}rem)`, [haze])
    const opacity = useMemo(() => haze === null ? 1 : haze, [haze])

    useEffect(() => {
        getHaze(city).then((it) => setHaze(it))
    }, [city])

    return (
        <div style={{backgroundImage: `url("${city.img}")`}} className='bg-image'>
            <div className='header'>
                <div className='buttons'>{cities.map((c) =>
                    <div key={c.name} onClick={() => setCity(c)} className='button'>{c.name}</div>)
                }
                </div>
                <div>looks like {haze && ((haze ?? 1) * 100).toPrecision(2)}% haziness in {city.name}</div>
            </div>

            <div className="overlay" style={{backdropFilter}}/>
            <div className="overlay" style={{backgroundColor: 'grey', opacity}}/>
        </div>
    )
}

export default App;
