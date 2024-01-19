
export const formatTime =(timestamp)=>{
    const date = new Date(timestamp);
const options = { year: 'numeric', month: 'long', day: 'numeric' };

const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
return formattedDate;

}