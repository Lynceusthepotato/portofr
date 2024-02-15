import '../assets/ExperiencesStyle.css';

// custom icons
import CodeIgniterSvg from '../assets/svgs/codeigniter-logo-svg-vector.svg';
import UnitySvg from '../assets/svgs/unity3d-icon.svg';
import MariaDBSvg from '../assets/svgs/mariadb-logo-svg-vector.svg';

// components
import CustomIcons from '../components/CustomIcons';
import CustomSliderCard, { DragnetharCustomCardTheme } from '../components/CustomSliderCard';
import CustomImageCard from '../components/CustomImageCard';
import CustomSliderContainer from '../components/CustomSliderContainer';
import CustomSubHeader from '../components/CustomSubHeader';

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
                <p> Dragnethar is a point-and-click web RPG that Coralis Studio created, and where I got my first internship experience </p>
                <div className="is-dragnethar-experiences">
                    <div style={{display: 'grid', margin:'10px', gridGap:'10px'}}>
                        <CustomSubHeader subHeaderStyle={{color:'var(--Dragnethar-accent)'}} title={"UI Developed and updated"}/>
                        <p> All of the wireframe was provided by the company</p>
                        <CustomSliderContainer
                            children={
                            <>
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard />} description={"Player profile overhaul"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard />} description={"Player profile setting changed"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard />} description={"Region overhaul"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard />} description={"Tavern overhaul"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard />} description={"Explore overhaul"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard />} description={"Quest Modal"} />
                            </>}
                        />
                    </div>
                    <div style={{display: 'grid', margin:'10px', gridGap:'10px'}}>
                        <CustomSubHeader subHeaderStyle={{color:'var(--Dragnethar-accent)'}} title={"Party system Developed"}/>
                        <CustomSliderContainer
                            children={
                            <>
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard />} description={"Party Management"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard />} description={"Exploration while in a party"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard />} description={"Combat while in a party"} />
                            </>}
                        />
                    </div>
                    <div style={{display: 'grid', margin:'10px', gridGap:'10px'}}>
                        <CustomSubHeader subHeaderStyle={{color:'var(--Dragnethar-accent)'}} title={"Quality-of-life features Developed"}/>
                        <CustomSliderContainer
                            children={
                            <>
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard />} description={"Multiple container open feature"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard />} description={"Multiple salvage feature"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard />} description={"Equipment loadout feature"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard />} description={"Equipment lock system"} />
                            </>}
                        />
                    </div>
                    <div style={{display: 'grid', margin:'10px', gridGap:'10px'}}>
                        <CustomSubHeader subHeaderStyle={{color:'var(--Dragnethar-accent)'}} title={"Items and Monster Designed and Illustrated"}/>
                        <CustomSliderContainer
                            children={
                            <>
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard />} description={"Monster 1"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard />} description={"Rock 1"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard />} description={"Rock 2"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard />} description={"Rock 3"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard />} description={"Healing"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard />} description={"Cotton"} />
                            </>}
                        />
                    </div>
                    <div style={{display: 'grid', margin:'10px', gridGap:'10px'}}>
                        <CustomSubHeader subHeaderStyle={{color:'var(--Dragnethar-accent)'}} title={"Rhunnia Developed: Auto-fight Minigame"}/>
                        <CustomSliderContainer
                            children={
                            <>
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard />} description={"Start Menu"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard />} description={"Main Menu"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard />} description={"Team Managemenet"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard />} description={"Battle Scenario"} />
                            </>}
                        />
                    </div>
                    <div style={{display: 'grid', margin:'10px', gridGap:'10px'}}>
                        <CustomSubHeader subHeaderStyle={{color:'var(--Dragnethar-accent)'}} title={"and others..."}/>
                        <CustomSliderContainer
                            children={
                            <>
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard />} description={"Artificer Minigame Update"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard />} description={"Trade Hall QoL"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard />} description={"Guild Buff"} />
                            </>}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
