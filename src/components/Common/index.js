import styled from 'styled-components'
import { Link as RouterLink } from '@reach/router'

export const Button = styled.button`
  background-color: #fff;
  border: 1px solid #333;
  border-radius: 5px;
  color: #333;
  cursor: pointer;
  display: block;
  font-weight: bold;
  min-width: 150px;
  outline: none;
  padding: 0.75rem 0;
`
export const Image = styled.img`
  border-radius: 50%;
  max-width: 200px;
`
export const Link = styled(RouterLink)`
  color: green;
  text-decoration: none;
`
export const TextBody = styled.p`
  color: #333;
  line-height: 2;
  text-align: justify;
  margin-bottom: 1rem;
`
export const Title = styled.h1`
  color: black;
`
