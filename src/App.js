import './App.css';
import ListCast from './components/ListCast';

function App() {
  const name = "Sailor Guardians";
  return (
    <div className="container">
      <div className="card">
        <img className="card-img-top" src="images/group.jpg" alt="Sailor Guardians Group" />
          <div className="card-body">
            <h1 className="card-title">Meet the {name}</h1>
            <p className="card-text">
              The Sailor Guardians are magical girls who use their powers to 
              vanquish the forces of evil.
            </p>
            <button className="btn btn-primary btn-lg" onClick={()=> alert('Hello')}>Show Details</button>
            <ListCast />          
          </div>
      </div>
    </div>
  );
}
export default App;