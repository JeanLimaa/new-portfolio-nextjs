'use client'
import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface ProjectProps {
  children: React.ReactNode,
  disabledProject?: boolean,
  disabledRepo?: boolean
  title: string,
  description: string,
  image: string,
  href?: string,
  hrefRepo?: string
}

export const Project = ({ title, description, image, href, hrefRepo, children, disabledProject, disabledRepo }: ProjectProps) => {
  return (
    <Card style={{ backgroundColor: '#323946', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.8)' }} className='portfolio-container'>
      {children}
      <CardMedia
        component="img"
        alt={title}
        height="200"
        style={{objectFit: 'fill'}}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div" color={'Background'}>
          {title}
        </Typography>
        <Typography variant="h5" color={'lightgray'}>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{gap: '0.5rem'}}> 
        <Button sx={{paddingX: '2rem', fontSize: '1.11rem'}}
        startIcon={<OpenInNewIcon fontSize='medium' color='action'/>} size="large" variant='contained' disabled={disabledProject || false} href={href} {...(hrefRepo ? { target: '_blank' } : {})} >Visitar Projeto</Button>
        <Button sx={{paddingX: '2rem', fontSize: '1.11rem'}}
        startIcon={<GitHubIcon fontSize='medium' color='primary' />} size="large" variant='outlined' disabled={disabledRepo || false} href={hrefRepo} {...(hrefRepo ? { target: '_blank' } : {})} >
          Repositório
        </Button>
      </CardActions>
    </Card>

  );
}