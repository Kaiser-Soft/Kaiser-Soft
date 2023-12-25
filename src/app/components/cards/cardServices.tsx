interface CardServicesProps {
	title: string;
	description: string;
	image: string;
}
const CardServices = ({ title, description, image }: CardServicesProps) => {
	return (
		<div className="card w-96 bg-base-100 shadow-xl image-full">
			<figure>
				<img src={image} alt={title} />
			</figure>
			<div className="card-body">
				<h2 className="card-title titulo_kaiser">{title}</h2>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default CardServices;
