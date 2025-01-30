import { useParams } from 'react-router-dom';
import data from "../data/data.json";

import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

import StarActive from "../assets/star-active.svg"

import StarInactive from "../assets/star-inactive.svg"
import Carousel from '../components/carousel';
import '../styles.css';
import Accordion from '../components/Accordion';
import AppartmectSquare from '../components/appartmentSquare';


const Apartment = () => {

	const { id } = useParams();
	const apartment = data.find((apartment) => apartment.id === id);
	if (!apartment) return <div>Apartment not found</div>;

    return (

	<div>
		<NavBar />
		<main>
			<Carousel apartment={apartment} />
			
			<article className="apartment">
				<h2>{apartment.title}</h2>
				<p>{apartment.location}</p>
				<div className="tags-container">
				{apartment.tags.map((tag, index) => (
                            <div className="tag" key={index}>{tag}
				</div>
				))}
				</div>
				<div className="stars-container">
					
					{[...Array(5)].map((e, i) => <img key={i} src={i < apartment.rating ? StarActive : StarInactive} alt={`${i >= apartment.rating ? "in" : ""}active star`} />)}
			
				</div>
				<div className="greater">
					<div class="greater-container">
						<span>{apartment.host.name}</span>
						<img src={apartment.host.picture} alt={apartment.host.name} />
					</div>
				</div>
			</article>
			<div className="apartment-accordion-container">
				<Accordion item={{title:"description", content: apartment.description}}></Accordion>
				<Accordion item={{title:"equipments", content: apartment.equipments}}></Accordion>
			</div>
			<hr style={{marginTop: "1em" }}/>
			<section class="related-section">
				<h2>You might also like</h2>
				<div class="related-container">
					{data.filter((apt) => apt.tags.some(tag=>apt.tags.includes(tag))).slice(0, 3).map((apt) => (
						<AppartmectSquare key={apt.id} appartment={apt} />
						))
					}
				</div>
			</section>

		</main>
        <Footer />

	</div>


    )

}

export default Apartment;