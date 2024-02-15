
type CustomSubHeaderProps = {
    subHeaderStyle?: React.CSSProperties;
    title: string;
}

const DefaultSubHeaderStyle: React.CSSProperties = {
    margin: '0',
}


export default function CustomSubHeader({subHeaderStyle, title}:CustomSubHeaderProps) {
    const CustomSubHeaderStyle = {...DefaultSubHeaderStyle, ...subHeaderStyle}
    return (
        <h5 style={CustomSubHeaderStyle}> {title} </h5>
    )
}