import React,{useState, useEffect} from 'react';
import {BrowserRouter as Route, useHistory} from 'react-router-dom';
import './Question.css';

const data = [
    {
        "question": "Britain and France declared war on Germany on 3 September 1939 after the German invasion of which country?",
        "answers": {
            "a": "Denmark",
            "b": "Poland",
            "c": "Czechoslovakia",
            "d": "you",
            "correct": "b"
        }
    },
    {
        "question": "When did Germany invade the USSR?",
        "answers": {
            "a": "May 1940",
            "b": "May 1940",
            "c": "June 1941",
            "d": "you",
            "correct": "c"
        }
    },
    {
        "question": "What was the name of Britain's new bombing policy in May 1942 that targeted German cities?",
        "answers": {
            "a": "Tactical bombing",
            "b": "Area bombing",
            "c": "Precision bombing",
            "d": "you",
            "correct": "b"
        }
    },
    {
        "question": "What was the name of the army officer who planted the bomb that almost killed Hitler in July 1944?",
        "answers": {
            "a": "Colonel Stauffenberg",
            "b": "Field Marshal Rommel",
            "c": "Colonel Tresckow",
            "d": "Limpo",
            "correct": "a"
        }
    },
    {
        "question": "To which country in Nazi occupied Europe were Jews sent as part of the 'Final Solution' agreed at the Wannsee Conference?",
        "answers": {
            "a": "Poland",
            "b": "Czechoslovakia",
            "c": "Estonia",
            "d": "utava",
            "correct": "a"
        }
    },
    {
        "question": "What was the name of the biggest Nazi death camp?",
        "answers": {
            "a": "Treblinka",
            "b": "Sobibor",
            "c": "Auschwitz-Birkenau",
            "d": "Litka",
            "correct": "c"
        }
    },
    {
        "question": "Where did German army lose its first battle of the war in Europe, in early 1943?",
        "answers": {
            "a": "Moscow",
            "b": "Stalingrad",
            "c": "Leningrad",
            "d": "Utval",
            "correct": "b"
        }
    },
    {
        "question": "When did Germany surrender to the Allies, ending World War Two in Europe?",
        "answers": {
            "a": "March 1945",
            "b": "May 1945",
            "c": "August 1945",
            "d": "May 1425",
            "correct": "b"
        }
    },
    {
        "question": "In which German city were the trials of those Nazis suspected of war crimes held from late 1945?",
        "answers": {
            "a": "Berlin",
            "b": "Dresden",
            "c": "Nuremberg",
            "d": "Willy Brandt",
            "correct": "c"
        }
    },
    {
        "question": "Who was the first Chancellor of the Federal Republic of Germany (West Germany)?",
        "answers": {
            "a": "Wilhelm Pieck",
            "b": "Konrad Adenauer",
            "c": "Willy Brandt",
            "d":"Lucifer",
            "correct": "b"
        }
    }
];
const Question = ()=>{
    let history=useHistory();

    const [timer,setTimer] = useState(60); 

    const [i, setIndex] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    

    useEffect(() => {
        if (timer > 0) {
          setTimeout(() => setTimer(timer - 1), 1000);
        } else {
            history.push({
                pathname:'/result',
                state:{count: correctCount}
            });
        }
      });

    const checkCorrect=(val)=>{
          if(val===data[i].answers.correct){
            setCorrectCount(correctCount+1);
            setTimer(60);
            if(i+1>=15){
                history.push({
                    pathname:'/result',
                    state:{count: correctCount}
                });
            }
            setIndex(i+1);
          }
          else{
                history.push({
                    pathname:'/result',
                    state:{count: correctCount}
                });
          }
    }


          return(
              <div className="body">
                        <p className="timer">{timer}</p>
                        <p className="question">{data[i].question}</p>
                        <div className="options" >
                            <button onClick={()=>{checkCorrect("a")}} className="button">{data[i].answers.a}</button>
                            <button onClick={()=>{checkCorrect("b")}} className="button">{data[i].answers.b}</button>
                            <button onClick={()=>{checkCorrect("c")}} className="button">{data[i].answers.c}</button>
                            <button onClick={()=>{checkCorrect("d")}} className="button">{data[i].answers.d}</button>
                        </div>
                        <div>
                            <button onClick={()=>{
                                 history.push({
                                    pathname:'/result',
                                    state:{count: correctCount}
                                });
                            }} className="button">Quit</button>
                        </div>
              </div>
          )
}           
export default Question;