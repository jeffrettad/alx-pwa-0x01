const Footer: React.FC = () => {
    return(
        <footer className="bg-gray-800 text-white text-center py-4">
           &copy; {new
           Date().getFullYear()} ALX Movie App. All right reserved.
        </footer>
    );
};

export default Footer;