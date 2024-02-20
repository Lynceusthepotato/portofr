import CustomImageCard from "../components/CustomImageCard";
import CustomSliderCard, { DragnetharCustomCardTheme } from "../components/CustomSliderCard";
import CustomSliderContainer from "../components/CustomSliderContainer";
import CustomSubHeader from "../components/CustomSubHeader";
import '../assets/ProjectStyle.css';

type ProjectSection = {
  showModal: (visible: boolean, type: number) => void;
}

export default function Projects({showModal}: ProjectSection) {
  return (
    <div className='is-container is-project'>
      <h2> Project </h2>
      <p style={{padding:'2rem'}}> On the side, I work on some projects. Currently, for the card theme, I'm sticking with the Dragnethar theme until I come up with a suitable color combination. </p>
      <div className="is-project-coding">
        <div style={{display: 'grid', margin:'10px', gridGap:'10px'}}>
            <CustomSubHeader subHeaderStyle={{}} title={"Coding stuff"}/>
            <CustomSliderContainer
                children={
                <>
                <CustomSliderCard 
                sliderCardStyle={DragnetharCustomCardTheme}
                children={<CustomImageCard className='is-custom-image is-personal-tracker'/>} title={"Personal Tracker"}
                onClick={() => window.open('https://github.com/Lynceusthepotato/personal-tracker-fe', '_blank')}
                />
                </>}
            />
        </div>
      </div>
      <div className="is-project-drawing">
        <div style={{display: 'grid', margin:'10px', gridGap:'10px'}}>
            <CustomSubHeader subHeaderStyle={{}} title={"Illustration"}/>
            <CustomSliderContainer
                children={
                <>
                <CustomSliderCard 
                sliderCardStyle={DragnetharCustomCardTheme}
                children={<CustomImageCard className='is-custom-image is-cave'/>} title={"Cavern"} />
                <CustomSliderCard 
                sliderCardStyle={DragnetharCustomCardTheme}
                children={<CustomImageCard className='is-custom-image is-ned'/>} title={"Never Ending Dream"} />
                <CustomSliderCard 
                sliderCardStyle={DragnetharCustomCardTheme}
                children={<CustomImageCard className='is-custom-image is-erf'/>} title={"Elden Ring Fanart"} />
                </>}
            />
        </div>
      </div>
    </div>
  )
}
