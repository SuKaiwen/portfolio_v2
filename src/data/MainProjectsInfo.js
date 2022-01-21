import artica from '../images/artica.jpg';
import nasa from '../images/nasa.jpg';
import weather from '../images/weather.jpg';

import small_artica from '../images/SMALL_artica.jpg';
import small_artica2 from '../images/SMALL_artica2.jpg';
import small_artica3 from '../images/SMALL_artica3.jpg';

import small_nasa from '../images/SMALL_NASA1.jpg';
import small_nasa2 from '../images/SMALL_NASA2.jpg';
import small_nasa3 from '../images/SMALL_NASA3.jpg';

import small_weather from '../images/SMALL_weather1.jpg';
import small_weather2 from '../images/SMALL_weather2.jpg';
import small_weather3 from '../images/SMALL_weather3.jpg';

const mainProjects = [
    {
        name: "Artica Furniture",
        featured: true,
        description: "Artica is an interior modelling and furniture design website. It features multiple pages with a cart functionality. Users are able to browse items and add multiple items to cart.",
        tags: ["React", "HTML", "CSS", "JS", "React Router"],
        github: "https://github.com/SuKaiwen/Artica",
        image: artica,
        subImage: [
            artica,
            small_artica,
            small_artica2,
            small_artica3
        ]
    },
    {
        name: "NASA Images",
        featured: true,
        description: "An application that takes images from NASA API displays it to the user. User can view the image of the day or search through a gallery of images and their respective meta data.",
        tags: ["Next JS", "HTML", "CSS", "JS", "NASA API"],
        github: "https://github.com/SuKaiwen/nasa-project",
        image: nasa,
        subImage: [
            nasa,
            small_nasa,
            small_nasa2,
            small_nasa3
        ]
    },
    {
        name: "Weather Application",
        featured: true,
        description: "Developed a weather application that fetches from OpenWeatherAPI to display the weather and forecast of various cities across the world.",
        tags: ["Next JS", "HTML", "CSS", "JS", "OpenWeatherMaps API"],
        github: "https://github.com/SuKaiwen/next-weather",
        image: weather,
        subImage: [
            weather,
            small_weather,
            small_weather2,
            small_weather3
        ]
    }
]

export default mainProjects