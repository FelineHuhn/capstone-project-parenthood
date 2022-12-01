import styled from "styled-components";
import Link from "next/link";

export default function Footer() {
  return (
    <StyledFooter>
      <NavLink href={`/spots`}>
        <StyledNavItem>
          <NavIcon
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="white"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" />
          </NavIcon>
          <NavIconText>Spots</NavIconText>
        </StyledNavItem>
      </NavLink>
      <NavLink href={`/create`}>
        <StyledNavItem>
          <NavIcon
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="white"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm4 8h-3v3h-2v-3H8V8h3V5h2v3h3v2z" />
          </NavIcon>
          <NavIconText>Teilen</NavIconText>
        </StyledNavItem>
      </NavLink>
      <NavLink href={`/favorites`}>
        <StyledNavItem>
          <NavIcon
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="white"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </NavIcon>
          <NavIconText>Favoriten</NavIconText>
        </StyledNavItem>
      </NavLink>
    </StyledFooter>
  );
}

const StyledFooter = styled.nav`
  background-image: linear-gradient(to right, #2f3737 0%, #4d5b5b 100%);
  padding: 8px;
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
    filter: drop-shadow(3px 3px 3px rgb(0 0 0 / 0.8));
  }
`;

const NavIconText = styled.p`
  color: white;
  margin-bottom: 3px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;

const NavIcon = styled.svg`
  margin-bottom: -10px;
`;
