import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 65px;
  ${mobile({ backgroundColor: "rgb(0, 0, 0, 0.4)" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Center = styled.div`
  flex: 2;
  text-align: start;

  margin-left: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: green;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({
    fontSize: "18px",
    alignItems: "center",
    textAlign: "center",
    verticalAlign: "middle",
  })}
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 50px;
  ${mobile({
    flex: "2",
    verticalAlign: "middle",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "flex-end",
  })}
`;

const ButtonItem = styled.button`
  margin: 10px;
  padding: 8px;
  border: 0.5px solid lightblue;
  border-radius: 10%;
  background-color: lightseagreen;
  ${mobile({
    margin: "4px",
    padding: "8px",
    fontSize: "9.5px",
    alignItems: "center",
    textAlign: "center",
    verticalAlign: "middle",
  })}

  &:hover {
    background-color: lightskyblue;
  }
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  ${mobile({ fontSize: "2px", margin: "15px 14px", verticalAlign: "middle" })}
`;

const Navbar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Center>
            <StyledLink to="/">
              <Logo>Amn & Co.</Logo>
            </StyledLink>
          </Center>

          <Right>
            <Link to="login">
              <ButtonItem>SIGN IN</ButtonItem>
            </Link>
            <MenuItem>
              <Badge badgeContent={1} color="primary">
                <Link to="/cart">
                  <ShoppingCartOutlined />
                </Link>
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
