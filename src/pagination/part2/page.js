export const PAGE = (data)=>{
    const itemPerPage = 15;
    const pages = Math.ceil(data.length/itemPerPage);
    const item = Array.from({length:pages},(a,idx)=>{
        const start = idx * itemPerPage;
        return data.slice(start,(start+itemPerPage))
    });
    return item;
}