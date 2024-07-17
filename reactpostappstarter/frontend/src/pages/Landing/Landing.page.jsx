import React from 'react';
import { Container, Title, Text, Image } from '@mantine/core';
import styles from './Landing.module.css'; // Import the CSS module

// Import your images
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';
import image6 from './image6.jpg';

const Landing = () => {
  return (
    <Container>
      <Title align="center" mt="xl">Welcome to PhotoSense</Title>
      <Text align="center" size="lg" mt="md">
        PhotoSense is a platform for photographers to upload and share posts about the photos they’ve taken. 
        Discover amazing photography, connect with fellow photographers, and share your own stunning images.
      </Text>
      <div className={styles.imageRow}>
        <Image
          className={styles.image}
          width={200}
          src={image3}
          alt="Example of post 1"
        />
        <Image
          className={styles.image}
          width={200}
          src={image6}
          alt="Example of post 2"
        />
      </div>
      <div className={styles.imageRow}>
        <Image
          className={styles.image}
          width={200}
          src={image1}
          alt="Example of post 3"
        />
        <Image
          className={styles.image}
          width={200}
          src={image4}
          alt="Example of post 4"
        />
      </div>
      <div className={styles.imageRow}>
        <Image
          className={styles.image}
          width={200}
          src={image5}
          alt="Example of post 5"
        />
        <Image
          className={styles.image}
          width={200}
          src={image2}
          alt="Example of post 6"
        />
      </div>
    </Container>
  );
};

export default Landing;
