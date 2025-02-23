const SectionContacto = () => {
	return (
		<section id='contacto' className='min-h-screen flex justify-center items-center py-20'>
			<div className='container mx-auto px-6 lg:px-8'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center'>
					<div className='flex flex-col space-y-6 md:space-y-8'>
						<h2 className='text-4xl lg:text-5xl font-bold text-center md:text-left titulo_kaiser h2_font'>¿Quieres info?</h2>
						<p className='text-lg lg:text-xl text-white/90 leading-relaxed'>
							Estamos aquí para ayudarte. Puedes contactarnos por correo electrónico, WhatsApp, o Instagram.
						</p>
						<div className='flex flex-col space-y-4'>
							<a
								href='mailto:juanlov4321@gmail.com'
								className='btn btn-primary flex items-center gap-4 px-6 py-3 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20'>
								<img src='https://img.icons8.com/3d-fluency/94/mail.png' alt='mail' className='w-8 h-8' />
								<span className='font-semibold'>Correo Electrónico</span>
							</a>

							<a
								href='https://www.instagram.com/kaiser_soft/'
								className='btn btn-secondary flex items-center gap-4 px-6 py-3 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20'>
								<img src='https://img.icons8.com/3d-fluency/94/instagram-new.png' alt='instagram' className='w-8 h-8' />
								<span className='font-semibold'>Instagram</span>
							</a>
						</div>
					</div>
					<div className='relative'>
						<img
							src='illustraciones/Contact-us-bro.webp'
							alt='Contact Illustration'
							className='w-full h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionContacto;
