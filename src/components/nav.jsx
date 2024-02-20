import { useState } from 'react'

export default function Nav(){
    const {id} = useParams()
    const [active, setActive] = useState()
    const caregories = ["HTML", "CSS", "JavaScript", "React", "Sanity and headless CMS"]

    return(
        <nav>
            <ul>
                {categories.map((item, index) => <li key={index+"category"}><Link to={"/"+item.replaceAll(" ", "-")} className={active === item? "active" : null}>{item}</Link></li>)}
            </ul>
        </nav>
    )
}