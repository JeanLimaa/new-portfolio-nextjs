"use client";
import * as React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { THrefRepo } from "@/utils/allProjects";
import { MenuItem, Divider } from "@mui/material";
import { StyledMenu } from "./StyledMenu";
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ProjectProps {
  children: React.ReactNode;
  disabledProject?: boolean;
  disabledRepo?: boolean;
  title: string;
  description: string;
  image: string;
  href?: string;
  hrefRepo?: THrefRepo;
}

interface RepositoryBtnProps {
  disabledRepo: boolean | undefined;
  hrefRepoUrl: string;
  children: React.ReactNode;
}

function RepositoryBtn({ disabledRepo, hrefRepoUrl, children }: RepositoryBtnProps) {
  return (
    <Button
      sx={{ paddingX: "2rem", fontSize: "1.11rem" }}
      startIcon={<GitHubIcon fontSize="medium" color="primary" />}
      size="large"
      variant="outlined"
      disabled={disabledRepo || false}
      href={hrefRepoUrl}
      target="_blank"
    >
      {children}
    </Button>
  )
}

export const Project = ({
  title,
  description,
  image,
  href,
  hrefRepo,
  children,
  disabledProject,
  disabledRepo,
}: ProjectProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card
      style={{
        backgroundColor: "#323946",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.8)",
      }}
      className="portfolio-container"
    >
      {children}
      <CardMedia
        component="img"
        alt={title}
        height="200"
        style={{ objectFit: "fill" }}
        image={image}
      />
      <CardContent
        sx={{ height: '130px' }}
      >
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          color={"Background"}
        >
          {title}
        </Typography>
        <Typography variant="h5" color={"lightgray"}>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ gap: "0.5rem" }}>
        <Button
          sx={{ paddingX: "2rem", fontSize: "1.11rem" }}
          startIcon={<OpenInNewIcon fontSize="medium" color="action" />}
          size="large"
          variant="contained"
          disabled={disabledProject || false}
          href={href}
          {...(href ? { target: "_blank" } : {})}
        >
          Visitar Projeto
        </Button>
        {hrefRepo && typeof hrefRepo === "object" ? (
          <>
            <Button
              sx={{ paddingX: "2rem", fontSize: "1.11rem" }}
              startIcon={<GitHubIcon fontSize="medium" color="primary" />}
              endIcon={<MoreVertIcon sx={{color: "blue"}} fontSize="medium" color="action" />}
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              disableElevation
              onClick={handleClick}
              size="large"
              variant="outlined"
              disabled={disabledRepo || false}
            >
              Repositório
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              {hrefRepo.mobile && (
                <MenuItem href={hrefRepo.mobile} onClick={handleClose} disableRipple>
                  <a href={hrefRepo.mobile} target="_blank" rel="noopener noreferrer">
                    Mobile
                  </a>
                </MenuItem>
              )}

              {hrefRepo.front && (
                <MenuItem onClick={handleClose} disableRipple>
                  <a href={hrefRepo.front} target="_blank" rel="noopener noreferrer">
                    Front-End
                  </a>
                </MenuItem>
              )}

              {hrefRepo.back && (
                <MenuItem href={hrefRepo.back} onClick={handleClose} disableRipple>
                  <a href={hrefRepo.back} target="_blank" rel="noopener noreferrer">
                    Back-End
                  </a>
                </MenuItem>
              )}
            </StyledMenu>
          </>
        ) : (hrefRepo && typeof hrefRepo === "string" && hrefRepo !== "") && (
          <RepositoryBtn
            disabledRepo={disabledRepo}
            hrefRepoUrl={hrefRepo}
          >
            Repositório
          </RepositoryBtn>
        )}
      </CardActions>
    </Card>
  );
};
