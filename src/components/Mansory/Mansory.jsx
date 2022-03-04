import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

// const Label = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(0.5),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     borderBottomLeftRadius: 0,
//     borderBottomRightRadius: 0,
// }));

export default function ImageMasonry({data, column}) {
    return (
        <Box>
            <Masonry columns={column} spacing={{ xs: 1, sm: 2, md: 3 }} >
                {data.map((item, index) => (
                    <div key={index}>
                        <img
                            src={`${item.image}?w=162&auto=format`}
                            srcSet={`${item.image}?w=162&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            style={{
                            borderBottomLeftRadius: 4,
                            borderBottomRightRadius: 4,
                            display: 'block',
                            width: '100%',
                            }}
                        />
                    </div>
                ))}
            </Masonry>
        </Box>
    );
}

