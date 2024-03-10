import { Link, useParams } from 'react-router-dom';
import { useState } from 'react'
import { resources } from '../assets/ressurser';


export default function Nav() {
    const { slug } = useParams()
    const [active, setActive] = useState()
    console.log("current slug: ", slug)

    const handleButtonClick = (category) => {
        setActive(category);
    };

    return (
        <>
            <nav>
                <ul>
                    {resources.map((item, index) => (
                        <button key={index + 'category'} className={active === item.category ? 'active' : null} onClick={() => handleButtonClick(item.category)}>
                            <Link to={"/" + item.category.replaceAll(" ", "-")} className={active === item.category ? 'active' : null}>{item.category}</Link>
                        </button>
                    ))}
                </ul>

            </nav>
        </>
    )
}