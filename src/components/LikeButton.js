import React, { useState } from "react";

export default function LikeState() {
  const initial_likeState = false;
  const [likeState, set_likeState] = useState(initial_likeState);

  const changes = () => {
    if (!likeState) {
      set_likeState(true);
    } else {
      set_likeState(false);
    }
  };

  return (
    <div>
      <p>
        <button onClick={changes}>
          {likeState ? "You have liked this, clik to unlike" : "click this"}
        </button>
      </p>
    </div>
  );
}
