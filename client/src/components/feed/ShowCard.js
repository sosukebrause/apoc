import React from "react";
import PropTypes from "prop-types";

const ShowCard = (props) => {
  const [show, setShow] = useState(true);

  const showCard = () => {
    setShow(!show);
  };

  return (
    <>
      <div style={{ height: "540px", width: "300px" }}>
        <FormControlLabel
          control={<Checkbox id="checkbox" onClick={showCard} checked={show} />}
        />
        {show && (
          <Card
            id="card"
            style={{ width: "300px", height: "530px" }}
            variant="outlined"
          >
            <CardContent>
              <Typography variant="h4" component="h4">
                <p style={{ textAlign: "center" }}>Current Weather</p>
              </Typography>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};

export default ShowCard;
