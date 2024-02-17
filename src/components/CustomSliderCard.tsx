
type CustomSliderCardProps = {
    children: React.ReactNode;
    description: string;
    sliderCardStyle?: React.CSSProperties;
}

const DefaultSliderCardStyle:React.CSSProperties = {
    background: 'gray',
    minHeight: '400px',
    maxWidth: '260px',
    borderRadius: '10px',
}

export const DragnetharCustomCardTheme: React.CSSProperties = {
    background:'var(--Dragnethar-blue)', 
    border:'2px var(--Dragnethar-accent) solid',
}

export default function CustomSliderCard({children, description, sliderCardStyle}:CustomSliderCardProps) {
    const CustomSliderCardStyle = {...DefaultSliderCardStyle, ...sliderCardStyle}
    return (
        <div style={CustomSliderCardStyle}>
            {children}
            <p style={{margin:'10px'}}> {description} </p>
        </div>
    );
}