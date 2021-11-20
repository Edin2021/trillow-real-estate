import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function Features({ singleListing }) {
  const [showMoreFeatures, setShowMoreFeatures] = useState(false);

  useEffect(() => {
    setShowMoreFeatures(false);
  }, [singleListing]);

  if (!singleListing.features) return <></>;

  return (
    <section className="features">
      <h3>Features</h3>
      {singleListing.features.map((feature, i) => {
        const { category, text } = feature;
        let listLength = showMoreFeatures ? singleListing.features.length : 1;
        if (i <= listLength)
          return (
            <section key={i} className="feature-group">
              <h4>{category}</h4>
              <ul>
                {text.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          );
        else return;
      })}
      {singleListing.features.length > 2 && (
        <button onClick={() => setShowMoreFeatures((prevState) => !prevState)}>
          {showMoreFeatures ? (
            <>
              show less{" "}
              <span className="icon" aria-hidden="true">
                <MdKeyboardArrowUp />
              </span>
            </>
          ) : (
            <>
              show more{" "}
              <span className="icon" aria-hidden="true">
                <MdKeyboardArrowDown />
              </span>
            </>
          )}
        </button>
      )}
    </section>
  );
}

export default Features;
