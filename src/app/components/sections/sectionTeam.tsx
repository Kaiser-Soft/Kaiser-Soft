import { link } from "fs";

const people = [
	{
		name: "Leonardo Ramirez",
		role: "Ingeniero de Sistemas / Desarrollador de Software / Co-Founder",
		description: "Leonardo es un apasionado de la tecnología y la innovación. Con más de 3 años de experiencia en el desarrollo de software.",
		imageUrl:
			"https://media.licdn.com/dms/image/v2/D4E03AQHQsnQLnn4KWg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731257641808?e=1746057600&v=beta&t=XYSl-PaC4Kz5m2zZXt-9BhJ-wbES5n7DYbqqGMgqY8o",
		linkedin: "https://www.linkedin.com/in/jleonardoramirez/",
	},
	{
		name: "Felipe Saenz",
		role: "Ingeniero de Sistemas/ Co-Founder",
		description: "Felipe es un experto en analisis de datos y desarrollo de software. Con más de 3 años de experiencia en el sector.",
		imageUrl: "https://www.linkedin.com/in/cristian-saenz-guarnizo-879a92239/",
		linkedin: "https://www.linkedin.com/in/cristian-saenz-guarnizo-879a92239/",
	},
	// {
	// 	name: "Carlos Velasco",
	// 	role: "Líder Comercial / Marketing Digital",
	// 	description: "Carlos es un experto en ventas y marketing digital. Con más de 10 años de experiencia en el sector, ha liderado equipos de alto rendimiento y ha impulsado el crecimiento de empresas de tecnología.",
	// 	imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	// 	linkedin: "https://www.linkedin.com/in/carlos-velasco-7b1b3b1b/",
	// },
	{
		name: "Brayan Medina",
		role: "Ingeniero de Sistemas / Desarrollador No Code / CTO",
		description:
			"Brayan es un experto en desarrollo de software y desarrollo de aplicaciones sin código. Con más de 3 años de experiencia en el sector.",
		imageUrl:
			"https://media.licdn.com/dms/image/D4E03AQFhjryscbnvrA/profile-displayphoto-shrink_800_800/0/1683637863929?e=1723075200&v=beta&t=z2qDI8XZUw9lA0uQvn5DP8Qw08OIwGwmkPSJyNCu57I",
		linkedin: "https://www.linkedin.com/in/medinabrayan/",
	},
	// {
	// 	name: "Brayan Cespedes",
	// 	role: "Diseñadora UX/UI",
	// 	description: "Brayan es una diseñador con una amplia experiencia en diseño de interfaces de usuario y experiencia de usuario. Ha trabajado en proyectos de gran envergadura y es una apasionada de la innovación y la creatividad.",
	// 	imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	// 	linkedin: "https://www.linkedin.com/in/brayan-cespedes-7b1b3b1b/",
	// },
];

export default function SectionTeam() {
	return (
		<div className='py-12 md:py-24 text-white'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='text-center max-w-3xl mx-auto mb-12'>
					<h2 className='text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight titulo_kaiser mb-6'>Conoce a nuestro equipo</h2>
					<p className='text-base sm:text-lg text-gray-300'>
						El equipo de Kaiser Soft está formado por profesionales apasionados y dedicados que trabajan juntos para ofrecer soluciones
						tecnológicas innovadoras y de calidad.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
					{people.map((person) => (
						<div key={person.name} className='bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm transition-transform hover:scale-105'>
							<div className='flex flex-col items-center'>
								<img
									className='h-32 w-32 rounded-full object-cover border-4 border-blue-500/30 shadow-lg'
									src={person.imageUrl}
									alt={`Imagen de ${person.name}`}
								/>
								<div className='text-center mt-6 space-y-3'>
									<h3 className='text-xl sm:text-2xl font-bold titulo_kaiser'>{person.name}</h3>
									<p className='text-sm sm:text-base font-medium text-gray-300'>{person.role}</p>
									<a
										href={person.linkedin}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors'>
										<svg className='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 24 24'>
											<path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
										</svg>
										LinkedIn
									</a>
									<p className='text-sm leading-relaxed text-gray-400 mt-4'>{person.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
