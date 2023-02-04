import React from 'react';
import TextareaAutosize  from 'react-textarea-autosize';

function CommentariesInput(props) {
    return (

        <>
            <TextareaAutosize className='comentaries__TextInput' placeholder="Текст комментария"/>
            <button className='BTNSend'>Отправить</button>
        </>

    );
}

export default CommentariesInput;