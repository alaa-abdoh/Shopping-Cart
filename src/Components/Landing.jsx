import { Link } from "react-router-dom";
function Landing(){
    return (
        <div className="landing">
            <div className="container">
                <div>
                    <h1>Sustainable Shopping Made Easy</h1>
                    <p>We connect you with emerging brands who care about people and the planet. Each item is thoughtfully curated and carefully vetted.</p>
                    <Link to="/Products">SHOP NOW</Link>
                </div>
            </div>
        </div>
    )
}
export default Landing;