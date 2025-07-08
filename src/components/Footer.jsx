import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Panto Furniture. All rights reserved.</p>
        <p>
          Follow us on{" "}
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">
            Facebook
          </a>{" "}
          |{" "}
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">
            Instagram
          </a>
        </p>
      </div>
    </footer>
  );
}
export default Footer;