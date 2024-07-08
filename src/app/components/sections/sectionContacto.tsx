const SectionContacto = () => {
	return (
		<section id="contacto" className="min-h-screen flex justify-center items-center">
			<div className="container mx-auto px-4 py-10">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
					<div className="flex flex-col space-y-4">
						<h2 className="text-3xl font-bold text-center md:text-left titulo_kaiser h2_font">¿Quieres info?</h2>
						<p className="text-lg text-white">Estamos aquí para ayudarte. Puedes contactarnos por correo electrónico, WhatsApp, o Instagram.</p>
						<div className="space-y-3">
							<a href="mailto:contacto@kaiser-soft.com" className="btn btn-primary flex items-center justify-center md:justify-start gap-3 px-5 py-2 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-blue-600">
								<img src="https://img.icons8.com/3d-fluency/94/mail.png" alt="mail" className="w-8 h-8" />
								Correo Electrónico
							</a>
							<a href="https://wa.me/573026472702" className="btn btn-accent flex items-center justify-center md:justify-start gap-3 px-5 py-2 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-green-600">
								<img src="https://img.icons8.com/3d-fluency/94/whatsapp.png" alt="whatsapp" className="w-8 h-8" />
								WhatsApp
							</a>
							<a href="https://www.instagram.com/kaiser_soft/" className="btn btn-secondary flex items-center justify-center md:justify-start gap-3 px-5 py-2 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-purple-600">
								<img src="https://img.icons8.com/3d-fluency/94/instagram-new.png" alt="instagram" className="w-8 h-8" />
								Instagram
							</a>
						</div>
					</div>
					<div>
						<img src="illustraciones/Contact-us-bro.webp" alt="Contact Illustration" className="w-full h-auto shadow-lg rounded-lg" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionContacto;
