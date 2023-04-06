import React from "react";
import Comment from "./Comment";

const CommentList = () => {
    return(
        <div>
            <Comment name={"육영현"} comment={"아쎄이... 기열!"}/>
            <Comment name={"박세진"} comment={"세진이 귀여워"}/>
            <Comment name={"정승민"} comment={"제가 취업을 할 수 있을까요?"}/>
        </div>
    );
};

export default CommentList;