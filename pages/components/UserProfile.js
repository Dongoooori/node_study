import React, { useCallback } from 'react';
import {Avatar, Button, Card} from 'antd';

const UserProfile = ({setIsLoggedIn}) => {
   const onLogout = useCallback(() => {
      setIsLoggedIn(false)
   },[])
	return (
		<>
			<Card
				actions={[
					<div key='twit'>짹짹<br />0</div>,
					<div key='twit'>팔로잉<br />0</div>,
					<div key='twit'>팔로워<br />0</div>
				]}
         >
				<Card.Meta avatar={<Avatar>SDG</Avatar>} title='SHIN' />
			</Card>
			<Button onClick={onLogout}>로그아웃</Button>
		</>
	);
};

export default UserProfile;
