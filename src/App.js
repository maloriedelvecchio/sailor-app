import './App.css';

function App() {
  const name = "Sailor Guardians";
  return (
    <div className="container">
      <div className="card">
        <img className="card-img-top" src="images/group.jpg" alt="Sailor Guardians Group" />
          <div className="card-body">
            <h1 className="card-title">Meet the {name}</h1>
            <p className="card-text">
              The Sailor Guardians are magical girls who are initially presented as
              super-heroes who use their powers to vanquish the forces of evil.
              They are each associated with an object in outer space. These
              celestial bodies include stars, planets, moons, asteroids, and
              comets among other objects.
            </p>
            <button className="btn btn-primary btn-lg" onClick={()=> alert('Hello')}>Show More</button>
          </div>
      </div>
    </div>
  );
}
export default App;