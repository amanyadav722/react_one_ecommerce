//import { Search } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 65px;
  ${mobile({ backgroundColor: "rgb(0, 0, 0, 0.4)", padding: "0", margin: "0" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  vertical-align: middle;
  ${mobile({ padding: "5px 1px", margin: "0", alignItems: "center", textAlign: "center", verticalAlign: "middle" })}
`;

// const Left = styled.div`
//   flex: 1;
//   cursor: pointer;
//   align-items: center;
//   display: flex;
//   ${mobile({ flex: 2, justifyContent: "center" })}
// `;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: green;
`;

// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
//   ${mobile({ display: "none" })}
// `;

// const SearchContainer = styled.div`
//   border: 0.5px solid lightgray;
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   padding: 5px;
// `;

// const Input = styled.div`
//   border: none;
//   width: 90px;
//   ${mobile({ width: "40px" })}
// `;

const Center = styled.div`
  flex: 1;
  text-align: center;
  justify-content: flex-start;
  ${mobile({flex: "1", alignItems: "center", textAlign: "center", verticalAlign: "middle" })}
`;

const Logo = styled.h1`
  font-size: 35px;
  font-weight: bold; 
  ${mobile({fontSize: "18px", alignItems: "center", textAlign: "center", verticalAlign: "middle" })}
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: "2", verticalAlign: "middle", alignItems: "center", textAlign: "center", justifyContent: "flex-end" })}
`;

const ButtonItem = styled.button`
  margin: 16px;
  padding: 8px;
  border: 0.5px solid lightblue;
  border-radius: 10%;
  background-color: lightseagreen;
  ${mobile({ margin: "4px", padding:"8px", fontSize: "9.5px", alignItems: "center", textAlign: "center", verticalAlign: "middle" })}

  &:hover {
    background-color: lightskyblue;
  }
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "2px", margin: "15px 14px", verticalAlign: "middle" })}
`;

const Navbar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          {/* <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder="Search" />
              <Search style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
          </Left> */}

          <Center>
            <StyledLink to="/">
              <Logo>Amn & Co.</Logo>
            </StyledLink>
          </Center>

          <Right>
            <Link to="/register">
              <ButtonItem>REGISTER</ButtonItem>
            </Link>
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
