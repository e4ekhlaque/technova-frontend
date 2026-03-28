function Services() {
  return (
    <section className="py-5  mt-5">
      <div className="container text-center">
        <h2 className="mb-5">Our Services</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card p-4 shadow-sm">
              <h5>Web Development</h5>
              <p>Modern responsive websites</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 shadow-sm">
              <h5>App Development</h5>
              <p>High performance apps</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 shadow-sm">
              <h5>UI/UX Design</h5>
              <p>Clean modern design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
