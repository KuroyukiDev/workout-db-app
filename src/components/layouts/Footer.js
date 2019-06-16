import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

const Footer = ({ muscles }) => {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Paper>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {
          muscles.map(group => (
            <Tab key={group} label={group} />
          ))
        }
      </Tabs>
    </Paper>
  );
};

export default Footer;
