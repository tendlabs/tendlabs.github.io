import { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import {
  Grid,
  Text,
  MaxWidth,
  Icon,
  Button
} from './ui'
import ContactFormModal from './ContactFormModal';

const StyledHeader = styled(Grid)`
  padding: ${({ theme }) => theme.util.buffer * 6}px 0;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}px) {
    padding: ${({ theme }) => theme.util.buffer * 2}px 0;
  }
`;
const StyledLogo = styled.div`
  width: ${({ theme }) => theme.util.buffer * 9}px;
  height: ${({ theme }) => theme.util.buffer * 9}px;
  border-radius: ${({ theme }) => theme.util.radius.regular}px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.color.primary.main};
  &:hover {
    cursor: pointer;
  }
`;

const Header = ({}) => {
  const [ contactModalOpen, setContactModalOpen ] = useState(false)
  return (
    <>
      <MaxWidth>
        <StyledHeader container alignItems="center" justifyContent="space-between">

          <Grid item>
            <Grid container alignItems="center" spacing={3}>
              <Link href="/design">
                <Grid item>
                  <StyledLogo>
                    <Icon type="layer" size={20}/>
                  </StyledLogo>
                </Grid>
              </Link>
              <Grid item>
                <Text title small bold primary>Tend Design</Text>
                <Link href="/">
                  <a>
                    <Text body mini bold primary>By Tend Labs</Text>
                  </a>
                </Link>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container>
              <Button small lightened onClick={() => setContactModalOpen(true)}>
                <Text body regular bold primary>Work with us</Text>
              </Button>
            </Grid>
          </Grid>

        </StyledHeader>
      </MaxWidth>
      <ContactFormModal
        isOpen={contactModalOpen}
        toggle={() => setContactModalOpen(!contactModalOpen)}
      />
    </>
  )
}

export default Header
