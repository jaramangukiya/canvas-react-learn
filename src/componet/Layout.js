import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const handleMenuClick = () => {
        setMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <header>
                <div className="container">
                    <div className="row align-items-center jusify-between">
                        <Link to="/" className="logo font-satisfy">canvas.</Link>
                        <nav className={isMenuOpen ? 'menu-open' : 'menu-closed'}>
                            <ul className="hstack">
                                <li>
                                    <Link to="/" className="active">Home</Link>
                                </li>
                                <li>
                                    <Link to="/">Products</Link>
                                </li>
                                <li>
                                    <Link to="/">Single</Link>
                                </li>
                                <li>
                                    <Link to="/">FAQs</Link>
                                </li>
                                <li>
                                    <Link to="/">Cart</Link>
                                </li>
                                <li>
                                    <Link to="/">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                        <button  onClick={handleMenuClick} className="border-0 bg-transparent menu">
                        {isMenuOpen ? <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="fill-primary" d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" fill="currentColor"/></svg> : <svg fill="none"  height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="fill-primary" d="M2 5.99519C2 5.44556 2.44556 5 2.99519 5H11.0048C11.5544 5 12 5.44556 12 5.99519C12 6.54482 11.5544 6.99039 11.0048 6.99039H2.99519C2.44556 6.99039 2 6.54482 2 5.99519Z" fill="currentColor" /><path className="fill-primary" d="M2 11.9998C2 11.4501 2.44556 11.0046 2.99519 11.0046H21.0048C21.5544 11.0046 22 11.4501 22 11.9998C22 12.5494 21.5544 12.9949 21.0048 12.9949H2.99519C2.44556 12.9949 2 12.5494 2 11.9998Z" fill="currentColor" /><path className="fill-primary" d="M2.99519 17.0096C2.44556 17.0096 2 17.4552 2 18.0048C2 18.5544 2.44556 19 2.99519 19H15.0048C15.5544 19 16 18.5544 16 18.0048C16 17.4552 15.5544 17.0096 15.0048 17.0096H2.99519Z" fill="currentColor" /></svg>}
                            
                        </button>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    )
};

export default Layout;