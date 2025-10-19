import "./SkillsCarousel.css";
import ReactLogo from "../assets/react.svg";
import TerraformLogo from "../assets/terraform.svg";
import NodeLogo from "../assets/nodedotjs.svg";
import PythonLogo from "../assets/python.svg";
import HTMLLogo from "../assets/html5.svg";
import JSLogo from "../assets/javascript.svg";
import GoogleCloudLogo from "../assets/googlecloud.svg";
import ArduinoLogo from "../assets/arduino.svg";
import cssLogo from "../assets/css3.png";

export default function SkillsCarousel() {
  const skills = [
    { name: "React", logo: ReactLogo },
    { name: "Node.js", logo: NodeLogo },
    { name: "JavaScript", logo: JSLogo },
    { name: "HTML", logo: HTMLLogo },
    { name: "CSS", logo: cssLogo },
    { name: "Google Cloud", logo: GoogleCloudLogo },
    { name: "Terraform", logo: TerraformLogo },
    { name: "Python", logo: PythonLogo },
    { name: "Arduino", logo: ArduinoLogo },
  ];

  // Duplicate array to allow seamless looping
  const loopedSkills = Array(5).fill(skills).flat();

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {loopedSkills.map((skill, index) => (
          <div key={index} className="carousel-item">
            <img src={skill.logo} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
