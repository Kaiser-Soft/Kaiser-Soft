"use client";
import "./card.css";
interface card {
	title: string;
	description: string;
	image: string;
}

function Card({ title, description, image }: card) {
	return (
		<div className="card w-96 md:shadow-xl flex flex-col">
			<figure className="px-10 pt-10 h-56 flex justify-center items-center">
				<img src={image} alt={title} className="max-w-full h-40 object-cover"></img>
			</figure>
			<div className="card-body flex flex-col justify-center">
				<h2 className="text-[30px] font-bold h-12 mb-2 titulo_kaiser text-center">{title}</h2>
				<p className="flex-grow text-md text-white text-[18px]">{description}</p>
			</div>
		</div>
	);
}

export default Card;
