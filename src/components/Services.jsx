function Services() {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Our Services</h2>
      <div className="row mt-4">
        {["Web Development", "App Development", "UI/UX Design"].map(
          (service, i) => (
            <div className="col-md-4" key={i}>
              <div className="card p-3 text-center">
                <h5>{service}</h5>
                <p>High-quality solutions tailored for your business</p>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
export default Services;
