import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-4 mb-3">
            <h4>TechNova</h4>
            <p>Modern IT solutions</p>
          </div>

          {/* Column 2 */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <p>
              <Link to="/" className="text-white text-decoration-none">
                Home
              </Link>
            </p>
            <p>
              <Link to="/about" className="text-white text-decoration-none">
                About
              </Link>
            </p>
            <p>
              <Link to="/services" className="text-white text-decoration-none">
                Services
              </Link>
            </p>
            <p>
              <Link to="/contact" className="text-white text-decoration-none">
                Contact
              </Link>
            </p>
          </div>

          {/* Column 3 */}
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p>Email: technova@gmail.com</p>
          </div>
        </div>

        {/* Bottom */}
        <hr />
        <p className="text-center mb-0">© 2026 TechNova</p>
      </div>
    </footer>
  );
}

export default Footer;
