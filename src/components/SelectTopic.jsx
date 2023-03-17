import { Link } from "react-router-dom";

const SelectTopic = () => {
  return (
    <div>
      <h2>
        <Link to="/topics" id="topics_header">
          Topics
        </Link>
      </h2>
    </div>
  );
};

export default SelectTopic;
