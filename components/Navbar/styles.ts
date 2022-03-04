import styled from 'styled-components'

export const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1em 1.2em;
margin-bottom: 2em;
background-color: #333;
color: white;
`

export const Logo = styled.div`
display: flex;
justify-content: center;
align-items: center;


h1{
    gap: .5em;
}
`

export const Ul = styled.ul`
display: flex;
list-style: none;

li{
    gap: 1.3em;
}

a{
    color: white;
    text-decoration: none;
    padding: 5px;
    transition: .4s;
    border-bottom: 1.5px solid transparent;
}

a:hover{
    border-color: white;
}
`