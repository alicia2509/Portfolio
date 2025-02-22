/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} downloadURL Url de descarga
 * @property {string} itchioURL Url de Itchio
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: '/Portfolio/img/coyote.jpg',
		title: 'El Coyote',
		descripcion:
			'Técnica: Escultura en Barro y positivada en Escayola. Dimensiones: 85 x 66 cm. Fecha: 2023',
		downloadURL: '/Portfolio/docs/Coyote.zip',
		anim: 'fade-right',
	},
	{
		imgSrc: '/Portfolio/img/liebre.png',
		title: 'La Liebre',
		descripcion:
			'Técnica: Escultura en Bronce. Dimensiones: 45 x 25 x 15’5. Fecha: 2024',
		downloadURL: '/Portfolio/docs/liebre.zip',
		anim: 'fade-right',
	},
	{
		imgSrc: '/Portfolio/img/grabado.png',
		title: 'Introspección',
		descripcion:
			'Técnica: Grabado. Formato: 56 x 38,5. Fecha: 2024',
		downloadURL: '/Portfolio/docs/Introspección.zip',
		anim: 'fade-right',
	},
	{
		imgSrc: '/Portfolio/img/Proyectos.png',
		title: 'Proyectos',
		descripcion:
			'',
		downloadURL: '/Portfolio/docs/proyectos.zip',
		anim: 'fade-right',
	},
	{
		imgSrc: '/Portfolio/img/Videojuegos.png',
		title: 'Videojuegos',
		descripcion:
			'',
		downloadURL: '/Portfolio/docs/Videojuegos.zip',
		itchioURL: 'https://turbobutateam.itch.io/extinct-spirit',
		anim: 'fade-right',
	}
];

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
	};
});
