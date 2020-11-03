import React, {useState, useEffect} from "react";
import './Questions.scss';
import bars from '../../images/Common/bars-solid.svg';
import closeBars from '../../images/Common/Close.svg';
import Aside from "../../Components/Aside/Aside";
import Answer from "../../Components/Answer/Answer";

const Questions = ({isCompleted, isTotal}) =>{
    const ApiUrl = 'http://localhost:3000/questions'
    // Questions Arr
    const [questions, setQuestions] = useState([]);
    // Current Question / Start Question
    const [current, setCurrent] = useState(0)
    // Current Total Win
    const [currentTotal, setCurrentTotal] = useState(0)

    useEffect(() => {
        let unmounted = false;
        const getQuestions = async () => {
            const response = await fetch(ApiUrl)
                .then(res => res.json())
                .then((data) => { setQuestions(data); });
        }
        getQuestions()
        return () => { unmounted = true };
    }, []);

    questions.reverse()
    // Aside total
    const money = questions.map((item,index)=> {
        questions[0].completed = false;
        const arr = []
        for(let i = 0; i<=questions.length; i++){
            arr.push(i)
        }
        arr.reverse()

        return(
            <Aside
                key={index + Math.random()}
                className={arr[index] -1 === current ? 'total_item_active' : 'total_item'}
                dataCurrent={arr[index]}
                id={arr[index] -1 < current ? 'completed' : null}
                total={item.total}
            />
        )
    })

    questions.reverse()
    // Questions
    const title = questions.map((item,index)=> {
        if (index === current){
            return(
                <h1
                    key={index}
                    className="question_title"
                >{item.question}
                </h1>
            )
        }
    })

    // Changing question
    const nextQuestion = () =>{
        if(current <= questions.length){
            const jackpot = questions[questions.length-1]
           questions.map((item,index)=>{
               if(current === questions.length -1){
                   setCurrentTotal(jackpot.total)
                   isTotal(jackpot.total)
                   isCompleted()
               }
                else if(index === current){
                    setCurrentTotal(item.total)
                    isTotal(currentTotal)
                }
                })
        }else if(current  === questions.length -1){
            isTotal(currentTotal)
            isCompleted()
        } else {
            isTotal(currentTotal)
            isCompleted()
        }
        setCurrent(current + 1)
    }

    // If answer incorrect
    const completeFailed = () =>{
        isTotal(currentTotal)
        isCompleted()
        setCurrent(0)
    }

    // Question answers
    const answers = questions.map((item,index)=> {
        if(index === current){
            return (
                <Answer
                    key={index}
                    data={item.answers}
                    classN='answer_item'
                    next={nextQuestion}
                    completed={completeFailed}
                />
            )
        }
    })

    // Opening Menu
    const [menuOpen, setMenuOpen] = useState(false)
    const menu = menuOpen === false ? '' : 'active';
    const questionsClasses = `question_aside ${menu}`;

    const handleChangeMenu = () =>{
        menuOpen === false ? setMenuOpen(true) : setMenuOpen(false)
    }

    return (
        <div className="question_content">
            <div className="container">
                <div className="question_main">
                    {title}
                    <div className="question_answers">
                        {answers}
                    </div>
                </div>
                <aside className={questionsClasses}>
                    <button className="questions_menu">
                        <img
                            className={menuOpen === false ? 'menu_active' : 'menu_btn'}
                            src={bars}
                            alt="bars"
                            onClick={()=>handleChangeMenu()}
                        />
                        <img className={menuOpen === true ? 'menu_active' : 'menu_btn'}
                             src={closeBars}
                             alt="close-bars"
                             onClick={()=>handleChangeMenu()}
                        />
                    </button>
                    <ul className="total_list">
                        {money}
                    </ul>
                </aside>
            </div>
        </div>
    )
}

export default Questions