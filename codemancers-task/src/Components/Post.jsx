import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem'


const Post = () => {
    const [writePost, setWritePost] = useState('');

    // giphyData
    const [gifgyData, setGifgyData] = useState('');
    const [gifgyData2, setGifgyData2] = useState([]);


    const srcset = (image, size, rows = 1, cols = 1) => {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${size * rows
                }&fit=crop&auto=format&dpr=2 2x`,
        };
    }

    const [gifgy, setGifgy] = useState([]);
    const handleGifgyClick = (e) => {
        setGifgyData(e.target.src);
        console.log(e.target.alt);
        console.log(e.target.src);
    }

    const handleChange = (e) => {
        setWritePost(e.target.value);
    }

    const handleChange2 = (e) => {
        setGifgyData(e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (writePost.length === 0) {
            return alert('Please write something');
        }
        // add post in localStorage
        const currentItem = { message: writePost, image: gifgyData };
        console.log(currentItem, 'currentItem');
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(currentItem);
        localStorage.setItem('posts', JSON.stringify(posts));
        setWritePost('');
        setGifgyData('');
        console.log(posts, 'posts');
        // alert
        alert('Post added');
    }

    // useEffect to fetch api

    useEffect(() => {
        let controller = new AbortController();
        const apiKey = `https://api.giphy.com/v1/gifs/search?api_key=0d05b586e3ff4884b6dc9837d9601726&limit=20&offset=0&rating=G&lang=fr&q=` + gifgyData;
        const fetchData = async () => {
            try {
                const response = await fetch(apiKey);
                const data = await response.json();
                setGifgyData2(data.data);
            } catch (error) {
                console.log('error', error);
            }
        }
        fetchData();
        // cleanup function
        return () => controller?.abort();
    }, [gifgyData])


    return <>
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: "50%",
                    height: "15rem",
                },
                justifyContent: 'center',

            }}
        >
            <Paper elevation={3} >
                <Typography variant="h6" gutterBottom component="div" style={{ textAlign: "center" }}>
                    What Do you wanna Post Today?
                </Typography>

                <Paper elevation={3} style={{}}>
                    <TextField id="standard-basic" label="Please write anything" valuvariant="standard" style={{ width: "100%" }} onChange={handleChange} name='writePost' value={writePost} />
                </Paper>

                <Paper elevation={3} style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <TextField id="filled-basic" label="Search for Giphy" variant="filled" onChange={handleChange2} name='gifgyData' value={gifgyData} />
                    <Button type="submit" value="submit" variant="contained" style={{ width: '30%' }} onClick={handleSubmit} >Post</Button>
                </Paper>

                {
                    gifgyData2 ?
                        <ImageList
                            sx={{ width: '100%' }}
                            variant="quilted"
                            cols={4}
                            rowHeight={121}
                        >
                            {gifgyData2.map((item, index) => (
                                <ImageListItem >
                                    <img
                                        {...srcset(item.images.downsized_large.url, 121, item.rows, item.cols)}
                                        key={index}
                                        alt={item.title}
                                        loading="lazy"
                                        onClick={handleGifgyClick}
                                        style={{ cursor: 'pointer' }}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                        :
                        null
                }
                {/*
                <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          /> 
                 */}

            </Paper >
        </Box>

    </>
}

export default Post