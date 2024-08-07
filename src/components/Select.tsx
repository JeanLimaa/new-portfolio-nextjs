'use client';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { techsArray } from '@/utils/techs';
import { useState } from 'react';

export function SelectCategorys({category, setCategory}: any) {
  /* const [category, setAge] = useState('all'); */

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const allCategorys = Array.from(new Set(techsArray.flatMap(tech => (tech.category))));
  return (
    <div className='select-categorys'>
      <FormControl  sx={{ m: 1, minWidth: 240 }}>
        <Select
          defaultValue='all'
          value={category}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value={"all"}>Todos</MenuItem>
          {allCategorys.map(category => (
            <MenuItem key={category} value={category}>{category}</MenuItem>
          ))}
        </Select>
        <FormHelperText>Filtrar por Categorias</FormHelperText>
      </FormControl>
    </div>
  );
}