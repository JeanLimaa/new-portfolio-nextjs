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
      <FormControl className={styles.formControl}>
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
        >
          <MenuItem value={"all"} className={styles.menuItem}><h3>Todas Tecnologias</h3></MenuItem>
          {allCategorys.map(category => (
            <MenuItem key={category} value={category} className={styles.menuItem}><h3>{category}</h3></MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}