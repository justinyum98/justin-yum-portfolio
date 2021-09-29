import * as React from 'react';
import Box from '@mui/material/Box';

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

const TabPanel = (props: TabPanelProps) => {
  const { children, index, value, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`work-tabpanel-${index}`}
      aria-labelledby={`work-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            flexGrow: 1,
            p: {
              xs: 2,
              md: 3,
            },
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
