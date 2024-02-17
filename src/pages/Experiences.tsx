import '../assets/ExperiencesStyle.css';

// icons
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
                <p> Dragnethar is a point-and-click web RPG that Coralis Studio created, and the project I was assigned for my first internship experience. I work as fullstack developer and help updated the game until around version 1.2.5, here are couple of examples that I have done </p>
                <p> Note: All of the wireframe was provided by the company</p>
                <div className="is-dragnethar-experiences">
                    <div style={{display: 'grid', margin:'10px', gridGap:'10px'}}>
                        <CustomSubHeader subHeaderStyle={{color:'var(--Dragnethar-accent)'}} title={"UI Developed and updated"}/>
                        <CustomSliderContainer
                            children={
                            <>
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-player-profile-overhaul'/>} description={"Player profile overhaul"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-player-setting' />} description={"Updated player setting"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-region-overhaul' />} description={"Region overhaul"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-tavern-overhaul' />} description={"Tavern overhaul"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-explore-overhaul' />} description={"Explore overhaul"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-quest-modal' />} description={"Quest Modal"} />
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
                            children={<CustomImageCard className='is-custom-image is-party-system'/>} description={"Party Management"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-party-explore'/>} description={"Exploration while in a party"} />
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
                            children={<CustomImageCard className='is-custom-image is-rockmucher'/>} description={"Rockmuncher"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-magnetic-graunite' />} description={"Magnetic Graunite"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-thermal-graunite' />} description={"Thermal Graunite"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-crimson-brew' />} description={"Crimson Brew"} />
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
                            children={<CustomImageCard className='is-custom-image is-login-menu' />} description={"Start Menu"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-main-menu' />} description={"Main Menu"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-team-management' />} description={"Team Managemenet"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-combat' />} description={"Battle Scenario"} />
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
