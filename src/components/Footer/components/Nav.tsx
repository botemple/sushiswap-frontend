import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://etherscan.io/address/0x96AD39EF4A9D2491Eb3590DB93602Cadd8457A28#code"
      >
        MasterChef Contract
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://app.uniswap.org/#/add/ETH/0xcF4e808d0C78384f7b0A3f861741932BEF627447"
      >
        Uniswap AIB-ETH
      </StyledLink>
      <StyledLink target="_blank" href="https://discord.gg/4HYJFk">
        Discord
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/iobond">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/aibcoin">
        Twitter
      </StyledLink>
      
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
