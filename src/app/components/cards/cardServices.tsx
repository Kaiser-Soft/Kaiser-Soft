import React from "react";
import "./card.css";
import Image from "next/image";

interface CardServicesProps {
	title: string;
	description: string;
	image: string;
	className?: string;
}

const CardServices = ({ title, description, image, className }: CardServicesProps) => {
	return (
		<div className={`card ${className} image-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`}>
			<figure className='relative aspect-video'>
				<Image
					src={image}
					alt={title}
					fill
					className='object-cover transition-transform duration-300 hover:scale-110'
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					quality={85}
					loading='lazy'
					placeholder='blur'
					blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRseHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/2wBDAR0XFw8NDxsPEA8PEBEQHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
				/>
				<div className='absolute inset-0 bg-black/40 hover:bg-black/50 transition-colors duration-300' />
			</figure>
			<div className='card-body p-8 relative z-10 flex flex-col gap-4'>
				<h2 className='card-title titulo_kaiser text-[20px] md:text-[30px] font-semibold text-white hover:text-primary transition-colors duration-200'>
					{title}
				</h2>
				<p className='text-md text-white/90 text-[14px] md:text-[20px] leading-relaxed'>{description}</p>
			</div>
		</div>
	);
};

export default CardServices;
