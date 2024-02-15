
type CustomImageCardProps = {
    imageCardStyle?: React.CSSProperties;
}

const DefaultImageCardStyle:React.CSSProperties = {
    margin: '10px',
    background: 'var(--color-palette-orange)',
    minWidth:'300px',
    minHeight:'300px',
}


export default function CustomImageCard({imageCardStyle}: CustomImageCardProps) {
    const CustomImageCardStyle = {...DefaultImageCardStyle, ...imageCardStyle};

    return (
        <div style={CustomImageCardStyle}/>
    );
}