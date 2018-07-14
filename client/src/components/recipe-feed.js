import React from 'react';
import styled from 'react-emotion';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const Container = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: auto;
  height: 75vh;
  padding: 1rem;
  & > * + * {
    margin-left: 1rem;
  }
`;

const Card = styled.div`
  position: relative;
  flex: 0 0 20rem;
  height: 100%;
  display: grid;
  grid-template-rows: 2rem 1fr;
  align-content: center;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 6px 14px hsla(200, 10%, 50%, 0.6);
  background-color: black;
  background-image: url('${p => p.image || ''}');
  background-size: cover;
  background-position: center center;
  color: white;
  & > * {
    z-index: 10;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-image: linear-gradient(rgba(0, 0, 0, 0) 50%, black);
    z-index: 0;
  }
`;

const Title = styled.h2`
  grid-row: 2;
  align-self: end;
  font-size: 2.5rem;
`;

const Time = styled.span`
  grid-row: 1;
  justify-self: end;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 0.5rem;
  align-items: center;
`;

const Clock = () => (
  <svg
    viewBox="0 0 32 32"
    width="24"
    height="24"
    fill="none"
    stroke="currentcolor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
  >
    <circle cx="16" cy="16" r="14" />
    <path d="M16 8 L16 16 20 20" />
  </svg>
);

const recipeQuery = gql`
  {
    recipe(id: 123456) {
      id
      name
      cuisine
      instructions
      ingredients {
        type {
          name
        }
        quantity
      }
    }
  }
`;

const RecipeFeed = () => (
  <Query query={recipeQuery}>
    {({ data, loading, error }) => {
      if (loading) return null;
      if (!loading && data)
        return (
          <Container>
            <Card image="https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMxNDgwfQ&s=5cd89f3aa5043489b3b1a29b2c45f1c8">
              <Title>{data.recipe.name}</Title>
              <Time>
                <Clock aria-label="duration" />
                <small>30m</small>
              </Time>
            </Card>
            <Card>
              <Title>{data.recipe.name}</Title>
            </Card>
            <Card>
              <Title>{data.recipe.name}</Title>
            </Card>
            <Card>
              <Title>{data.recipe.name}</Title>
            </Card>
          </Container>
        );
    }}
  </Query>
);

export default RecipeFeed;
