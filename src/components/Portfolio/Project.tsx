'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
      <CardActions style={{ gap: '1rem' }}>
        <Button size="large" variant='contained' disabled={disabledProject || false} href={href} {...(hrefRepo ? { target: '_blank' } : {})} >Visitar Projeto</Button>
        <Button size="large" variant='outlined' disabled={disabledRepo || false} href={hrefRepo} {...(hrefRepo ? { target: '_blank' } : {})} >
          Repositório
        </Button>
      </CardActions>
    </Card>

  );
}