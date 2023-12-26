"use client";
import "./card.css";
import Image from "next/image";
interface card {
	title: string;
	description: string;
	image: string;
}

function Card({ title, description, image }: card) {
	return (
		<div className="card w-96 bg-base-100 md:shadow-xl flex flex-col">
			<figure className="px-10 pt-10 h-56 flex justify-center items-center">
				<img src={image} alt={title} className="rounded-xl object-cover h-full" />
			</figure>
			<div className="card-body flex flex-col">
				<h2 className="card-title text-lg font-bold h-12 mb-2 titulo_kaiser">{title}</h2>
				<p className="flex-grow text-md">{description}</p>
			</div>
		</div>
	);
}

export default Card;
