import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="bg-dark text-white text-center py-5">
      <div className="container py-5">
        <h1 className="fw-bold">Innovative IT Solutions for Your Business</h1>
        <p className="mb-4">
          We build scalable, modern, and responsive digital products
        </p>

        <button
          className="btn btn-primary me-2"
          onClick={() => navigate("/About")}
        >
          Get Started
        </button>
        <button
          className="btn btn-outline-light"
          onClick={() => navigate("/Services")}
        >
          Our Services
        </button>
      </div>
    </section>
  );
}
export default Hero;
