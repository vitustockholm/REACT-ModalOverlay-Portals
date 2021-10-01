import React, { useState, useRef } from 'react';
import { NavbarWrapper } from './Navbar.style';
import Button from './Button';
import Modal from './Modal';
import ModalRegister from './ModalRegister';

import { Navbar, Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';
// import { LOGIN_URI, SIGNUP_URI } from './utilities/enpoints.js';
// import axios from 'axios';
import './utilities/login_page.css';
import './utilities/utilities.css';

import Home from './Home';
import Contact from './Contact';
import About from './About';

const NavbarComp = () => {
  //Hooks
  //--state
  const [isOpenLogin, setIsOpenLogin] = useState(false); //for login modal
  const [isOpenRegister, setIsOpenRegister] = useState(false); //for  register modal2
  //  // ---- local
  // ------ login form
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  //
  // refs
  const inputRef = useRef();
  const loginErrorElemRef = useRef();
  //Custom functions
  const openModal = () => {
    setIsOpenLogin(true);
  };
  //register modal
  const openModalRegister = () => {
    setIsOpenRegister(true);
  };

  const closeModal = () => {
    setIsOpenLogin(false);
  };
  //close register modal
  const closeModalRegister = () => {
    setIsOpenRegister(false);
  };
  //   let message = 'Wrong!';
  //   //
  //   const displayLoginErrorMessage = (message) => {
  //     const elem = loginErrorElemRef.current;
  //     elem.className = '';
  //     elem.classList.add('form-message-danger', 'form-message');
  //     setLoginErrorMessage(message);
  //   };
  //
  const loginUser = (e) => {
    e.preventDefault();
    console.log(e);

    inputRef.current.focus();
  };

  //
  return (
    <Router>
      <div>
        <Navbar bg='dark' variant={'dark'} expand='lg'>
          <Navbar.Brand href='/'>L_O_G_O firma</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            {/* // */}
            {/* <Nav className='col-10 justify-content-end' activeKey='/home'>
              <Nav.Item>
                <Nav.Link href='/home'>Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='link-1'>Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='link-2'>Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='disabled' disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item>
            </Nav> */}
            {/* // */}
            <Nav
              className='col-10 justify-content-end'
              //   className='mr-auto my-2 my-lg-2'
              style={{ maxHeight: '100px' }}
            >
              <Nav.Link as={Link} to='/home'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='/about'>
                About
              </Nav.Link>
              <Nav.Link as={Link} to='/contact'>
                Contact
              </Nav.Link>

              <NavbarWrapper>
                <section>
                  <Button text='LOGin' action={openModal} />
                  <Button text='Register' action={openModalRegister} />
                </section>
              </NavbarWrapper>
              {isOpenLogin && (
                <Modal onClose={closeModal}>
                  <>
                    {' '}
                    <main>
                      <div className='container'>
                        <section id='login' className='card-shadow'>
                          <h2>
                            <span>Have account?</span> Log In!
                          </h2>

                          <form
                            id='logInForm'
                            className='form'
                            onSubmit={loginUser}
                          >
                            <div className='form-control'>
                              <label
                                className='form-label'
                                htmlFor='loginEmail'
                              >
                                Email
                              </label>
                              <input
                                className='form-input'
                                type='email'
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                                required
                                ref={inputRef}
                              />
                            </div>

                            <div className='form-control'>
                              <label
                                className='form-label'
                                htmlFor='loginPassword'
                              >
                                Password
                              </label>
                              <input
                                className='form-input'
                                type='password'
                                value={loginPassword}
                                onChange={(e) =>
                                  setLoginPassword(e.target.value)
                                }
                                required
                              />
                            </div>

                            <div className='form-control'>
                              <input
                                type='submit'
                                value='Log In'
                                className='btn-primary btn-primary-submit'
                              />
                            </div>
                          </form>
                          <p
                            id='loginMessage'
                            className='hidden form-message form-message-danger'
                            ref={loginErrorElemRef}
                          >
                            {loginErrorMessage}
                          </p>
                        </section>
                      </div>
                    </main>
                  </>
                </Modal>
              )}
              {isOpenRegister && (
                <ModalRegister onClose={closeModalRegister}>
                  <>
                    {' '}
                    <section id='signup' className='card-shadow'>
                      <h2>
                        <span>New user?</span> Sign Up!
                      </h2>

                      <form
                        id='signUpForm'
                        className='form'
                        // onSubmit={signupUser}
                      >
                        <div className='form-control'>
                          <label className='form-label' htmlFor='signUpName'>
                            Name
                          </label>
                          <input
                            className='form-input'
                            type='text'
                            required
                            // value={signupName}
                            // onChange={(e) => setSignupName(e.target.value)}
                          />
                        </div>

                        <div className='form-control'>
                          <label className='form-label' htmlFor='signUpSurname'>
                            Surname
                          </label>
                          <input
                            className='form-input'
                            type='text'
                            required
                            // value={signupSurname}
                            // onChange={(e) => setSignupSurname(e.target.value)}
                          />
                        </div>

                        <div className='form-control'>
                          <label className='form-label' htmlFor='signUpEmail'>
                            Email
                          </label>
                          <input
                            className='form-input'
                            type='text'
                            required
                            // value={signupEmail}
                            // onChange={(e) => setSignupEmail(e.target.value)}
                            // ref={signupEmailInputRef}
                          />
                        </div>

                        <div className='form-control'>
                          <label
                            className='form-label'
                            htmlFor='signUpPassword'
                          >
                            Password
                          </label>
                          <input
                            className='form-input'
                            type='password'
                            required
                            // value={signupPassword}
                            // onChange={(e) => setSignupPassword(e.target.value)}
                            // ref={signupPasswordInputRef}
                          />
                        </div>

                        {/* <div className='form-control'>
                          <label
                            className='form-label'
                            htmlFor='signUpConfirmPassword'
                          >
                            Confirm Password
                          </label>
                          <input
                            className='form-input'
                            type='password'
                            required
                            value={signupConfirmPassword}
                            onChange={(e) =>
                              setSignupConfirmPassword(e.target.value)
                            }
                          />
                        </div> */}

                        <div className='form-control'>
                          <input
                            type='submit'
                            value='Sign Up'
                            className='btn-primary btn-primary-submit'
                          />
                        </div>
                      </form>
                      {/* <p
                        id='signUpMessage'
                        className='hidden form-message form-message-danger'
                        ref={signupErrorElemRef}
                      >
                        {signupErrorMessage}
                      </p> */}
                    </section>
                  </>
                </ModalRegister>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div className='row justify-content-end'>
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default NavbarComp;

// //
// import React, { useState } from 'react';
// import { AboutPageWrapper } from './AboutPage.style';
// //Components
// import Button from '../components/Button/Button';
// import Modal from '../components/Modal/Modal';

// const AboutPage = () => {
//   //Hooks
//   //--state
//   const [isOpen, setIsOpen] = useState(false); //for modal

//   //Custom functions
//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <>
//       <h5>fdgdfsdffdsfssABOUT</h5>
//       <AboutPageWrapper>
//         <section>
//           <Button text='LOGin' action={openModal} />
//           <Button text='Register' action={openModal} />
//         </section>
//       </AboutPageWrapper>
//       {isOpen && (
//         <Modal onClose={closeModal}>Hello from About page Modal</Modal>
//       )}
//     </>
//   );
// };

// export default AboutPage;
