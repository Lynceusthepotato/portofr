import { Button, IconButton, Tooltip } from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";
// icons
import kalibrrSvg from '../assets/svgs/KalibrrLogo.svg';

import '../assets/HomeStyle.css';
import CustomIcons from "../components/CustomIcons";

type HomeSection = {
    showModal: (visible: boolean, type: number) => void;
}

export default function Home({showModal}: HomeSection) {
    return (
        <div className='is-home is-container'>
            <div className='is-home-picture is-custom-image' />
            <p> Muhammad Lukman Ismail Hanafi </p>
            <div className='is-home-buttons'> 
                {/* <Tooltip title="Kalibrr">
                    <Button className="is-kalibrr-button" onClick={() => window.location.href = ''}> K </Button>
                </Tooltip> */}
                {/* <Tooltip title="LinkedIn">
                    <IconButton>
                        <LinkedIn sx={{color:"whitesmoke"}} />
                    </IconButton>
                </Tooltip> */}
                <Tooltip title="Github">
                    <IconButton onClick={() => window.open('https://github.com/Lynceusthepotato', '_blank')}>
                        <GitHub sx={{color:"whitesmoke"}} />
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    );
}