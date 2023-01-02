import styled from 'styled-components';

const NavbarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 6rem;

  .gpt3-navbar-links {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .gpt3-navbar-links-logo {
    margin-right: 2rem;
    img {
      width: 62.56px;
      height: 16.02px;
    }
  }

  .gpt3-navbar-links_container {
    display: flex;
    flex-direction: row;
  }

  .gpt3-navbar-sign {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .gpt3-navbar-links_container p,
  .gpt3-navbar-sign p,
  .gpt3-navbar-menu_container p {
    color: #fff;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    text-transform: capitalize;

    margin: 0 1rem;
    cursor: pointer;
  }

  .gpt3-navbar-sign button,
  .gpt3-navbar-menu_container button {
    padding: 0.5rem 1rem;
    color: #fff;
    background: #FF4820;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
  }

  .gpt3-navbar-menu {
    margin-left: 1rem;

    display: none;
    position: relative;
  }

  .gpt3-navbar-menu svg {
    cursor: pointer;
  }

  .gpt3-navbar-menu-container {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;

    text-align: end;
    background: var(--color-footer);
    padding: 2rem;
    position: absolute;
    right: 0;
    top: 40px;
    margin-top: 1rem;
    min-width: 210px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0,0, 0,0.2);
  }

  .gpt3-navbar-menu-container p {
    margin: 1rem 0;
  }

  .gpt3-navbar-menu-container-links-sign {
    display: none;
  }

  @media screen and (max-width: 1050px) {
    .gpt3-navbar-links-container {
      display: none;
    }

    .gpt3-navbar-menu {
      display: flex;
    }
  }

  @media screen and (max-width: 700px) {
    .gpt3-navbar {
      padding: 2rem 4rem;
    }
  }

  @media screen and (max-width: 550px) {
    .gpt3-navbar {
      padding: 2rem;
    }

    .gpt3-navbar-sign {
      display: none;
    }

    .gpt3-navbar-menu-container {
      top: 20px;
    }

    .gpt3-navbar-menu-container-links-sign {
      display: block;
    }
  }
`;

export default NavbarStyled;