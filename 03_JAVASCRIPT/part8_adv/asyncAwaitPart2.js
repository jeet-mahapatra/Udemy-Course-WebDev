const fetchPost = function(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve(`Post data fetched successfully`)
        }, 3000);
    })
}

function fetchComment() {
     return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve(`Comment fetched successfully`)
        }, 2000);
    })
}

async function getData(){
    try {
        console.log(`Data is fetching ...`);
        // const postData = await fetchPost()
        // const commentData = await fetchComment()

        const [postData , commentData] = await Promise.all([fetchPost() , fetchComment()])

        console.log(postData);
        console.log(commentData);

        console.log(`All data fetched complete`);
        
        
    } catch (error) {
        console.log(`the getData error is :: `,error);  
    }
}

getData()