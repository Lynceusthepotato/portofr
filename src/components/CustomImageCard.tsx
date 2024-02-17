
type CustomImageCardProps = {
    imageCardStyle?: React.CSSProperties;
    className?: string;
}

const DefaultImageCardStyle:React.CSSProperties = {
    margin: '10px',
    // background: 'var(--color-palette-orange)',
    minWidth:'240px',
    minHeight:'300px',
}


export default function CustomImageCard({imageCardStyle, className}: CustomImageCardProps) {
    const CustomImageCardStyle = {...DefaultImageCardStyle, ...imageCardStyle};

    return (
        <div style={CustomImageCardStyle} className={className}/>
    );
}