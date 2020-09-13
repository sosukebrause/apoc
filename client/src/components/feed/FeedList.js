import React, { useState, useEffect } from "react";

import API from "../../utils/API";

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
  const [feedItems, setFeedItems] = useState([]);

  const [text, setText] = useState("");

  useEffect(() => {
    setFeedItems(props.feedData);
  }, [props.feedData]);

  function changeText(e) {
    setText(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (text.trim() === "") return;
    let { city, state_name, county } = props.mapInfo;

    console.log(city, state_name, text);
    try {
      const newComment = await API.postFeedData(city, state_name, text);
      console.log(newComment.data);
    } catch (error) {
      return console.log(error);
    }
    try {
      const allComments = await API.getFeedData(city, state_name, county);
      setFeedItems(allComments.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setText("");
    }
  }

  let titleArr = feedItems.map((item, index) => (
    <div key={index} style={styles}>
      <h3>
        {item.location.city}, {item.location.state_name}
      </h3>
      <p>{item.author.id ? item.author.id.displayName || "" : ""}</p>
      <p style={styles}>{item.text}</p>
      <p>{item.date}</p>
    </div>
  ));

  return (
    <div style={{ border: "1px solid", height: "400px", width: "450px", overflow: "scroll" }}>
      {titleArr}
      <input
        name="text"
        type="text"
        placeholder="add comment"
        onChange={changeText}
        value={text}
      />

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default FeedList;
