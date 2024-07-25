interface NavbarProps {
    isMenuOpen: boolean;
}
const Navbar: React.FC<NavbarProps> = ({ isMenuOpen }) => {
    return (
        <div className={`${isMenuOpen ? "block" : "hidden"} md:block  md:static absolute py-3 left-0 w-full bg-primary z-40`}>
            <ul className="flex flex-col md:flex-row justify-center items-center font-boska md:text-lg text-4xl text-dark font-regular md:w-auto w-screen md:h-auto h-screen">
                <li className="px-4 py-2 md:my-0 hover:bg-secondary">
                    <a href="/" className="text-dark hover:text-dark">Home</a>
                </li>
                <li className="px-4 py-2 md:my-0 hover:bg-secondary">
                    <a href="#about" className="text-dark-500 hover:text-dark">About Us</a>
                </li>
                <li className="px-4 py-2 md:my-0 hover:bg-secondary">
                    <a href="#product" className="text-dark hover:text-dark">Product</a>
                </li>
                <li className="px-4 py-2 md:my-0 hover:bg-secondary">
                    <a href="#contact" className="text-dark hover:text-dark">Contact</a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;