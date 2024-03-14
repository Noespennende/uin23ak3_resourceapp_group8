import Nav from "./nav"
import { useState } from 'react'

export default function Layout({ children }) {
    const [activeCategory, setActiveCategory] = useState(null)

    return (
        <div id="container">
            <Nav activeCategory={activeCategory} />
            <main>
                {children}
            </main>
        </div>
    )
}