// joyUI_Interface1/src/components/styles.tsx
// styles.tsx
import * as React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';

export const ForgotPasswordLink = styled.a`
  color: #D8819E; // Your brand color or whatever color you want the link to be
  text-decoration: none; // No underline by default
  cursor: pointer;
  &:hover {
    text-decoration: underline; // Underline on hover to indicate interactivity
    color: #your-hover-color; // Optionally change color on hover
  }
`;

export const globalStyles = () => (
  <Global
    styles={css`
      body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      }
      #logo {
  width: 100px; /* Adjust width as needed */
  height: auto; /* This will maintain the aspect ratio */
}
    `}
  />
);

