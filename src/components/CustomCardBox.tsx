
type CustomCardBoxType = {
    customHeaderChildren: React.ReactNode;
    customCardSliderContainer: React.ReactNode;
    customStyle?: React.CSSProperties;
    cardMainIndex?: number;
}

const DefaultCustomCardBoxStyle: React.CSSProperties = {
    display:'grid',
    margin: '10px',
    gridGap: '10px',
}

export default function CustomCardBox({customHeaderChildren, customCardSliderContainer, customStyle, cardMainIndex}: CustomCardBoxType) {
    const customCardBoxStyle = {...DefaultCustomCardBoxStyle, customStyle};

    return (
        <div style={customCardBoxStyle} key={cardMainIndex}>
            {customHeaderChildren}
            {customCardSliderContainer}
        </div>
    )
}