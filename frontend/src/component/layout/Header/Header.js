import React from "react";
import { ReactNavbar } from "overlay-navbar";

const Header = () => {
    return (
      <ReactNavbar
        burgerColorHover="#eb4034"
        logo="/images/logo.png"
        logoWidth="20vmax"
        navColor1="white"
        logoHoverSize="10px"
        logoHoverColor="#eb4034"
        link1Text="Home"
        link2Text="Products"
        link3Text="Contact"
        link4Text="About"
        link1Url="/"
        link2Url="/products"
        link3Url="/contact"
        link4Url="/about"
        link1Size="1.3vmax"
        link1Color="rgba(35, 35, 35, 0.8)"
        nav1JustifyContent="flex-end" // Corrected the property names, it should be 'nav1JustifyContent' instead of 'nav1justifyContent'.
        nav2JustifyContent="flex-end" // Similarly, 'nav2JustifyContent' instead of 'nav2justifyContent'.
        nav3JustifyContent="flex-start" // 'nav3JustifyContent' instead of 'nav3justifyContent'.
        nav4JustifyContent="flex-start" // 'nav4JustifyContent' instead of 'nav4justifyContent'.
        link1ColorHover="#eb4034"
        link1Margin="1vmax"
        profileIconUrl="/login"
        profileIconColor="rgba(35, 35, 35, 0.8)"
        searchIconColor="rgba(35, 35, 35, 0.8)"
        cartIconColor="rgba(35, 35, 35, 0.8)"
        profileIconColorHover="#eb4034"
        searchIconColorHover="#eb4034"
        cartIconColorHover="#eb4034"
        cartIconMargin="1vmax"
      />
    );
  };
  
  export default Header;