import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import EditIcon from '@/assets/icons/edit.svg?component';
import { Task as TaskType } from '@/types';

const MuCard = styled(Card)(() => ({
  backgroundColor: '#fff',
  color: '#000',
  padding: '1.6rem',
  width: '100%',
  maxWidth: '22rem',
  height: '20rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '0.5rem',
  boxShadow: '0.3rem 0.3rem 0.3rem rgba(0,0,0,0.4)',
  '& svg': {
    width: '2.4rem',
    height: '2.4rem',
  },
}));

const descStyles = {
  fontSize: 13,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  lineClamp: '3',
  '-webkit-line-clamp': '3',
  '-webkit-box-orient': 'vertical',
  lineHeight: '1.8rem',
};

export default function Task({ id, title, description, status }: TaskType) {
  return (
    <MuCard>
      <CardContent sx={{ padding: 0 }}>
        <Typography
          sx={{ fontSize: 18, fontWeight: 500 }}
          color="text.primary"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography sx={descStyles} variant="body2">
          {description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          padding: 0,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Chip
          label={status}
          sx={{
            backgroundColor: '#0368a6',
            color: '#FFF',
            borderRadius: '0.6rem',
            fontSize: '1.5rem',
            padding: '0.4rem 0.8rem',
            minWidth: '10rem',
          }}
        />
        <IconButton component={Link} to={`/edit?id=${id}`}>
          <EditIcon />
        </IconButton>
      </CardActions>
    </MuCard>
  );
}
