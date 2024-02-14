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
        <h3> Experiences </h3>
        <p style={{padding: '1rem'}}> Below are my experiences from work, I will also try to follow the theme that is used for the project that I was assigned to~</p>
        <p> :) </p>
        <div className='is-coralis-studio'>
            <h3> Coralis Studio </h3>
            <p> Coralis Studio is a company that branches into two kinds, IT development and game development. Coralis Studio provide services such as website development, web application development, game design and development and hybrid development</p>
        </div>
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
                <div style={{display: 'grid'}}>
                    <h5 style={{color:'rgb(191, 180, 143)'}}> UI Developed and updated</h5>
                    <div className='is-slider-container' style={{overflowX:'auto'}}>
                        <div style={{display: 'flex', gap:'1rem'}}>
                            <div style={{background:'gray', minHeight:'400px', maxWidth:'350px', borderRadius:'10px'}}> 
                                <div style={{background:'var(--color-palette-orange)', minWidth:'300px', minHeight:'300px'}}/>
                                <p> Updated profile UI </p>
                            </div>
                            <div style={{background:'gray', minHeight:'400px', maxWidth:'350px', borderRadius:'10px'}}> 
                                <div style={{background:'var(--color-palette-orange)', minWidth:'300px', minHeight:'300px'}}/>
                                <p> Updated profile UI </p>
                            </div>
                            <div style={{background:'gray', minHeight:'400px', maxWidth:'350px', borderRadius:'10px'}}> 
                                <div style={{background:'var(--color-palette-orange)', minWidth:'300px', minHeight:'300px'}}/>
                                <p> Updated profile UI </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h5 style={{color:'rgb(191, 180, 143)'}}> party system Developed </h5>
                    <div> Put react slider here </div>
                </div>
                <div>
                    <h5 style={{color:'rgb(191, 180, 143)'}}> Quality-of-life features Developed </h5>
                    <div> Put react slider here </div>
                </div>
                <div>
                    <h5 style={{color:'rgb(191, 180, 143)'}}> Designed and Illustrated in-game items and monsters </h5>
                    <div> Put react slider here </div>
                </div>
                <div>
                    <h5 style={{color:'rgb(191, 180, 143)'}}> Minigame Developed</h5>
                    <div> Put react slider here </div>
                </div>
                <div>
                    <h5 style={{color:'rgb(191, 180, 143)'}}> and others... </h5>
                    <div> Put react slider here </div>
                </div>
            </div>
        </div>
    </div>
  )
}
