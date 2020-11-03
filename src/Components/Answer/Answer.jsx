import React from 'react';
import './Answer.scss';

const Answer = ({data, next, completed, classN}) => {

    const answer = data && data.map((item,index)=> {
        function getKeyByValue(object, value) {
            return Object.keys(object).find(key => object[key] === value);
        }

        const keyCorrect = getKeyByValue(item, true)
        const keyIncorrect = getKeyByValue(item, false)

        const getValue = ({index}) =>{
            if(keyCorrect){
                setTimeout(()=>{
                    next()
                },100)
            }else {
                completed()
            }
        }

        const makeLetter = () =>{
            if(index === 0){return 'A'}
            else if (index === 1){return 'B'}
            else if(index === 2){return 'C'}
            else{return 'D'}
        }

        return (
            <a
                key={index}
                className={classN}
                data-id={index}
                onClick={getValue}
            ><span>{makeLetter()}</span> {keyCorrect ? keyCorrect: keyIncorrect}
            </a>
        )
    })

    return (
        <div>
            {answer}
        </div>
    );
};

export default Answer;
