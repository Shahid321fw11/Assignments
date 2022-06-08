import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        //get all item from localStorage
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        setData(posts);
        console.log(posts, 'posts');
    }, [])

    return <>
        {data.length > 0 ? data.map((item, index) => {
            return <>
                <Card key={index} sx={{ maxWidth: '40%', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', padding: '2rem', marginTop: '2rem' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={item.message}
                            image={item.image}
                            title={item.message}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {item.message}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </>
        }
        ) : <>
            <Typography variant="h5" component="h2" style={{ textAlign: 'center' }} >
                No Post, Please Add some Post first.
            </Typography>
        </>}
    </>
}
export default Home