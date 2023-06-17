import React, {useCallback, useState} from 'react';
import {Button, Form, Input} from 'antd';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
     margintop: 10px;
`;

const LoginForm = ({setIsLoggedIn}) => {
     const [id, setId] = useState('');
     const [password, setPassword] = useState('');

     const onChangeId = useCallback((e) => {
          setId(e.target.value);
     }, []);
     const onChangePassword = useCallback((e) => {
          setPassword(e.target.value);
     }, []);

     const onSubmitForm = useCallback(() => {
          console.log(id, password);
          setIsLoggedIn(true);
     }, [id, password]);

     return (
          <Form onFinish={onSubmitForm}>
               <div>
                    <label htmlFor='user-id'>아이디</label>
                    <br />
                    <Input name='user-id' value={id} onChange={onChangeId} required />
               </div>
               <div>
                    <label>패스워드</label>
                    <br />
                    <Input name='user-password' type='password' value={password} onChange={onChangePassword} required />
               </div>
               <div>
                    <Button type='primary' htmlType='submit' loading={false}>
                         로그인
                    </Button>
                    <ButtonWrapper href='/signup'>
                         <a>
                              <Button>회원가입1</Button>
                         </a>
                    </ButtonWrapper>
               </div>
          </Form>
     );
};

export default LoginForm;
