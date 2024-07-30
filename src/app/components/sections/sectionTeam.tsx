import { link } from "fs";

const people = [
	{
		name: "Leonardo Ramirez",
		role: "Ingeniero de Sistemas / Desarrollador de Software / Co-Founder / CEO",
		description: "Leonardo es un apasionado de la tecnología y la innovación. Con más de 10 años de experiencia en el desarrollo de software, ha liderado proyectos de gran envergadura en empresas de renombre.",
		imageUrl: "https://media.licdn.com/dms/image/D4E03AQE6kpJpIhEdKA/profile-displayphoto-shrink_800_800/0/1720399879602?e=1727913600&v=beta&t=g8KvwFT-tQq8JgeL7hX-lHjhR_Ibf4ReSo_DPzXyCnQ",
		linkedin: "https://www.linkedin.com/in/leonardo-ramirez-7b1b3b1b/",
	},
	{
		name: "Felipe Saenz",
		role: "Ingeniero de Sistemas/ Co-Founder",
		description: "Felipe es un experto en desarrollo de software y arquitectura de sistemas. Ha trabajado en proyectos de gran escala y es un apasionado de la tecnología blockchain.",
		imageUrl: "https://media.licdn.com/dms/image/D4E03AQEv2L-s636TiA/profile-displayphoto-shrink_800_800/0/1676748303577?e=1723075200&v=beta&t=Jcl0GktN1d3XJy0ALOkfgPy3T59YgMxw9D8Vlvnr-b8",
		linkedin: "https://www.linkedin.com/in/felipe-saenz-7b1b3b1b/",
	},
	{
		name: "Carlos Velasco",
		role: "Líder Comercial / Marketing Digital",
		description: "Carlos es un experto en ventas y marketing digital. Con más de 10 años de experiencia en el sector, ha liderado equipos de alto rendimiento y ha impulsado el crecimiento de empresas de tecnología.",
		imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		linkedin: "https://www.linkedin.com/in/carlos-velasco-7b1b3b1b/",
	},
	{
		name: "Brayan Medina",
		role: "Ingeniero de Sistemas / Desarrollador No Code / CTO",
		description: "Brayan es un experto en desarrollo de software y arquitectura de sistemas. Ha trabajado en proyectos de gran escala y es un apasionado de la tecnología blockchain.",
		imageUrl: "https://media.licdn.com/dms/image/D4E03AQFhjryscbnvrA/profile-displayphoto-shrink_800_800/0/1683637863929?e=1723075200&v=beta&t=z2qDI8XZUw9lA0uQvn5DP8Qw08OIwGwmkPSJyNCu57I",
		linkedin: "https://www.linkedin.com/in/brayan-medina-7b1b3b1b/",
	},
	{
		name: "Brayan Cespedes",
		role: "Diseñadora UX/UI",
		description: "Brayan es una diseñador con una amplia experiencia en diseño de interfaces de usuario y experiencia de usuario. Ha trabajado en proyectos de gran envergadura y es una apasionada de la innovación y la creatividad.",
		imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		linkedin: "https://www.linkedin.com/in/brayan-cespedes-7b1b3b1b/",
	},
];

export default function SectionTeam() {
	return (
		<div className="py-24 sm:py-32 text-white">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="text-[20px] sm:text-[40px] font-bold tracking-tight titulo_kaiser text-center">Conoce a nuestro equipo</h2>
				<p className="mt-4 text-lg leading-8 text-center">El equipo de Kaiser Soft está formado por profesionales apasionados y dedicados que trabajan juntos para ofrecer soluciones tecnológicas innovadoras y de calidad.</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 sm:gap-y-16 mt-12">
					{people.map((person) => (
						<div className="card">
							<div className="card-body flex flex-col items-center">
								<img className="h-[100px] w-[100px] rounded-full" src={person.imageUrl} alt={`Imagen de ${person.name}`} />
								<div className="text-center mt-4">
									<h3 className="font-bold text-[20px] titulo_kaiser">{person.name}</h3>
									<p className="text-sm font-semibold">{person.role}</p>
									<a href={person.linkedin} target="_blank" className="text-blue-500 hover:text-blue-400">
										LinkedIn
									</a>
									<p className="text-sm leading-6 text-gray-400 mt-2">{person.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
