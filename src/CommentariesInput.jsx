import React from 'react';

function CommentariesInput(props) {
    return (

        <>
            <textarea className='comentaries__TextInput' placeholder="Текст комментария"></textarea>
            <button className='BTNSend'>Отправить</button>
        </>

    );
}

export default CommentariesInput;