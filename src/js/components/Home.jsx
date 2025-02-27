import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	let infoCards = [
		{id: "carta1", image:"https://images.pexels.com/photos/8861342/pexels-photo-8861342.jpeg?auto=compress&cs=tinysrgb&w=600", title:"Fitito", description:"Fiat 600, mi hermoso auto, un clasico muy bien conservado."},
		{id: "carta2", image:"https://images.pexels.com/photos/30863688/pexels-photo-30863688/free-photo-of-bandeja-de-frutas-tropicales-vibrantes-sobre-una-mesa-moderna.jpeg?auto=compress&cs=tinysrgb&w=800", title:"Comida", description:"Asi se disfruta la vida, con una rica comida."},
		{id: "carta3", image:"https://images.pexels.com/photos/30819542/pexels-photo-30819542/free-photo-of-esqui-de-fondo-en-el-espectacular-paisaje-del-tirol.jpeg?auto=compress&cs=tinysrgb&w=800", title:"Aventura", description:"Esquiando sobre la nieve, es muy divertido"},
		{id: "carta4", image:"https://images.pexels.com/photos/30839365/pexels-photo-30839365/free-photo-of-estructura-de-acero-del-poligono-de-saar-punto-de-referencia-de-volklingen.jpeg?auto=compress&cs=tinysrgb&w=600", title:"Arquitectura", description:"Estructura de acero del poligono con un cielo azul de fondo."},
	]
	return (
		<>
			<Navbar />
			<div className="Container">
			 <Jumbotron />
			 <div className="row" style={{marginTop: "16px", marginBottom: "16px"}}>
				 {
                   infoCards.map((value)=>{
					return(
						<div className="col" key={value.id}>
						  <Card image={value.image} title={value.title} description={value.description}/>
						</div>  
					);
				   }) 
				 }	
			 </div>
		     
		    </div>
			<Footer />	
		</>
	);
};

export default Home;