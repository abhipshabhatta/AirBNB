
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Cabin from "../assets/cabin.jpg"
import Accordion from "../components/Accordion"
import AboutEn from "../data/data.about.en.json"
import AboutFr from "../data/data.about.fr.json"
import AboutSp from "../data/data.about.sp.json"
import LangContext from "../context/langContext"
import {React, useContext} from "react"


const About = () => {
	const {lang} = useContext(LangContext);

	const data = {
		en: AboutEn,
		fr: AboutFr,
		sp: AboutSp

	};

	const AboutData = data[lang?.toLowerCase()] || data.en;

    return (

	<div>
		<NavBar />
		<main className="about">
			<h1>{AboutData.title}</h1>
			<section>
				<img src={Cabin} alt="key home about image" />
			</section>
			<article>{AboutData.description}</article>
			<div className="about-container">
				{AboutData.accordions.map((item, index) => (
					<Accordion item={item} key={index}></Accordion>
				))}
				
				</div>
		</main>
		<Footer	/>
	</div>


    )

}

export default About;