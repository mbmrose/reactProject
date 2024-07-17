import React from 'react';
import { Container, Text, Anchor, Group } from '@mantine/core';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container className={classes.container}>
        <Text size="sm" className={classes.text}>&copy; {new Date().getFullYear()} PhotoSense. All rights reserved.</Text>
        <Group spacing="xl" className={classes.rightFoot}>
          <Anchor href="/privacy-policy" size="sm">Privacy Policy</Anchor>
          <Anchor href="/terms-of-service" size="sm">Terms of Service</Anchor>
        </Group>
      </Container>
    </footer>
  );
};

export default Footer;
