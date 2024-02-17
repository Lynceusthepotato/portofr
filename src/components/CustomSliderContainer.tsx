
type CustomSliderContainerProps = {
    children: React.ReactNode;
    sliderContainerStyle?: React.CSSProperties;
}

const DefaultCustomSliderContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1rem',
}


export default function CustomSliderContainer({children, sliderContainerStyle}: CustomSliderContainerProps) {
    const CustomSliderContainerStyle = {...DefaultCustomSliderContainerStyle, ...sliderContainerStyle}
    return (
        <div style={{overflowX:'auto'}}>
            <div className='is-custom-slider-container' style={CustomSliderContainerStyle}>
                {children}
            </div>
        </div>
    )
}