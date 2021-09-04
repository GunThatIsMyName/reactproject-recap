export const page =(data)=>{
    const itemNumber = 12;
    const pageNumber = Math.ceil(data.length/itemNumber);
    const newItem = Array.from({length:pageNumber},(a,idx)=>{
        const item = idx * itemNumber;
        return data.slice(item,(itemNumber+item))
    })
    return newItem;
}