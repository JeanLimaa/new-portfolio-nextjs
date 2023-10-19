import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import IconButton from "@mui/material/IconButton";
import AnchorSection from './AnchorSection';

export const ArrowDown = ({ to }: { to: string }) => {
    return (
        <AnchorSection to={to} className="arrow-to-down">
            <IconButton color="secondary" >
                {<ArrowDownwardIcon id="arrowDown" />}
            </IconButton>
        </AnchorSection>
    )
}