import { useState } from "react";

const projects = [
    {
        title: "Nudo App",
        description: "Se desarrolló una aplicación web que facilita la interacción con un contrato inteligente basado en el estándar ERC-4626, el cual se especializa en la gestión de vaults para la tokenización de activos. Esta aplicación permitió a los usuarios realizar depósitos y retiros de activos, emitir tokens representativos, y gestionar eficientemente sus inversiones. La interfaz de usuario fue diseñada para asegurar una navegación intuitiva y segura, ofreciendo funcionalidades claves como la visualización de balances, la operatividad de los tokens y el seguimiento del desempeño de los activos gestionados.",
        technologies: ["React", "NextJS", "Tailwind CSS", "CSS3", "HTML5"],
        image: "./projects/nudoApp.jpg",
        authors: ["Leonardo Ramirez"]
    },
    {
        title: "Jobs Chain",
        description: "Proyecto realizado en un hackathon donde buscada mediante un sistema de puntuación hacer match estampando en blockchain, skills y puntuación de ofertas de trabajo",
        technologies: ["Nextjs", "Prisma", "Solidity", "Rainbow Kit", "React", "TypeScript"],
        image: "./projects/jobsChain.png",
    },
    {
        title: "Cammelers",
        description: "Cammelers nace de una plataforma de conexión laboral entre empresas con el uso de EAS(Ethereum Attestation Service) con el fin de que las personas puedan estampar sus certificaciones y skills en la blockchain de Ethereum. De igual manera usando un token ERC-20 para incentivar a las personas a estampar sus skills y certificaciones.",
        technologies: ["Nextjs", "Solidity", "Rainbow Kit", "React", "TypeScript", "MetaMask"],
        image: "./projects/camels.jpeg",
    },
    // {
    //     title: "Plataforma Educativa",
    //     description: "Una solución integral para la educación en línea, que ofrece herramientas colaborativas, gestión de cursos y recursos interactivos para estudiantes y profesores. Esta plataforma apoya el aprendizaje continuo y la interacción dinámica entre los participantes.",
    //     technologies: ["React", "Django", "Tailwind CSS"],
    //     image: "url-to-image-4.jpg",
    // },
    {
        title: "¡Estamos esperando el tuyo!",
        description: "¿Tienes una idea que podría revolucionar tu industria o simplemente mejorar algún aspecto de tu vida diaria? ¡Estamos aquí para ayudarte a convertir esa idea en realidad! Contáctanos y comienza tu proyecto con nosotros.",
        technologies: ["Tu Tecnología Aquí"],
        // image: "url-to-placeholder-image.jpg",
    }
];


const SectionProjects = () => {
    const [expandedProject, setExpandedProject] = useState(null);

    const toggleDescription = (index: any) => {
        setExpandedProject(expandedProject === index ? null : index);
    };

    return (
        <section id="proyectos" className="p-6 md:p-12 flex justify-center items-center">
            <div className="w-3/4">
                <div className="text-center mb-6">
                    <h2 className="mb-10 font-bold text-3xl md:text-5xl titulo_kaiser">Proyectos</h2>
                    <p style={{ maxWidth: "60ch", margin: "auto" }} className="text-white">
                        Aquí puedes ver algunos de los proyectos que hemos participado y desarrollado, destacando nuestras capacidades y experiencia en diversas tecnologías.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="card rounded-lg shadow-lg p-6 overflow-hidden">
                            {project.image ? (
                                <img src={project.image} alt={project.title} className="w-full h-40 object-cover mb-4 rounded-xl" />
                            ) : null}

                            <h3 className="text-xl font-bold mb-2 titulo_kaiser">{project.title}</h3>
                            <p className={`mb-4 text-sm text-white ${expandedProject === index ? '' : 'overflow-ellipsis overflow-hidden'}`} style={{ maxHeight: expandedProject === index ? 'none' : '5em' }}>
                                {project.description}
                            </p>
                            <p className="text-sm mb-4 text-white"><strong>Tecnologías:</strong> {project.technologies.join(", ")}</p>
                            <button className="titulo_kaiser hover:text-blue-600" onClick={() => toggleDescription(index)}>
                                {expandedProject === index ? 'Ver menos' : 'Ver más'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SectionProjects;
