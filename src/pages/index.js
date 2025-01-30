import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Cabin from "../assets/cabin.jpg"
import AppartmectSquare from "../components/appartmentSquare";
import data from "../data/data.json";
import '../styles.css';

const Index = () => {
    return (
	<div>
        <NavBar />
		<main>
			<section className="home-banner">
				<img src={Cabin} alt="cabin key host" />
				<h2>Your key to the perfect nest</h2>
			</section>
			<section className="cards-container">
                
			{data.map((apt) => (
            <AppartmectSquare key={apt.id} appartment={apt} />
          ))}			
			</section>
		</main>
        <Footer />

	</div>

    );
}
export default Index;