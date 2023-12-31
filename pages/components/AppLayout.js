import React, {useState} from 'react';
import Proptypes from 'prop-types';
import Link from 'next/link';
import {Input, Menu, Row, Col} from 'antd';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import styled from 'styled-components';

const SearchInput = styled(Input.Search)`
     verticalalign: middle;
`;

const AppLayout = ({children}) => {
     const [isLoggedIn, setIsLoggedIn] = useState(false);

     return (
          <div>
               <Menu mode='horizontal'>
                    <Menu.Item>
                         <Link href='/'>
                              <a>노드버드</a>
                         </Link>
                    </Menu.Item>
                    <Menu.Item>
                         <Link href='/profile'>
                              <a>프로필</a>
                         </Link>
                    </Menu.Item>
                    <Menu.Item>
                         <SearchInput placeholder='input search text' enterButton />
                    </Menu.Item>
                    <Menu.Item>
                         <Link href='/signup'>
                              <a>회원가입</a>
                         </Link>
                    </Menu.Item>
               </Menu>
               <Row gutter={8}>
                    <Col xs={24} md={6}>
                         {isLoggedIn ? <UserProfile /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
                    </Col>
                    <Col xs={24} md={12}>
                         {children}
                    </Col>
                    <Col xs={24} md={6}>
                         <a href='https://grit-ing.tistory.com' target='blank' rel='noreferrer no opener'>
                              Made by Shin
                         </a>
                    </Col>
               </Row>
          </div>
     );
};

AppLayout.propTypes = {
     children: Proptypes.node.isRequired,
};

export default AppLayout;
