import React from "react";

const Book = (props) => {
    return(
        <div>
            <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
            <h1>{`이 책은 총 ${props.numOfPage}로 구성되어 있습니다.`}</h1>
        </div>
    )
};

export default Book;