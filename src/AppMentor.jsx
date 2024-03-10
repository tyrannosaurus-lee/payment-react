import React, { useState } from 'react';

/*
const obj = {
    name: '은혜',
    title: '개발자',
    mentor: {
        name: '밥',
        title: '시니어개발자',
    },
};

const name = '업데이트 이름';
const update = {
    ...obj,
    mentor: {...obj.mentor, name},
};
*/

export default function AppMentor(props) {

    const [person, setPerson] = useState({
        name: '은혜',
        title: '개발자',
        mentor: {
            name: '밥',
            title: '시니어개발자',
        },
    });
    
    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p>
                {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
            </p>
            <button
                onClick={() => {
                    const name = prompt(`what's your mentor's name?`);
                    setPerson((person) => ({
                        ...person,
                        // mentor: {...person.mentor, name: name}
                        mentor: {...person.mentor, name},
                    }));
                }}
            >
                멘토 이름 바꾸기
            </button>
            <button
                onClick={() => {
                    const title = prompt(`what's your mentor's title?`);
                    setPerson((person) => ({
                        ...person,
                        mentor: {...person.mentor, title},
                    }));
                }}
            >
                멘토 타이틀 바꾸기
            </button>
        </div>
    )
}