import './Sidebar.css';
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

// Define array of links
const links = [
    { src: home, text: 'Home', category: 0 },
    { src: game_icon, text: 'Gaming', category: 20 },
    { src: automobiles, text: 'Automobiles', category: 2 },
    { src: sports, text: 'Sports', category: 17 },
    { src: entertainment, text: 'Entertainment', category: 24 },
    { src: tech, text: 'Technology', category: 28 },
    { src: music, text: 'Music', category: 10 },
    { src: blogs, text: 'Blog', category: 22 },
    { src: news, text: 'News', category: 25 }
];

const subscribers = [
    { src: jack, text: 'PewDiePie' },
    { src: simon, text: 'Mr.Beast' },
    { src: tom, text: 'Justin Bieber' },
    { src: megan, text: '5-Minutes Craft' },
    { src: cameron, text: 'Nas Daily' },
];

export default function Sidebar({sidebar, category, setCategory}){
    return(
        <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
            <div className="shortcut-links">
                {/* Map over links array and render each link */}
                {links.map((link, index) => (
                    <div className={`side-link ${link.category === category ? "active" : "" }`} key={index} onClick={() => setCategory(link.category)}>
                        <img src={link.src} alt='' />
                        <p>{link.text}</p>
                    </div>
                ))}
            </div>
            <hr />
            <div className="subscribed-list">
                <h3>Subscribed</h3>
                {subscribers.map((subscriber, index) => {
                    return(
                    <div className='side-link' key={index}>
                        <img src={subscriber.src} alt='' />
                        <p>{subscriber.text}</p>
                    </div>)
                })}
            </div>
        </div>
    )
}