import { Footer } from './footer/Footer'
import { Header } from './header/templates/Header'

export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
