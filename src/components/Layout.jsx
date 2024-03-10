import Nav from "./nav"

export default function Layout({ children }) {
    return (
        <div id="container">
            <Nav />
            <main>
                {children}
            </main>
        </div>
    )
}