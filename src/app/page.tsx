import ImageComponent from "./components/ImageComponent";
import ListComponent from "./components/ListComponent";

export default function Home() 
{
  return (
    <div> 
      <h2>Introduction</h2>
      <ImageComponent />
      <p> 
        Hello there! My name is Sovannara Tav. I am an undergrad student at the University of
        Washington Bothell. I am pursuing a background in computer science and software engineering
        to grow the technical and soft skills to prepare for the transition into the workforce. In
        transitioning into the workforce, I aspire to excel as a successful computing professional
        in the software development industry, leveraging my skill set to contribute to life-changing
        products and services driven by software. For this proof of concept website application, I
        will be learning front end development as well as the tools and technologies used, and
        applying human-computer interaction (HCI) principles.
      </p>

      <h2>Interests</h2>
      <ol>
        <li>Videogames</li>
        <li>Back end development</li>
        <li>Learning new software tools and technologies</li>
      </ol>

      <ListComponent />
    </div>
  );
}
