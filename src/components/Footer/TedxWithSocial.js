"use client";
import React from "react";
import { Container, Typography, Grid, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
const Footer = () => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));
  const icon_size = isPhone ? 50 : 30;
  return (
    <>
      <footer className="footer">
        <Container>
          <Typography
            variant={isPhone ? "h3" : "h2"}
            color="white"
            align="center"
          >
            <span style={{ color: "red" }}>#</span>TEDxNTUA
          </Typography>

          <Typography variant="body2" color="white" align="center">
            Follow us on social media for behind-the-scenes
            <br /> moments and much more!
          </Typography>

          <Container
            style={{
              paddingTop: "10px",
              paddingBottom: "10px",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
              onClick={() =>
                window.open("https://www.facebook.com/tedxntua/", "_blank")
              }
            >
              <FacebookIcon
                style={{
                  color: "white",
                  width: icon_size,
                  height: icon_size,
                }}
              />
            </Button>

            <Button
              onClick={() =>
                window.open("https://www.instagram.com/tedxntua/", "_blank")
              }
            >
              <InstagramIcon
                style={{
                  color: "white",
                  width: icon_size,
                  height: icon_size,
                }}
              />
            </Button>

            <Button
              onClick={() =>
                window.open("https://www.tiktok.com/@tedxntua", "_blank")
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={icon_size}
                height={icon_size}
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M10.6703 0H8.14238V10.2174C8.14238 11.4348 7.17012 12.4348 5.96016 12.4348C4.75021 12.4348 3.77793 11.4348 3.77793 10.2174C3.77793 9.02175 4.72861 8.04346 5.89536 8V5.43479C3.3242 5.47825 1.25 7.58696 1.25 10.2174C1.25 12.8696 3.36741 15 5.98178 15C8.59611 15 10.7135 12.8478 10.7135 10.2174V4.97825C11.6642 5.67392 12.8309 6.08696 14.0625 6.10871V3.54348C12.1612 3.47826 10.6703 1.91304 10.6703 0Z"
                  fill="white"
                />
              </svg>
            </Button>

            <Button
              onClick={() =>
                window.open("https://www.youtube.com/c/TEDxNTUA", "_blank")
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={icon_size}
                height={icon_size}
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M14.8506 4.5C14.8506 4.5 14.7041 3.46582 14.2529 3.01172C13.6816 2.41406 13.043 2.41113 12.75 2.37598C10.6523 2.22363 7.50293 2.22363 7.50293 2.22363H7.49707C7.49707 2.22363 4.34766 2.22363 2.25 2.37598C1.95703 2.41113 1.31836 2.41406 0.74707 3.01172C0.295898 3.46582 0.152344 4.5 0.152344 4.5C0.152344 4.5 0 5.71582 0 6.92871V8.06543C0 9.27832 0.149414 10.4941 0.149414 10.4941C0.149414 10.4941 0.295898 11.5283 0.744141 11.9824C1.31543 12.5801 2.06543 12.5596 2.39941 12.624C3.60059 12.7383 7.5 12.7734 7.5 12.7734C7.5 12.7734 10.6523 12.7676 12.75 12.6182C13.043 12.583 13.6816 12.5801 14.2529 11.9824C14.7041 11.5283 14.8506 10.4941 14.8506 10.4941C14.8506 10.4941 15 9.28125 15 8.06543V6.92871C15 5.71582 14.8506 4.5 14.8506 4.5ZM5.9502 9.44531V5.22949L10.002 7.34473L5.9502 9.44531Z"
                  fill="white"
                />
              </svg>
            </Button>
          </Container>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
