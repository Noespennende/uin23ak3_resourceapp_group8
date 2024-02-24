import { Link, useParams} from 'react-router-dom';
import { useState } from 'react'

export default function Nav(){
    const {slug} = useParams()
    const [active, setActive] = useState()
    const categories = ["HTML", "CSS", "JavaScript", "React", "Sanity and headless CMS"]
    console.log("current slug: ", slug)
    return(  
        <>
        <nav>
            <ul>
                {categories.map((item, index) => <li key={index+"category"}><Link to={"/"+item.replaceAll(" ", "-")} className={active === item? "active" : null}>{item}</Link></li>)}
            </ul>
        </nav>
        </>
    )
}