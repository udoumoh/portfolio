const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-8 border-t border-[#e0e0e0]">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="font-spaceMono font-semibold text-lg">John Udoumoh</p>
          <p className="font-inter text-sm text-gray-600">
            Software Engineer (Frontend)
          </p>
        </div>

        <div className="text-center md:text-right">
          <p className="font-inter text-sm text-gray-600">
            © {currentYear} All Rights Reserved
          </p>
          <p className="font-inter text-sm text-gray-600">
            Designed & Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
