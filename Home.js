import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
const Home = ({books}) => {
  return (
    <div style={{display:'flex',flexWrap:'wrap', gap:'30px',textAlign:'center',justifyContent:'center'}}>
      {books.map((book, index) => (
        <Card key={index} sx={{ maxWidth: 345, width: "250px", boxShadow: "0 5px 1px rgba(0, 0, 0, 0.4)" ,height:"350px"}}>
          <CardMedia
            component="img"
            alt="harry potter"
            height="200"
            image={book.volumeInfo.imageLinks?.thumbnail || ''}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {book.volumeInfo.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {book.volumeInfo.authors?.join(', ')} 
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default Home