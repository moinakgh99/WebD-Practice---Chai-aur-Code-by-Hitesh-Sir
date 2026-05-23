function getPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post Data Fetched Successfully...");
    }, 2000);
  });
}

function getCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment Data Fetched Successfully...");
    }, 3000);
  });
}

async function getBlogData() {
  try {
    console.log("Fetching Blog Data");
    // const postData = await getPostData()
    // const commentData = await getCommentData()
/* Another way of writing multiple promises */

   const [postData,commentData] = await Promise.all([
    getPostData(), 
    getCommentData()
])

    console.log(postData);
    console.log(commentData);
    
    console.log("Blog Data Fetched ...");
    
  } catch (error) {
    console.error("Error Data fetched", error);
  }
}

getBlogData()