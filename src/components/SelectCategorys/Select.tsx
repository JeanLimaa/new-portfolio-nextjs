'use client';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { techsArray } from '@/utils/techs';
import { useState } from 'react';
import styles from './SelectCategorys.module.css';

export function SelectCategorys({category, setCategory}: any) {
  /* const [category, setAge] = useState('all'); */

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  // todas as categorias
  const allCategorys = Array.from(new Set(techsArray.flatMap(tech => (tech.category))));
  return (
    <div className='filter-categorys'>
      <FormControl  sx={{ m: 1, minWidth: 240 }}>
        {/* <FormHelperText sx={{color: '#fff', fontSize: "1.3rem"}}><h3>Filtrar por Categorias</h3></FormHelperText> */}
        <Select
          defaultValue='all'
          value={category}
          onChange={handleChange}
          displayEmpty
          classes={{
            root: styles.select, // Aplica a classe para estilizar o Select
            icon: styles.select, // Aplica a classe para estilizar o ícone do Select
            outlined: styles.select // Aplica a classe para estilizar o Select com borda
          }}
          /* sx={{
            color: '#fff', // Cor do texto
            backgroundColor: '#444', // Cor de fundo do Select
            '& .MuiSelect-icon': {
              color: '#323946' // Cor do ícone de seleção
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#444' // Cor da borda
              },
              '&:hover fieldset': {
                borderColor: '#444' // Cor da borda ao passar o mouse
              },
              '&.Mui-focused fieldset': {
                borderColor: '#444' // Cor da borda quando em foco
              }
            },
            '& .MuiMenuItem-root': {
              color: '#fff', // Cor do texto dos itens do menu
              backgroundColor: '#333', // Cor de fundo dos itens do menu
              '&:hover': {
                backgroundColor: '#555' // Cor de fundo ao passar o mouse sobre os itens do menu
              }
            }
          }} */
        >
          <MenuItem value={"all"}><h3>Todas Tecnologias</h3></MenuItem>
          {allCategorys.map(category => (
            <MenuItem key={category} value={category}><h3>{category}</h3></MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}