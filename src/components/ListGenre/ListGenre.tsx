import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { List, ListItemButton, ListItemText, Collapse, ListItemIcon } from '@mui/material';
import React, { useState } from 'react'
import { ArrayListCategories, ArrayListGenre } from './ArrayListGenre';

const ListGenre = () => {
    const [openArray, setOpenArray] = useState(Array(ArrayListCategories.length).fill(false));
  
    const handleClick = (index: number) => {
      const newOpenArray = [...openArray];
      newOpenArray[index] = !newOpenArray[index];
      setOpenArray(newOpenArray);
    };
  
    return (
      <div>
        {ArrayListCategories.map((nameCategory, index) => (
          <List
            sx={{
              width: '100%',
              maxWidth: 250,
              borderRadius: 3,
              marginBottom: 3,
              color: 'white'
            }}
            component="nav"
            key={nameCategory.id}
          >
            <ListItemButton onClick={() => handleClick(index)}>
              <ListItemIcon>
                <nameCategory.img sx={{color: 'white'}}/>
              </ListItemIcon>
              <ListItemText primary={nameCategory.name} />
              {openArray[index] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openArray[index]} timeout="auto" unmountOnExit>
              {ArrayListGenre.map((nameGenre) => (
                <List
                  component="div"
                  disablePadding
                  key={nameGenre.id}
                  onClick={() => console.log(nameCategory.name, nameGenre.name)}
                >
                  <ListItemButton>
                    <ListItemText primary={nameGenre.name} />
                  </ListItemButton>
                </List>
              ))}
            </Collapse>
          </List>
        ))}
      </div>
    );
  };

  export default ListGenre;