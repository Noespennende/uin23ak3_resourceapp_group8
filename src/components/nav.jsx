import { Link } from 'react-router-dom'
import { resources } from '../assets/ressurser'

export default function Nav({ activeCategory }) {
    return (
        <nav>
            <ul>
                {resources.map((item, index) => (
                    <Link key={index + 'category'} to={"/" + item.category.replaceAll(" ", "-")}>
                        <li className={activeCategory === item.category ? 'active' : null}>{item.category}</li>
                    </Link>
                ))}
            </ul>
        </nav>
    );
}
