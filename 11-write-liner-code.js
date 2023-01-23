// Write Liner Code


// Bad
const sharePost = () => {
    getPost().then((post) => {
        sendTweet(post.url, `This is an awesome title`).then(() => {
            console.log('Tweet Tweeted');
        })
    })
}


// Good
const sharePost = async () => {
    const post = await getPost();
    const tweet = await sendTweet(post.url, `This is an awesome title`);
    console.log('Tweet Tweeted');
}