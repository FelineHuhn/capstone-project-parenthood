import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const { pathname } = useRouter();

  return (
    <StyledFooter>
      <NavLink href={`/spots`}>
        <StyledNavItem>
          {pathname === "/spots" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="white"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="white"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" />
            </svg>
          )}
          <NavIconText>Spots</NavIconText>
        </StyledNavItem>
      </NavLink>
      <NavLink href={`/create`}>
        <StyledNavItem>
          {pathname === "/create" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="white"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="white"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          )}
          <NavIconText>Teilen</NavIconText>
        </StyledNavItem>
      </NavLink>
      <NavLink href={`/favorites`}>
        <StyledNavItem>
          {pathname === "/favorites" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="white"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="white"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
            </svg>
          )}
          <NavIconText>Favoriten</NavIconText>
        </StyledNavItem>
      </NavLink>
    </StyledFooter>
  );
}

const StyledFooter = styled.nav`
  background-image: linear-gradient(to right, #2f3737 0%, #4d5b5b 100%);
  padding: 3px;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  z-index: 100;
`;

const StyledNavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3px;

  :hover {
    filter: drop-shadow(3px 3px 3px rgb(0 0 0 / 0.9));
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  filter: drop-shadow(3px 3px 3px rgb(0 0 0 / 0.2));
`;

const NavIconText = styled.p`
  color: white;
  margin: 2px;
`;
