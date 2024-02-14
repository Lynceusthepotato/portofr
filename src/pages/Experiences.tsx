import '../assets/ExperiencesStyle.css';

// custom icons
import CodeIgniterSvg from '../assets/svgs/codeigniter-logo-svg-vector.svg';
import UnitySvg from '../assets/svgs/unity3d-icon.svg';
import MariaDBSvg from '../assets/svgs/mariadb-logo-svg-vector.svg';

// components
import CustomIcons from '../components/CustomIcons';

export default function Experiences() {

  return (
    <div className='is-container is-experiences'>
        <div className='is-coralis-studio'>
            <h3> Coralis Studio </h3>
            <p> Coralis Studio branches to two kinds, IT development and game development. Coralis Studio provide services such as website development, web application development, game design and development and hybrid development</p>
            <div className="is-dragnethar">
                <div className="is-dragnethar-header">
                    <h4> Dragnethar </h4>
                    <div className="is-tech-use">
                        <p> Tech use: </p>
                        <CustomIcons imageSrc={CodeIgniterSvg} tooltipTitle='CodeIgniter 3'/>
                        <CustomIcons imageSrc={MariaDBSvg} tooltipTitle='MariaDB'/>
                        <CustomIcons imageSrc={UnitySvg} tooltipTitle='Unity'/>
                    </div>
                </div>
                <p> Dragnethar is a point-and-click web RPG that I worked on </p>
                <div>
                    <div>
                        <h5> UI Developed and updated</h5>
                        <div> Put react slider here </div>
                    </div>
                    <div>
                        <h5> party system Developed </h5>
                        <div> Put react slider here </div>
                    </div>
                    <div>
                        <h5> Quality-of-life features Developed </h5>
                        <div> Put react slider here </div>
                    </div>
                    <div>
                        <h5> Party system Developed </h5>
                        <div> Put react slider here </div>
                    </div>
                    <div>
                        <h5> Minigame Developed</h5>
                        <div> Put react slider here </div>
                    </div>
                    <div>
                        <h5> and others... </h5>
                        <div> Put react slider here </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
