import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

export default function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>
                About this project
            </h1>
            <p>
                This is a React app to leave feedback of any product or service 
            </p>
            <p>
                Version : 1.0.0
            </p>
            <Link to="/">Home Page</Link>
        </div>
    </Card>
  )
}
