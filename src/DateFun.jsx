import { useState } from "react";

function DateFun() {
    let [first, setFirst] = useState(0)
    let [second, setSecond] = useState(0)
    let [third, setThird] = useState(0)
    let [four, setFour] = useState(0)
    let [five, setFive] = useState(0)
    let [six, setSix] = useState(0)


    setInterval(function () {
        let dates = new Date()
        let date = dates.getDate()
        // first = date
        setFirst(date)
        let month = dates.getMonth()
        // second = month + 1
        setSecond(month + 1)
        let year = dates.getFullYear()
        // third = year
        setThird(year)
        let Hours = dates.getHours()
        // four = Hours
        setFour(Hours)
        let Minute = dates.getMinutes()
        // five = Minute
        setFive(Minute)
        let Second = dates.getSeconds()
        // six = Second
        setSix(Second)
        console.log(first, second, third, four, five, six)

    }, 1000)

    return (
        <div>
            <h1>DateFun</h1>
            {first}-
            {second}-
            {third}-
            {four}:
            {five}:
            {six}
        </div>
    );
}

export default DateFun;