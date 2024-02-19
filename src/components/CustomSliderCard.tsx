
type CustomSliderCardProps = {
    children: React.ReactNode;
    title: string;
    sliderCardStyle?: React.CSSProperties;
    onClick?: () => void;
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

export default function CustomSliderCard({children, title, sliderCardStyle, onClick}:CustomSliderCardProps) {
    const CustomSliderCardStyle = {...DefaultSliderCardStyle, ...sliderCardStyle}
    return (
        <div style={CustomSliderCardStyle} className="is-custom-slider-card" onClick={onClick}>
            {children}
            <p style={{margin:'10px'}}> {title} </p>
        </div>
    );
}