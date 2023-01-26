import {React, useState, useEffect }from 'react'
import axios from 'axios'
const url = "https://react--course-api.herokuapp.com/api/v1/data/gelateria";


export default function Menu() {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [categories, setCategories] = useState([]);

    const getMenu = async () => {
        setLoading(true);
        try {
            const response = await axios.get(url);
            setMenu(response.data.data);
        } catch (error) {
            setError(true);
        } finally {
            menu.forEach((item) => {
                addCategory(item.categoria);
            });
            setLoading(false);
        }
    }

    const addCategory = (category) => {
        if (!categories.includes(category)) {
            setCategories([...categories, category]);
        }
    }

    useEffect(() => {
        getMenu();
    }, []);


    if (loading) {
        return <h2 className='col-12 text-center'>Loading...</h2>
    }

    if (error) {
        return <h2 className='col-12 text-center text-danger'>Something went wrong...</h2>
    }

    return (
        <div className='col-12 pt-4'>
            <h2 className='mb-4'>Le nostre proposte:</h2>
            <div className="row">
                <div className="col-12">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Tutti</a>
                        </li>
                        {categories.map((category) => {
                            return (
                                <li className="nav-item">
                                    <a className="nav-link" href="#">{category}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
