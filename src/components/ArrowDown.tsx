
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import IconButton from "@mui/material/IconButton";

export const ArrowDown = () => {
    return (
        <IconButton href="#skills" color="secondary" className="arrow-to-down">
            {<ArrowDownwardIcon id="arrowDown" />}
        </IconButton>
    )
}