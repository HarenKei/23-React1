import React from "react";
import Card from "./Card";

const ProfileCard = (props) => {
    return(
        <Card title="Seungmin Jeong" backgroundColor="#4ea04e">
            <p>안녕하세요, 정승민입니다.</p>
            <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
        </Card>
    );
};

export default ProfileCard;