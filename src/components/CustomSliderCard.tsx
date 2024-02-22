import { Card } from "../pages/Experiences";

type CustomSliderCardProps = {
    children: React.ReactNode;
    title: string;
    sliderCardStyle?: React.CSSProperties;
    cardIndex?: number;
    card?: Card;
    customFunctionType?: number; // 0 = card function (with card parameter) || 1 = customFunction (without any parameter) 
    cardFunction?: (card:Card) => void;
    customFunction?: () => void;
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

export default function CustomSliderCard({children, title, sliderCardStyle, cardIndex, card, customFunctionType = 0, cardFunction, customFunction}:CustomSliderCardProps) {
    const CustomSliderCardStyle = {...DefaultSliderCardStyle, ...sliderCardStyle}

    const handleClick = () => {
        switch(customFunctionType) {
            case 0: 
                if (cardFunction && card) {
                    cardFunction(card);
                }
                break;
            case 1:
                if (customFunction) {
                    customFunction();
                }
        }
    }

    return (
        <div key={cardIndex} style={CustomSliderCardStyle} className="is-custom-slider-card" onClick={handleClick}>
            {children}
            <h5 style={{margin:'10px', textAlign:'center'}}> {title} </h5>
        </div>
    );
}