import { Link, useParams} from 'react-router-dom';
import { useState } from 'react'
import { resources } from '../assets/ressurser';


export default function Nav(){
    const {slug} = useParams()
    const [active, setActive] = useState()
    console.log("current slug: ", slug)
    return(  
        <>
        <nav>
            <ul>
                {resources.map((item, index) => <li key={index+"category"}><Link to={"/"+item.category.replaceAll(" ", "-")} className={active === item? "active" : null}>{item.category}</Link></li>)}
            </ul>
        </nav>
        </>
    )
}