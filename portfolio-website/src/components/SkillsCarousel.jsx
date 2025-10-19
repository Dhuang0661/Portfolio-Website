import "./SkillsCarousel.css";
import { ReactComponent as ReactLogo } from "../assets/react.svg";
import { ReactComponent as TerraformLogo } from "../assets/terraform.svg";
import { ReactComponent as NodeLogo } from "../assets/nodedotjs.svg";
import { ReactComponent as PythonLogo } from "../assets/python.svg";
import { ReactComponent as HTMLLogo } from "../assets/html5.svg";
import { ReactComponent as JSLogo } from "../assets/javascript.svg";
import { ReactComponent as GoogleCloudLogo } from "../assets/googlecloud.svg";
import { ReactComponent as ArduinoLogo } from "../assets/arduino.svg";

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
