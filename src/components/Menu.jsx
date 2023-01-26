import {React, useState, useEffect }from 'react'
import axios from 'axios'
const url = "https://react--course-api.herokuapp.com/api/v1/data/gelateria";


export default function Menu() {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const getMenu = async () => {
        setLoading(true);
        try {
            const response = await axios.get(url);
            setMenu(response.data.data);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getMenu();
    }, []);


    return (
        <div className='col-12'>
            <h2>Le nostre proposte:</h2>
            <div className="row">

            </div>
        </div>
    )
}
