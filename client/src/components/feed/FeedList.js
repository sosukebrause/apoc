import React, { useState } from "react";

const convertDate = (date) => {
  let d = date;
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
};

const styles = {
  border: "1px solid",
  padding: "10px",
  margin: "10px",
};

const FeedList = (props) => {
  const [feedItem, setFeedItem] = useState(props.feedData);

  let titleArr = props.feedData.map((item, index) => (
    <div key={index} style={styles}>
      <h3>
        {item.location.city}, {item.location.state_name}
      </h3>
      <p>{item.author.id ? item.author.id.displayName || "" : ""}</p>
      <p style={styles}>{item.text}</p>
      <p>{item.date}</p>
    </div>
  ));

  return <div style={styles}>{titleArr}</div>;
};

export default FeedList;
