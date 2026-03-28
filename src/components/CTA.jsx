import { useNavigate } from "react-router-dom";

function CTA() {
  const navigate = useNavigate();

  return (
    <section className="bg-primary text-white text-center py-5">
      <div className="container">
        <h2>Ready to Grow Your Business?</h2>
        <button
          className="btn btn-light mt-3"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}

export default CTA;
