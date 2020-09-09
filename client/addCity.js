const feed = [
  { user: "Clarence", city: "SF", post: "Upload Video" },
  { user: "Lilith", city: "Berkeley", post: "Rob Bank" },
];

function addToFeed(newPost) {
  return [...feed, { ...newPost, city: "Los Angeles" }];
}

const newPost = addToFeed({ user: "Mordecai", post: "Feed Bloodwing" });

console.log(newPost);
