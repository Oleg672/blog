import React from 'react';

function CommentariesInput(props) {
    return (

        <div className="comentaries__Input">
            <h6 className="comentaries__Title">Обсуждение</h6>
            <textarea className='comentaries__TextInput' placeholder="Текст комментария"></textarea>
            <button className='BTNSend'>Отправить</button>
        </div>

    );
}

export default CommentariesInput;