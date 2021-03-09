import React from 'react';
import Container from '../Styled-Components/Container';
import styled from 'styled-components';
import Button from '../Styled-Components/Button'


const ContactSectionContainer = styled.div`
    padding: 50px 10px;
    display: flex;
    font-family: 'Righteous', 'cursive';
    justify-content: space-between;

    @media (max-width: 576px){
        flex-direction: column-reverse;
        padding: 20px;
    }
`

const Contact = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    @media (max-width: 576px){
        width: 100%;
        height: 200px;
        margin: 30px 0;
    }
`


const ContactInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    p{
        &:nth-child(1){
            font-size: 1rem;
        }
        &:nth-child(2){
            color: grey;
            font-size: 1rem;
        }
    }
`

const IconWrapper = styled.div`
    display: flex;
    gap: 10px;
    justify-content: flex-start;
`

const Header = styled.p`
    font-size: 2rem;
`

const ContactForm = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 50%;
    @media (max-width: 576px){
        width: 100%;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    label{
        margin: 15px 0;
        span{
            font-size: 0.8rem;
            align-self: center;
            margin-left: 20px;
        }
    }

    ${Button}{
        margin: 15px 0 0 0;
    }
`

const Input = styled.input`
    width: 100%;
    border: none;
    outline: none;
    box-shadow: none;
    font-size: 0.8rem;
    font-family: 'Righteous', 'cursive';
    border-bottom: 1px solid black;
    padding: 10px 0px;
    transition: border 0.1s ease-in;
    &:focus{
        border-bottom: 2px solid black;
    }
    margin: 15px 0;
`




const ContactSection = () => {
    return (
        <Container>
            <ContactSectionContainer>
                <Contact>
                    <Header>
                        Contact
                    </Header>
                    <ContactInfoWrapper>
                        <p>
                            email:
                        </p>
                        <p>
                            boutique@gmail.com
                        </p>
                    </ContactInfoWrapper>
                    <ContactInfoWrapper>
                        <p>
                            phone:
                        </p>
                        <p>
                            +91 8976-777256
                        </p>
                    </ContactInfoWrapper>
                    <IconWrapper>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0.0400391C4.5 0.0400391 0 4.53004 0 10.06C0 15.06 3.66 19.21 8.44 19.96V12.96H5.9V10.06H8.44V7.85004C8.44 5.34004 9.93 3.96004 12.22 3.96004C13.31 3.96004 14.45 4.15004 14.45 4.15004V6.62004H13.19C11.95 6.62004 11.56 7.39004 11.56 8.18004V10.06H14.34L13.89 12.96H11.56V19.96C13.9164 19.5879 16.0622 18.3856 17.6099 16.5701C19.1576 14.7546 20.0054 12.4457 20 10.06C20 4.53004 15.5 0.0400391 10 0.0400391Z" fill="black"/>
                        </svg>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z" fill="black"/>
                        </svg>
                    </IconWrapper>
                </Contact>
                <ContactForm>
                    <Header>
                        Get More Information
                    </Header>
                    <Form onSubmit={(e)=>e.preventDefault()}>
                        <Input type="text" placeholder="Name" />
                        <Input type="email" placeholder="Email" />
                        <label class="b-contain">
                            <span>I agree with processing of personal data</span>
                            <input type="checkbox" />
                            <div class="b-input"></div>
                        </label>
                        <Button type="submit">
                            Send Form
                        </Button>
                    </Form>
                </ContactForm>
            </ContactSectionContainer>
        </Container>
    );
};

export default ContactSection;