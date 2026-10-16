function Education(education) {
  return (
    <section id="education" className="section dark-section">
      <div className="container">
        <h2 className="section-title"><span className="gradient-text">education</span></h2>

        <div className="grid">
          {
          education.map((item)=>(
            <div className="card" key={item.degree}>
            <p className="year">{item.year}</p>
            <h3>{item.degree}</h3>
            <p>{item.degree}</p>
            <p className="muted"></p>
          ))
          }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
