import artica from '../images/artica.jpg';
import nasa from '../images/nasa.jpg';
import weather from '../images/weather.jpg';

const mainProjects = [
    {
        name: "Artica Furniture",
        featured: true,
        description: "Artica is an interior modelling and furniture design website. It features multiple pages with a cart functionality. Users are able to browse items and add multiple items to cart.",
        tags: ["React", "HTML", "CSS", "JS", "React Router"],
        github: "https://github.com/SuKaiwen/Artica",
        image: artica
    },
    {
        name: "NASA Images",
        featured: true,
        description: "An application that takes images from NASA API displays it to the user. User can view the image of the day or search through a gallery of images and their respective meta data.",
        tags: ["Next JS", "HTML", "CSS", "JS", "NASA API"],
        github: "https://github.com/SuKaiwen/nasa-project",
        image: nasa
    },
    {
        name: "Weather Application",
        featured: true,
        description: "Developed a weather application that fetches from OpenWeatherAPI to display the weather and forecast of various cities across the world.",
        tags: ["Next JS", "HTML", "CSS", "JS", "OpenWeatherMaps API"],
        github: "https://github.com/SuKaiwen/next-weather",
        image: weather
    }
]

export default mainProjects