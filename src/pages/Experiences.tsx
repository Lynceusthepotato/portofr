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
import { CSSProperties, useState } from 'react';
import CustomCardBox from '../components/CustomCardBox';

export type Card = {
    title: string,
    description: string,
    pictureClassName: string,
    pictureType: string, // 0 -> Horizontal || 1 ^ vertical
    theme: string
}

type Cards = {
    headerTitle: string,
    subHeaderColor: CSSProperties,
    cardList: Card[];
}

type ExperienceSection = {
    showModal: (visible: boolean, type: number, card: Card, modalTheme: React.CSSProperties) => void;
}

export default function Experiences({showModal}: ExperienceSection) {
    const [cards, setCards] = useState<Cards[]>([
        {
        headerTitle: "UI Developed and Updated",
        subHeaderColor: {color: "var(--Dragnethar-accent)"},
        cardList: [
            {
                title: "Player profile overhaul",
                description: "Revamped player profile, which includes the inventory. Nearly everything has been updated, except for the equipment section, which was simply repositioned.",
                pictureClassName: "is-player-profile-overhaul",
                pictureType: "vertical",
                theme: "Dragnethar",
            },
            {
                title: "Updated player setting",
                description: "Transferred existing settings and integrated additional settings into the player profile.",
                pictureClassName: "is-player-setting",
                pictureType: "vertical",
                theme: "Dragnethar",
            },
            {
                title: "Region overhaul",
                description: 'Updated the region page by compacting the icons to display more buildings in columns (depending on screen size) and added information near "Region Wealth" when there are building buffs. Additionally, introduced spots in the middle and top left for illustrations to better describe the region.',
                pictureClassName: "is-region-overhaul",
                pictureType: "horizontal",
                theme: "Dragnethar",
            },
            {
                title: "Tavern overhaul",
                description: "Revamped the tavern page by relocating the old quest section to a different page and added illustrations in the middle. Additionally, worked on the UI for the tavern chat (For clarification I only worked on the UI, the logic was handled by another member of the team).",
                pictureClassName: "is-tavern-overhaul",
                pictureType: "horizontal",
                theme: "Dragnethar",
            },
            {
                title: "Explore overhaul",
                description: "Revamp  the exploration page to make it easier to distinguish between options/places with the help of illustrations. Also, added a leaderboard and information about monsters when selecting a place.",
                pictureClassName: "is-explore-overhaul",
                pictureType: "horizontal",
                theme: "Dragnethar",
            },
            {
                title: "Quest Modal",
                description: "While updating the tavern, moved the quests to the main page and implemented a hovering quest icon (as seen in the explore overhaul section on the bottom left). Created a modal to display, redeem, and collect quests.",
                pictureClassName: "is-quest-modal",
                pictureType: "vertical",
                theme: "Dragnethar",
            },
        ]
        },
        {
        headerTitle: "Party system Developed",
        subHeaderColor: {color: "var(--Dragnethar-accent)"},
        cardList: [
            {
                title: "Party Management",
                description: "Implemented a party system, allowing players to invite others and collaborate as a team. This feature offers more gameplay options; players focused on trading or storyline can now enlist help for exploration. Additionally, commissioners can compensate mercenaries with in-game currency for each exploration. To prevent abuse, there's a limit on how much a party can pay mercenaries.",
                pictureClassName: "is-party-system",
                pictureType: "vertical",
                theme: "Dragnethar",
            },
            {
                title: "Party Exploration",
                description: "When exploring in a party, there's a chance to encounter multiple enemies. This adjustment aims to balance the exploration experience while ensuring solo players can still enjoy the game. Additionally, the cost of exploration varies based on the number of players in the party.",
                pictureClassName: "is-party-explore",
                pictureType: "vertical",
                theme: "Dragnethar",
            },
            {
                title: "Party Combat",
                description: "The Party Management and Exploration sections encompass all updates made to the party system. In each area, I revised both the logic and (UI). The most notable UI changes happened in the combat result, featuring simple animations and a revamped display.",
                pictureClassName: "is-party-combat",
                pictureType: "horizontal",
                theme: "Dragnethar",
            },
        ]
        },
        {
        headerTitle: "Quality-of-life features Developed",
        subHeaderColor: {color: "var(--Dragnethar-accent)"},
        cardList: [
            {
                title: "Multiple container open feature",
                description: "Added a feature to open multiple container instead one of a time.",
                pictureClassName: "is-multiple-container",
                pictureType: "vertical",
                theme: "Dragnethar",
            },
            {
                title: "Multiple salvage feature",
                description: "Added a feature to salvage multiple items at a time.",
                pictureClassName: "is-multiple-salvage",
                pictureType: "vertical",
                theme: "Dragnethar",
            },
            {
                title: "Equipment loadout feature",
                description: 'Implemented a feature allowing players to save and load specific loadouts, streamlining the process of changing gear.',
                pictureClassName: "is-loadout-feature",
                pictureType: "horizontal",
                theme: "Dragnethar",
            },
            {
                title: "Equipment lock system",
                description: "Added a lock feature for items to prevent accidental removal of important items and eliminate the risk of being salvaged.",
                pictureClassName: "is-item-lock",
                pictureType: "horizontal",
                theme: "Dragnethar",
            },
        ]
        },
        {
        headerTitle: "Items and Monster Designed and Illustrated",
        subHeaderColor: {color: "var(--Dragnethar-accent)"},
        cardList: [
            {
                title: "Rockmuncher",
                description: "Designed and illustrated rockmuncher following the description, representing the form of the monster before it evolved into it.",
                pictureClassName: "is-rockmucher",
                pictureType: "vertical",
                theme: "Dragnethar",
            },
            {
                title: "Magnetic Graunite",
                description: "Designed and illustrated Magnetic Graunite following its description.",
                pictureClassName: "is-magnetic-graunite",
                pictureType: "vertical",
                theme: "Dragnethar",
            },
            {
                title: "Thermal Graunite",
                description: 'Designed and illustrated Thermal Graunite following its description.',
                pictureClassName: "is-thermal-graunite",
                pictureType: "horizontal",
                theme: "Dragnethar",
            },
            {
                title: "Crimson Brew",
                description: "Designed and illustrated Crimson Brew following its description, and the base item that is used to craft crimson brew.",
                pictureClassName: "is-crimson-brew",
                pictureType: "horizontal",
                theme: "Dragnethar",
            },
        ]
        },
        {
        headerTitle: "Rhunnia Developed: Auto-fight Minigame",
        subHeaderColor: {color: "var(--Dragnethar-accent)"},
        cardList: [
            {
                title: "Start Menu",
                description: "Designed and developed an auto-battler minigame called Rhunnia. The game's calculations are performed server-side to minimize the risk of players exploiting the minigame, with Unity utilized solely for the interface. This is the start menu, which displays the login menu. However, since players can only access the minigame while logged in to Dragnethar, the login menu should automatically redirect to the main menu.",
                pictureClassName: "is-login-menu",
                pictureType: "vertical",
                theme: "Dragnethar",
            },
            {
                title: "Main Menu",
                description: "Designed and developed an auto-battler minigame called Rhunnia. The game's calculations are performed server-side to minimize the risk of players exploiting the minigame, with Unity utilized solely for the interface. The main menu serves as the home interface for Rhunnia, offering options to start battles, access team management, and view the gallery. Here, players can also track their current stage progress, observe the current enemy, monitor their health, and monitor their in-game currency.",
                pictureClassName: "is-main-menu",
                pictureType: "vertical",
                theme: "Dragnethar",
            },
            {
                title: "Team Managemenet",
                description: "Designed and developed an auto-battler minigame called Rhunnia. The game's calculations are performed server-side to minimize the risk of players exploiting the minigame, with Unity utilized solely for the interface. Team management serves as the hub for players to strategize their team composition, making sure to be able to compete. Additionally, players can purchase and upgrade their team members from this interface",
                pictureClassName: "is-team-management",
                pictureType: "horizontal",
                theme: "Dragnethar",
            },
            {
                title: "Battle Scenario",
                description: "Designed and developed an auto-battler minigame called Rhunnia. The game's calculations are performed server-side to minimize the risk of players exploiting the minigame, with Unity utilized solely for the interface. Battle can be accessed through the main menu, and in here player can see the combat animation and information regarding the fight.",
                pictureClassName: "is-combat",
                pictureType: "horizontal",
                theme: "Dragnethar",
            },
        ]
        },
        {
        headerTitle: "and others...",
        subHeaderColor: {color: "var(--Dragnethar-accent)"},
        cardList: [
            {
                title: "Artificer Minigame Update",
                description: "Updated the artificer to include a minigame. Now, all items have a limit on the number, restricting unlimited enhancement process. The checkbox indicates whether the item possesses any hidden powers, and if checked, it signifies that the corresponding skills for that item can be unlocked",
                pictureClassName: "is-artificer",
                pictureType: "vertical",
                theme: "Dragnethar",
            },
            {
                title: "Trade Hall QoL",
                description: "Added a small update to the trade hall: the 'Max' button. This feature calculates the player's available funds and automatically inputs the maximum amount they can purchase.",
                pictureClassName: "is-trade-hall",
                pictureType: "vertical",
                theme: "Dragnethar",
            },
            {
                title: "Building Buff",
                description: 'Implemented building buffs that correspond to the building level, with variations tailored to each region.',
                pictureClassName: "is-building-buff",
                pictureType: "horizontal",
                theme: "Dragnethar",
            },
            {
                title: "Pagination",
                description: "Updated pagination in leaderboard tavern",
                pictureClassName: "is-pagination",
                pictureType: "horizontal",
                theme: "Dragnethar",
            },
        ]
        },
    ]);

    const handleModalCardDragnethar = (card: Card) => {
        showModal(true, 0, card, DragnetharCustomCardTheme);
    }

    return (
        <div className='is-container is-experiences'>
            <div className='is-experiences-header'>
                <h2 style={{textAlign:'center'}}> Experience </h2>
                <p style={{padding: '1rem'}}> Here are my work experiences. The theme used to showcase the work I've done is inspired by the assignments I've assigned to.</p>
                <p style={{padding: '15px', textAlign:'center'}}> :) </p>
            </div>
            <div className='is-coralis-studio'>
                <h3 style={{padding: '1rem'}}> Coralis Studio </h3>
                <p className='is-coralis-text'> Coralis Studio is a company that specializes in two main areas: IT development and game development. They offer services including website development, web application development, game design and development, as well as hybrid development. </p>
            </div>
            <div className="is-dragnethar">
                <div className="is-dragnethar-header">
                    <div className='is-dragnethar-header-tool'>
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
                    <p style={{padding: '1rem'}}> Dragnethar is a point-and-click web RPG developed by Coralis Studio, and it was the project I was assigned during my first internship. As a full-stack developer, I contributed to updating the game until approximately version 1.2.5. Here are a couple of examples of my contributions: </p>
                    <p style={{padding: '1rem'}}> Note: All of the wireframe was provided by the company</p>
                </div>
                <div className="is-dragnethar-experiences">
                    {cards.map((cardsTemp, index) => (
                        <CustomCardBox
                            cardMainIndex={index}
                            customHeaderChildren={<CustomSubHeader title={cardsTemp.headerTitle} subHeaderStyle={cardsTemp.subHeaderColor}/>}
                            customCardSliderContainer={
                                <CustomSliderContainer 
                                    children={
                                        <>
                                            {cardsTemp.cardList.map((card, cardIndex) => (
                                                <CustomSliderCard
                                                    cardIndex={cardIndex}
                                                    sliderCardStyle={DragnetharCustomCardTheme}
                                                    children={
                                                        <CustomImageCard className={`is-custom-image ${card.pictureClassName}`} />
                                                    }
                                                    title={card.title}
                                                    card={card}
                                                    onClick={handleModalCardDragnethar}
                                                />
                                            ))}
                                        </>
                                    }
                                />
                            }
                        />
                    )
                    )}
                </div>
            </div>
        </div>
    )
}
