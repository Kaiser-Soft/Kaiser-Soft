interface CardServicesProps {
	title: string;
	description: string;
	image: string;
}

import "./card.css";
const CardServices = ({ title, description, image }: CardServicesProps) => {
	return (
		<div className="card w-96  shadow-xl image-full">
			<figure>
				<img src={image} alt={title} />
			</figure>
			<div className="card-body">
				<h2
					className="card-title titulo_kaiser"
					style={{
						fontSize: "1.6rem",
					}}>
					{title}
				</h2>
				<p
					className="text-md"
					style={{
						maxWidth: "75ch",
						fontSize: "1.2rem",
					}}>
					{description}
				</p>
			</div>
		</div>
	);
};

export default CardServices;
