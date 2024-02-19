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
            <h2> Experience </h2>
            <p style={{padding: '1rem'}}> Here are my work experiences, and I will also endeavor to align with the theme utilized for the project I was assigned to~</p>
            <p> :) </p>
            <div className='is-coralis-studio'>
                <h2> Coralis Studio </h2>
                <p> Coralis Studio is a company that specializes in two main areas: IT development and game development. They offer services including website development, web application development, game design and development, as well as hybrid development. </p>
            </div>
            <div className="is-dragnethar">
                <div className="is-dragnethar-header">
                    <h4> Dragnethar </h4>
                    <div className="is-tech-use">
                        <p> Tech use: </p>
                        <div className='is-tech-content'>
                            <CustomIcons imageSrc={CodeIgniterSvg} tooltipTitle='CodeIgniter 3'/>
                            <CustomIcons imageSrc={MariaDBSvg} tooltipTitle='MariaDB'/>
                            <CustomIcons imageSrc={UnitySvg} tooltipTitle='Unity'/>
                        </div>
                    </div>
                </div>
                <p> Dragnethar is a point-and-click web RPG developed by Coralis Studio, and it was the project I was assigned during my first internship. As a full-stack developer, I contributed to updating the game until approximately version 1.2.5. Here are a couple of examples of my contributions: </p>
                <p> Note: All of the wireframe was provided by the company</p>
                <div className="is-dragnethar-experiences">
                    <div style={{display: 'grid', margin:'10px', gridGap:'10px'}}>
                        <CustomSubHeader subHeaderStyle={{color:'var(--Dragnethar-accent)'}} title={"UI Developed and updated"}/>
                        <CustomSliderContainer
                            children={
                            <>
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-player-profile-overhaul'/>} title={"Player profile overhaul"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-player-setting' />} title={"Updated player setting"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-region-overhaul' />} title={"Region overhaul"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-tavern-overhaul' />} title={"Tavern overhaul"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-explore-overhaul' />} title={"Explore overhaul"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-quest-modal' />} title={"Quest Modal"} />
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
                            children={<CustomImageCard className='is-custom-image is-party-system'/>} title={"Party Management"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-party-explore'/>} title={"Party Exploration"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-party-combat'/>} title={"Party Combat"} />
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
                            children={<CustomImageCard className='is-custom-image is-multiple-container' />} title={"Multiple container open feature"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-multiple-salvage' />} title={"Multiple salvage feature"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-loadout-feature' />} title={"Equipment loadout feature"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-item-lock' />} title={"Equipment lock system"} />
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
                            children={<CustomImageCard className='is-custom-image is-rockmucher'/>} title={"Rockmuncher"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-magnetic-graunite' />} title={"Magnetic Graunite"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-thermal-graunite' />} title={"Thermal Graunite"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-crimson-brew' />} title={"Crimson Brew"} />
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
                            children={<CustomImageCard className='is-custom-image is-login-menu' />} title={"Start Menu"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-main-menu' />} title={"Main Menu"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-team-management' />} title={"Team Managemenet"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-combat' />} title={"Battle Scenario"} />
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
                            children={<CustomImageCard className='is-custom-image is-artificer' />} title={"Artificer Minigame Update"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-trade-hall' />} title={"Trade Hall QoL"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-building-buff' />} title={"Building Buff"} />
                            <CustomSliderCard 
                            sliderCardStyle={DragnetharCustomCardTheme}
                            children={<CustomImageCard className='is-custom-image is-pagination' />} title={"Pagination"} />
                            </>}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
