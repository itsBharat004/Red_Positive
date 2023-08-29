import React from 'react'
import './FooterStyle.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CopyrightIcon from '@mui/icons-material/Copyright';
const Footer = () => {
  return (
    <div className="footerSection">

    <div className='footer'>
      <div className="footerContainer1">
      <div className="leftHeaderTop leftFooterTop">
   {/* logo svg */}
   <svg id='svgImg' className="svgImg"
          width="200"
          height="210"
          viewBox="0 0 187 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1450_5)">
            <path
              d="M54.7664 62.4323C54.8733 48.6959 68.4781 39.1536 81.4299 43.7308L136.885 63.3288C152.216 68.7467 155.018 89.2229 141.706 98.5598L85.7927 137.777C72.4807 147.113 54.1823 137.507 54.3088 121.247L54.7664 62.4323Z"
              fill="white"
              fill-opacity="0.5"
            ></path>
            <path
              d="M104.29 40.9654C116.931 35.5893 131.105 44.2645 132.068 57.9675L136.193 116.639C137.333 132.859 119.67 143.589 105.801 135.1L47.5513 99.447C33.6828 90.9585 35.2019 70.3474 50.165 63.9839L104.29 40.9654Z"
              fill="white"
              fill-opacity="0.5"
            ></path>
            <g filter="url(#filter0_d_1450_5)">
              <path
                d="M114.34 136.384C120.629 133.495 126.22 129.121 130.683 123.597C135.146 118.073 138.364 111.546 140.089 104.515C141.814 97.4851 142.002 90.1384 140.637 83.0384C139.272 75.9385 136.39 69.2738 132.214 63.5552C128.037 57.8365 122.676 53.2159 116.541 50.0473C110.407 46.8787 103.662 45.2464 96.8229 45.2754C89.984 45.3044 83.2332 46.9939 77.0877 50.2146C70.9422 53.4353 65.5653 58.1015 61.3691 63.8556L65.2306 67.0148C68.9687 61.8888 73.7587 57.732 79.2333 54.8629C84.7079 51.9939 90.7218 50.4887 96.814 50.4629C102.906 50.437 108.915 51.8912 114.38 54.7139C119.845 57.5365 124.621 61.6528 128.341 66.7471C132.062 71.8414 134.629 77.7786 135.845 84.1035C137.061 90.4283 136.894 96.973 135.357 103.236C133.82 109.499 130.954 115.313 126.978 120.234C123.002 125.155 103.084 138.909 97.4812 141.482L114.34 136.384Z"
                fill="url(#paint0_linear_1450_5)"
              ></path>
            </g>
            <g filter="url(#filter1_d_1450_5)">
              <path
                d="M77.1688 130.402C83.6663 132.722 90.5939 133.447 97.4205 132.522C104.247 131.597 110.792 129.046 116.552 125.065C122.313 121.084 127.137 115.778 130.655 109.555C134.172 103.332 136.29 96.3559 136.845 89.1623C137.4 81.9686 136.379 74.7481 133.858 68.0541C131.338 61.3601 127.386 55.3704 122.306 50.5442C117.225 45.7179 111.15 42.1832 104.547 40.2109C97.9441 38.2387 90.9881 37.8813 84.2124 39.1661L85.056 44.2419C91.0921 43.0973 97.2887 43.4157 103.171 45.1726C109.053 46.9296 114.465 50.0784 118.991 54.3778C123.517 58.6772 127.037 64.013 129.282 69.9762C131.527 75.9394 132.438 82.3717 131.943 88.7801C131.448 95.1884 129.562 101.403 126.428 106.947C123.295 112.49 118.997 117.217 113.866 120.763C108.734 124.309 102.904 126.582 96.8223 127.406C90.7409 128.23 67.2261 124.292 61.438 122.225L77.1688 130.402Z"
                fill="url(#paint1_linear_1450_5)"
              ></path>
            </g>
            <g filter="url(#filter2_d_1450_5)">
              <path
                d="M105.703 41.6747C99.036 39.9734 92.0747 39.9008 85.3531 41.4623C78.6316 43.0239 72.3282 46.1783 66.9261 50.6836C61.524 55.1889 57.1667 60.9257 54.1881 67.454C51.2096 73.9824 49.6888 81.1291 49.7425 88.3463C49.7961 95.5636 51.4227 102.66 54.4976 109.091C57.5725 115.522 62.014 121.117 67.4818 125.448C72.9495 129.779 79.2983 132.73 86.0415 134.076C92.7846 135.421 99.7432 135.125 106.384 133.21L105.115 128.233C99.1996 129.939 93.0007 130.203 86.9937 129.004C80.9866 127.806 75.3309 125.177 70.4601 121.319C65.5893 117.461 61.6326 112.476 58.8934 106.747C56.1542 101.018 54.7051 94.6968 54.6574 88.2674C54.6096 81.8381 55.9643 75.4716 58.6177 69.6559C61.2711 63.8402 65.1528 58.7297 69.9651 54.7162C74.7774 50.7027 80.3927 47.8927 86.3805 46.5016C92.3683 45.1105 116.122 46.8286 122.062 48.3442L105.703 41.6747Z"
                fill="url(#paint2_linear_1450_5)"
                shape-rendering="crispEdges"
              ></path>
            </g>
            <g filter="url(#filter3_d_1450_5)">
              <circle
                cx="93"
                cy="65.0001"
                r="2"
                fill="#71155C"
                fill-opacity="0.64"
                shape-rendering="crispEdges"
              ></circle>
            </g>
            <g filter="url(#filter4_d_1450_5)">
              <circle cx="93" cy="65.0001" r="2" fill="#F40B51"></circle>
            </g>
            <g filter="url(#filter5_d_1450_5)">
              <circle
                cx="113"
                cy="69.0001"
                r="2"
                fill="black"
                fill-opacity="0.68"
                shape-rendering="crispEdges"
              ></circle>
            </g>
            <g filter="url(#filter6_d_1450_5)">
              <circle cx="109.5" cy="62.5001" r="1.5" fill="#F40B51"></circle>
            </g>
            <g filter="url(#filter7_d_1450_5)">
              <circle
                cx="100.5"
                cy="59.5001"
                r="2.5"
                fill="black"
                fill-opacity="0.6"
                shape-rendering="crispEdges"
              ></circle>
            </g>
            <g filter="url(#filter8_d_1450_5)">
              <path
                d="M83.3 81.2V106.2C83.3 107.167 83.2833 108.133 83.25 109.1C83.2167 110.067 83.2 110.75 83.2 111.15C83.2 111.583 83.5 111.917 84.1 112.15C84.7333 112.417 85.3167 112.55 85.85 112.55C86.1167 112.55 86.35 112.5 86.55 112.4C86.75 112.333 86.85 112.217 86.85 112.05C86.85 111.483 86.8167 110.667 86.75 109.6C86.7167 108.5 86.7 107.383 86.7 106.25V95.25C87.0333 95.3833 87.4333 95.6 87.9 95.9C88.4 96.2 88.8167 96.5 89.15 96.8C89.95 97.5667 90.8833 98.55 91.95 99.75C93.0167 100.95 94.15 102.233 95.35 103.6C96.55 104.933 97.75 106.233 98.95 107.5C100.183 108.733 101.367 109.8 102.5 110.7C103.533 111.533 104.567 112.067 105.6 112.3C106.633 112.533 107.617 112.65 108.55 112.65C109.517 112.65 110 112.5 110 112.2C110 112 109.783 111.767 109.35 111.5C108.917 111.233 108.417 110.983 107.85 110.75C107.383 110.583 106.783 110.233 106.05 109.7C105.317 109.167 104.667 108.633 104.1 108.1C102.7 106.867 101.233 105.433 99.7 103.8C98.1667 102.167 96.6833 100.567 95.25 99C93.85 97.4 92.6333 96.0833 91.6 95.05C91.8 95.05 92 95.05 92.2 95.05C92.4 95.0167 92.5833 95 92.75 95C93.35 94.9333 93.9333 94.8833 94.5 94.85C95.0667 94.7833 95.5667 94.7 96 94.6C97.6 94.3 99.1333 93.7333 100.6 92.9C102.1 92.0667 103.317 90.9833 104.25 89.65C105.217 88.3167 105.7 86.75 105.7 84.95C105.7 83.5833 105.317 82.2667 104.55 81C103.817 79.7 102.633 78.6333 101 77.8C99.3667 76.9667 97.1833 76.55 94.45 76.55C92.7833 76.55 91.3 76.6167 90 76.75C88.7333 76.85 87.7333 76.9833 87 77.15C85.6333 77.45 84.5167 77.65 83.65 77.75C82.7833 77.85 82.0167 77.9667 81.35 78.1C81.0833 78.1333 80.95 78.3 80.95 78.6C80.95 78.8667 81.0667 79.2167 81.3 79.65C81.5667 80.05 81.8667 80.4167 82.2 80.75C82.5667 81.05 82.9167 81.2 83.25 81.2H83.3ZM89.05 92.6H88.05C87.7833 92.6 87.5333 92.6833 87.3 92.85C87.1 93.0167 86.9 93.2333 86.7 93.5V80.5C87.7667 80.1333 88.9667 79.8833 90.3 79.75C91.6667 79.6167 93.0167 79.55 94.35 79.55C96.7833 79.55 98.7 80.0667 100.1 81.1C101.5 82.1333 102.2 83.4833 102.2 85.15C102.2 86.15 101.833 87.15 101.1 88.15C100.4 89.1167 99.4667 89.9667 98.3 90.7C97.1333 91.4 95.8667 91.8667 94.5 92.1C93.6667 92.2333 92.7833 92.35 91.85 92.45C90.95 92.55 90.0167 92.6 89.05 92.6Z"
                fill="url(#paint3_linear_1450_5)"
                shape-rendering="crispEdges"
              ></path>
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_1450_5"
              x="57.3691"
              y="45.275"
              width="88.1691"
              height="104.207"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset dy="4"></feOffset>
              <feGaussianBlur stdDeviation="2"></feGaussianBlur>
              <feComposite in2="hardAlpha" operator="out"></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.666667 0 0 0 0 0.0745098 0 0 0 0 0.0745098 0 0 0 0.5 0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1450_5"
              ></feBlend>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1450_5"
                result="shape"
              ></feBlend>
            </filter>
            <filter
              id="filter1_d_1450_5"
              x="57.4379"
              y="38.4105"
              width="83.5541"
              height="102.501"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset dy="4"></feOffset>
              <feGaussianBlur stdDeviation="2"></feGaussianBlur>
              <feComposite in2="hardAlpha" operator="out"></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.666667 0 0 0 0 0.0745098 0 0 0 0 0.0745098 0 0 0 0.5 0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1450_5"
              ></feBlend>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1450_5"
                result="shape"
              ></feBlend>
            </filter>
            <filter
              id="filter2_d_1450_5"
              x="45.7411"
              y="40.3427"
              width="80.3206"
              height="102.561"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset dy="4"></feOffset>
              <feGaussianBlur stdDeviation="2"></feGaussianBlur>
              <feComposite in2="hardAlpha" operator="out"></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.666667 0 0 0 0 0.0745098 0 0 0 0 0.0745098 0 0 0 0.5 0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1450_5"
              ></feBlend>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1450_5"
                result="shape"
              ></feBlend>
            </filter>
            <filter
              id="filter3_d_1450_5"
              x="87"
              y="63.0001"
              width="12"
              height="12"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset dy="4"></feOffset>
              <feGaussianBlur stdDeviation="2"></feGaussianBlur>
              <feComposite in2="hardAlpha" operator="out"></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1450_5"
              ></feBlend>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1450_5"
                result="shape"
              ></feBlend>
            </filter>
            <filter
              id="filter4_d_1450_5"
              x="87"
              y="63.0001"
              width="12"
              height="12"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset dy="4"></feOffset>
              <feGaussianBlur stdDeviation="2"></feGaussianBlur>
              <feComposite in2="hardAlpha" operator="out"></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1450_5"
              ></feBlend>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1450_5"
                result="shape"
              ></feBlend>
            </filter>
            <filter
              id="filter5_d_1450_5"
              x="107"
              y="67.0001"
              width="12"
              height="12"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset dy="4"></feOffset>
              <feGaussianBlur stdDeviation="2"></feGaussianBlur>
              <feComposite in2="hardAlpha" operator="out"></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1450_5"
              ></feBlend>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1450_5"
                result="shape"
              ></feBlend>
            </filter>
            <filter
              id="filter6_d_1450_5"
              x="104"
              y="61.0001"
              width="11"
              height="11"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset dy="4"></feOffset>
              <feGaussianBlur stdDeviation="2"></feGaussianBlur>
              <feComposite in2="hardAlpha" operator="out"></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1450_5"
              ></feBlend>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1450_5"
                result="shape"
              ></feBlend>
            </filter>
            <filter
              id="filter7_d_1450_5"
              x="94"
              y="57.0001"
              width="13"
              height="13"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset dy="4"></feOffset>
              <feGaussianBlur stdDeviation="2"></feGaussianBlur>
              <feComposite in2="hardAlpha" operator="out"></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1450_5"
              ></feBlend>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1450_5"
                result="shape"
              ></feBlend>
            </filter>
            <filter
              id="filter8_d_1450_5"
              x="80.95"
              y="76.55"
              width="38.05"
              height="44.1"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset dx="5" dy="4"></feOffset>
              <feGaussianBlur stdDeviation="2"></feGaussianBlur>
              <feComposite in2="hardAlpha" operator="out"></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1450_5"
              ></feBlend>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1450_5"
                result="shape"
              ></feBlend>
            </filter>
            <linearGradient
              id="paint0_linear_1450_5"
              x1="146.639"
              y1="117.294"
              x2="90.0324"
              y2="50.2741"
              gradientUnits="userSpaceOnUse"
            >
              <stop></stop>
              <stop offset="1" stop-color="white"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_1450_5"
              x1="113.251"
              y1="139.167"
              x2="119.099"
              y2="49.7585"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white"></stop>
              <stop offset="1" stop-color="white"></stop>
            </linearGradient>
            <linearGradient
              id="paint2_linear_1450_5"
              x1="69.0244"
              y1="36.3278"
              x2="71.5836"
              y2="125.906"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-opacity="0.65"></stop>
              <stop offset="1"></stop>
            </linearGradient>
            <linearGradient
              id="paint3_linear_1450_5"
              x1="106.5"
              y1="112"
              x2="93"
              y2="76.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop></stop>
              <stop
                offset="0.54417"
                stop-color="#AA1313"
                stop-opacity="0.85"
              ></stop>
              <stop offset="1" stop-color="#F40B51"></stop>
            </linearGradient>
            <clipPath id="clip0_1450_5">
              <rect width="187" height="180" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
{/* leftHeaderTitle */}
<div className="leftHeaderTitle">
    <div className="leftHeaderTitleUpper redpositive">REDPOSITIVE</div>
    <div className="leftHeaderTitleLower footerService">SERVICE OPC PRIVATE LIMITED</div>
</div>
</div>
      </div>
      <div className="footerContainer2">
      <img className='footerContainer3Img1' src="https://www.redpositive.in/images/line1_footer.png" alt="not found" />

        <h1>Navigation</h1>
        <a className='footerText footerHome' href='#home'>Home</a>
        <a className='footerText footerAbout' href='#about'>About</a>
        <a className='footerText footerService' href='#product'>Service</a>
        <a className='footerText footerTeam' href='#team'>Team</a>
        <a className='footerText footerContact' href='#contact'>Contact</a>
        <img className='footerContainer3Img2'src="https://www.redpositive.in/images/line1_footer.png" alt="not found" />

      </div>
      <div className="footerContainer3">
        <div className="footerContainer3Container">
        <h1>Products</h1> 
      <a href="#product1" className='footerText'> Blood wala bhaiya</a>
      <a href="#product2" className='footerText'> The IT studio</a>
      <a href="#product3" className='footerText'> AI based defence surveillaince system</a>
      <a href="#product4" className='footerText'> Machine added language translato</a>
        </div>
      </div>
      <img className='footerContainer3Img3' src="https://www.redpositive.in/images/line2_footer.png" alt="not found" />
      <div className="footerContainer4">
        <div className="footerContainer4first">©All Right Reserved | RedPositive Service OPC Private Limited</div>
        <div className="footerContainer4Second">
        <FacebookIcon/>
       <InstagramIcon/>
       <LinkedInIcon/>
       <YouTubeIcon/>
       <TwitterIcon/>
        </div>
      
      </div>
    </div>
    <h4  className='createBy'><CopyrightIcon/> Made by Yash gupta 
    <span> <FavoriteIcon/></span> 
    </h4>
  
    </div>
  )
}

export default Footer
