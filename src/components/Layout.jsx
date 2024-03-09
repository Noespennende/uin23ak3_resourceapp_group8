import Nav from "./Nav"

export default function Layout({children}){
    return(
        <div id="container">
            <Nav/>
            <main>
                {children}
            </main>
        </div>
    )
}