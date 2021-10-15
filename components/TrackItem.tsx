import React from 'react';
import { ITrackItem } from '../types/track.type';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Rating from '@mui/material/Rating';
import MenuIcon from '@mui/icons-material/Menu';

const TrackItem: React.FC<ITrackItem> = ({ track, active = false }) => {
    const theme = useTheme();
    return (
        <>
            <Card
                elevation={8}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    mb: 3,
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, pr: 4 }}>
                        <IconButton aria-label="previous">
                            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                        </IconButton>
                        <IconButton aria-label="play/pause">
                            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                        </IconButton>
                        <IconButton aria-label="next">
                            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                        </IconButton>
                    </Box>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {track.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {track.artist}
                        </Typography>
                    </CardContent>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 2 }}>
                    <Typography sx={{ pr: 4 }} component="div" variant="h5">
                        {track.listens}
                    </Typography>
                    <Rating sx={{ pr: 2 }} name="read-only" value={2} readOnly />
                    <IconButton
                        sx={{ border: '#1976d2 1px solid', mr: 2, ml: 2 }}
                        color="info"
                        aria-label="open drawer"
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>
                    <CardMedia
                        component="img"
                        sx={{ width: 151, height: 120 }}
                        image={track.picture}
                        alt="Live from space album cover"
                    />
                </Box>
            </Card>
        </>
    );
};

export default TrackItem;
