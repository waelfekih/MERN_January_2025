import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js"
dayjs.extend(relativeTime)



export const takeDate = () => {
    return dayjs().format("MMMM DD, YYYY , HH:mm:ss")
}

export const convertTimeOne  = (date1) => {
    return dayjs(date1).fromNow();
}

export const convertTimeTwo = (date1) => {
    return dayjs(date1).format("dddd , MMMM , DD , YYYY")
}

export const convertTimeThree = (date1) => {
    return dayjs(date1).format("MM/DD/YYYY")
}


