import ImageComponent from "./components/ImageComponent";

export default function Home() 
{
  return (
    <div> 
      <h1> Sovannara Tav </h1>
      <ImageComponent />

      <h2> Introduction </h2>
      <p> 
        Hello there! My name is Sovannara Tav. I am a junior undergrad student at the University of
        Washington Bothell. I am pursuing a background in computer science and software engineering
        to grow the technical and soft skills to prepare for the transition into the workforce. In
        transitioning into the workforce, I aspire to excel as a successful computing professional
        in the software development industry, leveraging my skill set to contribute to life-changing
        products and services driven by software.
      </p>

      <h2> Interests </h2>
      <ol>
        <li> Videogames </li>
        <li> Backend development </li>
        <li> Learning new software tools and technologies </li>
      </ol>

      <h2> Links </h2>
      <ul>
        <li> 
            <a href="https://www.linkedin.com/in/sovannara-tav"> LinkedIn </a> 
        </li>
      </ul>

      <script src="main.js"></script>
    </div>
  );
}
