import React, {useEffect, useState} from "react";

// const students = [
//     {
//         id: 1,
//         name: "Inje",
//     },
//     {
//         id: 2,
//         name: "Steve",
//     },
//     {
//         id: 3,
//         name: "Bill",
//     },
//     {
//         id: 4,
//         name: "Jeff",
//     },
// ];

// function AttendanceBook(props){
//     // 리스트 안에서 고유한 키값 필수
    // return(
    //     <ul>
    //         {students.map((student)=>{
    //             return <li key={student.id}>{student.name}</li>
    //         })}
    //     </ul>
    // );
// }

const AttendanceBook = (props)=>{
    const [students, setStudents] = useState([]);

    useEffect(()=>{
        fetch("/students.json",{
            method: "GET",
        })
        .then((response)=>response.json())
        .then((result)=>{
            setStudents(result);
            console.log(result);
        });
    }, []);

    return(
        <ul>
            {students.map((student)=>{
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    );
}

export default AttendanceBook;