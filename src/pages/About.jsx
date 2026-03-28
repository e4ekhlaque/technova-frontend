function About() {
  return (
    <div className="container mt-5">
      {/* Intro Section */}
      <div className="text-center mb-5">
        <h1>About TechNova</h1>
        <p>
          TechNova is a modern IT solutions company dedicated to building
          scalable, responsive, and high-performance digital products.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="row text-center mb-5">
        <div className="card mb-4 col-md-6">
          <h3>Our Mission</h3>
          <p>
            To empower businesses with cutting-edge technology solutions that
            drive growth and innovation.
          </p>
        </div>

        <div className="card mb-4 col-md-6">
          <h3>Our Vision</h3>
          <p>
            To become a global leader in IT services by delivering high-quality
            and reliable digital solutions.
          </p>
        </div>
      </div>

      {/* Team Section */}
      {/* Core Values Section */}
      <div className="text-center mb-4">
        <h2>Our Core Values</h2>
      </div>

      <div className="row text-center">
        {[
          {
            title: "Innovation",
            desc: "We constantly explore new technologies to deliver modern and efficient solutions.",
          },
          {
            title: "Quality",
            desc: "We ensure high standards in every project we deliver.",
          },
          {
            title: "Reliability",
            desc: "We build trustworthy systems that businesses can depend on.",
          },
        ].map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className="card p-3 h-100">
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
