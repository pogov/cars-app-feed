import React, { useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import styles from "./Feed.module.scss";
import DetailsList from "../list/List";

const Feed: React.FC = () => {
  const [feed, setFeed] = React.useState([]);
  const [search, setSearch] = React.useState("");
  React.useEffect(() => {
    if (localStorage.getItem("cars_feed")) {
      setFeed(JSON.parse(localStorage.getItem("cars_feed")));
    }
  }, []);

  const handleSearch = (e: CustomEvent<string>) => {
    setSearch(e.detail);
  };

  useEffect(() => {
    document.addEventListener("car_search", handleSearch);
    return () => document.removeEventListener("car_search", handleSearch);
  });

  const regex = new RegExp(`${search}`, "gi");
  const newFeed = feed.filter(
    (item) => item.brand.match(regex) || item.model.match(regex)
  );
  return (
    <div className={styles.wrapper}>
      <div>
        {newFeed.map((item, i) => (
          <div key={i}>
            <Accordion className={styles.accordion}>
              <AccordionSummary>
                <Typography>
                  {item.brand} {item.model} {item.year}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.details}>
                <DetailsList item={item} />
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
