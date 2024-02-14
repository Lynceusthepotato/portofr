import { IconButton, Tooltip } from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";
import '../assets/HomeStyle.css';

export default function Home() {
    return (
        <div className='is-home is-container'>
            <div className='is-home-picture' />
            <p> Muhammad Lukman Ismail Hanafi </p>
            <div className='is-home-buttons'> 
                <Tooltip title="LinkedIn">
                    <IconButton>
                        <LinkedIn sx={{color:"whitesmoke"}} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Github">
                    <IconButton>
                        <GitHub sx={{color:"whitesmoke"}} />
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    );
}