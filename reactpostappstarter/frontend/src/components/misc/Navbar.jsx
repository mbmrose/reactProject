import React from "react";
import classes from "./Navbar.module.css";
import { Container, Group, Burger, Drawer, Stack } from "@mantine/core";
import useLinks from "./useLinks";
import { DrawerContext } from "../../Contexts/drawerContext";

const Navbar = () => {
  const { opened, toggle } = React.useContext(DrawerContext);
  const [items] = useLinks();

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <div className={classes.logo}>
          <svg
            height="28px"
            width="28px"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
          >
            <style type="text/css">
              {`
              .st0{fill:#E0995E;}
              .st1{opacity:0.2;}
              .st2{fill:#231F20;}
              .st3{fill:#4F5D73;}
              .st4{fill:#77B3D4;}
              .st5{fill:#FFFFFF;}
              `}
            </style>
            <g id="Layer_1">
              <g>
                <circle className="st0" cx="32" cy="32" r="32"/>
              </g>
              <g>
                <g className="st1">
                  <path className="st2" d="M49.5,22.3h-5c0,0-1.4,0-2.5-2.7c-0.5-1.4-1.1-2.7-2.5-2.7h-10c-1.4,0-2,1.3-2.5,2.7c-1,2.7-2.5,2.7-2.5,2.7
                    H22c0-1.5-1.1-2.7-2.5-2.7H17c-1.4,0-2.5,1.2-2.5,2.7c-1.4,0-2.5,1.2-2.5,2.7v21.3c0,1.5,1.1,2.7,2.5,2.7h35
                    c1.4,0,2.5-1.2,2.5-2.7V25C52,23.5,50.9,22.3,49.5,22.3z"/>
                </g>
                <g>
                  <path className="st3" d="M49.5,20h-5c0,0-1.4,0.3-2.5-2.3c-0.5-1.4-1.1-2.7-2.5-2.7h-10c-1.4,0-2,1.3-2.5,2.7c-1,2.7-2.5,2.3-2.5,2.3
                    H22c0-1.5-1.1-2-2.5-2H17c-1.4,0-2.5,0.5-2.5,2c-1.4,0-2.5,1.5-2.5,3v21.3c0,1.5,1.1,2.7,2.5,2.7h35c1.4,0,2.5-1.2,2.5-2.7V23
                    C52,21.5,50.9,20,49.5,20z"/>
                </g>
                <g>
                  <circle className="st4" cx="34" cy="33" r="9"/>
                </g>
                <g className="st1">
                  <g>
                    <path className="st2" d="M34,46c-6.1,0-11-4.9-11-11s4.9-11,11-11s11,4.9,11,11S40.1,46,34,46z M34,28c-3.9,0-7,3.1-7,7s3.1,7,7,7
                      s7-3.1,7-7S37.9,28,34,28z"/>
                  </g>
                </g>
                <g>
                  <path className="st5" d="M34,43.5c-5.8,0-10.5-4.7-10.5-10.5S28.2,22.5,34,22.5S44.5,27.2,44.5,33S39.8,43.5,34,43.5z M34,25.5
                    c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5s7.5-3.4,7.5-7.5S38.1,25.5,34,25.5z"/>
                </g>
              </g>
            </g>
            <g id="Layer_2">
            </g>
          </svg>
          <span className={classes.appName}>PhotoSense</span>
        </div>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger hiddenFrom="xs" opened={opened} onClick={toggle} />
        <Drawer
          withCloseButton={true}
          opened={opened}
          size="100%"
          onClose={toggle}
        >
          <Stack>{items}</Stack>
        </Drawer>
      </Container>
    </header>
  );
};

export default Navbar;
