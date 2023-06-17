import React from 'react';
import { Avatar, Card } from 'antd'; 

const UserProfile = () => {
     return (
        <Card actions={[
            <div key="twit">짹짹<br />0</div>,
            <div key="twit">짹짹<br />0</div>,
            <div key="twit">짹짹<br />0</div>,
        ]}>
            <Card.Meta avatar={<Avatar>SDG</Avatar>} title="SHIN"/>
        </Card>
     )
};

export default UserProfile;
