import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    // ✅ Validation
    if (!form.name || !form.email || !form.message) {
      setError("⚠️ All fields are required");
      return;
    }

    // ✅ Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      setError("⚠️ Please enter a valid email address");
      return;
    }

    try {
      const res = await fetch(
        "https://technova-backend.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        },
      );

      if (res.ok) {
        setSuccess("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });

        // Auto hide after 3 sec
        setTimeout(() => setSuccess(""), 3000);
      } else {
        setError("❌ Failed to send message");
      }
    } catch (err) {
      setError("❌ Server error");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>

      {/* ✅ Success Message */}
      {success && <div className="alert alert-success">{success}</div>}

      {/* ❌ Error Message */}
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="form-control mb-2"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <textarea
          className="form-control mb-2"
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
