"use client";
import "./hero.css";
import "animate.css";
import { Tilt } from "react-tilt";

const Hero = () => {
	return (
		<div className="hero min-h-screen">
			<div className="hero-content flex-col lg:flex-row-reverse justify-center items-center">
				<div className="flex-1 justify-center items-center">
					<Tilt className="Tilt" options={{ max: 25, scale: 1.05 }}>
						<img
							src="./illustraciones/code.png"
							style={{
								width: "100%",
								maxWidth: "600px",
							}}
							alt="Logo Kaiser Soft"
						/>
					</Tilt>
				</div>
				<div className="flex-1">
					<h1 className="text-[28px] lg:text-[55px] font-bold text-white text-wrap">
						Liderando la Innovación y Calidad en <br></br>
						<span className="titulo_kaiser">Desarrollo de Software</span>
					</h1>
					<p className="py-6 text-white text-[30px]">En Kaiser Soft, nos dedicamos a impulsar tu empresa hacia nuevas oportunidades.</p>
					<button className="btn btn-primary">Descubre Más</button>
				</div>
			</div>
		</div>
	);
};
export default Hero;
