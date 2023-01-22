import { useState } from 'react';
import T from 'prop-types';
import _ from 'lodash';
import {
  ButtonContainer,
  SearchContainer,
  SearchField,
  StyledButton,
} from './styledComponents';
import {
  Autocomplete,
  Box,
  InputBase,
  TextField,
  alpha,
  styled,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { videoDictionary } from '../../constants/videoDictionary';
import { unCamelCase } from '../../helpers/helpers';

export const SearchBar = () => {
  const [formData, setFormData] = useState('');

  /** Update form input. */
  const handleChange = (evt) => {
    const { value } = evt.target;
    setFormData(value);

    const debouncedSearch = _.debounce(() => search(value), 500);
    debouncedSearch();
  };

  /** Call parent function and clear form. */
  const handleSubmit = (evt) => {
    evt.preventDefault();
    search(formData);
    setFormData('');
  };

  const GroupHeader = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    opacity: 0.8,
    padding: '4px 10px',
    position: 'sticky',
    top: '-8px',
  }));

  const GroupItems = styled('ul')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: 0,
  }));

  const options = videoDictionary.map((option) => {
    const firstLetter = option.name[0].toUpperCase();
    const formattedName = unCamelCase(option.name);
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      formattedName: formattedName,
      ...option,
    };
  });

  const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
    '& .MuiAutocomplete-inputRoot': {
      backgroundColor: alpha('#000', 0.1),
      borderRadius: '10px',
    },
    padding: '0 2rem 0 2rem',
    transition: theme.transitions.create('width'),
    // width: '100%',
    [theme.breakpoints.up('sm')]: {
      '&:focus': { width: '80ch' },
      width: '80ch',
    },
  }));

  const AutocompleteComponent = () => (
    <StyledAutocomplete
      getOptionLabel={(option) => option.formattedName}
      groupBy={(option) => option.firstLetter}
      id="grouped-demo"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      renderGroup={(params) => (
        <li>
          <GroupHeader>{params.group}</GroupHeader>
          <GroupItems>{params.children}</GroupItems>
        </li>
      )}
      renderInput={(params) => <TextField {...params} label="Search..." />}
    />
  );

  return (
    <AutocompleteComponent
      inputProps={{ 'aria-label': 'search' }}
      placeholder="Search…"
    />
  );
};