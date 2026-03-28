import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

function Portfolio() {
  const projects = [
    { img: project1, title: "To-Do ", desc: "Cool and Simple To-Do App" },
    { img: project2, title: "Weather App", desc: "Morden Weather App" },
    { img: project3, title: "Currency Converter", desc: "A utility App" },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-5">Our Projects</h2>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="card shadow-sm">
                <img
                  src={project.img}
                  className="card-img-top"
                  alt={project.title}
                />

                <div className="card-body">
                  <h5>{project.title}</h5>
                  <p>{project.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
