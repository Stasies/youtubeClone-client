import React from "react";
import { Container, CategoryButton } from "./CategoriesNavigationElements";

const CategoriesNavigation = () => {
  return (
    <Container>
      <CategoryButton>All</CategoryButton>
      <CategoryButton>Live</CategoryButton>
      <CategoryButton>Gaming</CategoryButton>
      <CategoryButton>Music</CategoryButton>
      <CategoryButton>Mixes</CategoryButton>
      <CategoryButton>Watched</CategoryButton>
      <CategoryButton>New to you</CategoryButton>
    </Container>
  );
};

export default CategoriesNavigation;
