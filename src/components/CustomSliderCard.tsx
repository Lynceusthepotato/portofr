import { Card } from "../pages/Experiences";

type CustomSliderCardProps = {
    children: React.ReactNode;
    title: string;
    sliderCardStyle?: React.CSSProperties;
    cardIndex?: number;
    card?: Card;
    onClick?: (card:Card) => void;
}

const DefaultSliderCardStyle:React.CSSProperties = {
    background: 'gray',
    minHeight: '400px',
    maxWidth: '260px',
    borderRadius: '10px',
    transition: 'transform 0.3s ease',
}

export const DragnetharCustomCardTheme: React.CSSProperties = {
    background:'var(--Dragnethar-blue)', 
    border:'2px var(--Dragnethar-accent) solid',
}

export default function CustomSliderCard({children, title, sliderCardStyle, cardIndex, card, onClick}:CustomSliderCardProps) {
    const CustomSliderCardStyle = {...DefaultSliderCardStyle, ...sliderCardStyle}

    const handleClick = () => {
        if (onClick && card) {
            onClick(card);
        }
    }

    return (
        <div key={cardIndex} style={CustomSliderCardStyle} className="is-custom-slider-card" onClick={handleClick}>
            {children}
            <h5 style={{margin:'10px', textAlign:'center'}}> {title} </h5>
        </div>
    );
}