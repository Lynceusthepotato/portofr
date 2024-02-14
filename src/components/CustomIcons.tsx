import { Icon, Tooltip } from "@mui/material";

type CustomIconProps = {
    imageSrc: string;
    iconStyle?: React.CSSProperties;
    alt?: string;
    tooltipTitle: string;
} 

const DefaultIconStyle:React.CSSProperties = {
    width: 25,
    height: 25,
}


export default function CustomIcons({imageSrc, iconStyle, alt, tooltipTitle}: CustomIconProps) {
    const customIconStyle = {...DefaultIconStyle, ...iconStyle};

    return (
        <Tooltip title={tooltipTitle}>
             <Icon>
                <img src={imageSrc} width={customIconStyle.width} height={customIconStyle.height} alt={alt} />
            </Icon>
        </Tooltip>
    );
}