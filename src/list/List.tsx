import React from "react";
import { ListItem, Typography, List } from "@material-ui/core";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";

interface Props {
  item: {
    brand: string;
    model: string;
    year: number;
    mileage: number;
    fuelType: string;
    gear: string;
    cylinderCapacity: number;
    noAccident: boolean;
    serviced: boolean;
    state: string;
    color: string;
  };
}

const DetailsList: React.FC<Props> = ({ item }) => {
  const {
    brand,
    model,
    year,
    mileage,
    fuelType,
    gear,
    cylinderCapacity,
    noAccident,
    serviced,
    state,
    color,
  } = item;
  return (
    <List>
      <ListItem>
        <Typography>Marka: {brand}</Typography>
      </ListItem>
      <ListItem>
        <Typography>Model: {model}</Typography>
      </ListItem>
      <ListItem>
        <Typography>Rok produkcji: {year}</Typography>
      </ListItem>
      <ListItem>
        <Typography>Przebieg: {mileage}</Typography>
      </ListItem>
      <ListItem>
        <Typography>Rodzaj paliwa: {fuelType}</Typography>
      </ListItem>
      <ListItem>
        <Typography>Skrzynia biegów: {gear}</Typography>
      </ListItem>
      <ListItem>
        <Typography>Pojemność skokowa: {cylinderCapacity}</Typography>
      </ListItem>
      <ListItem>
        <Typography>
          Bezwypadkowy:{" "}
          {noAccident ? (
            <CheckCircleRoundedIcon color="primary" />
          ) : (
            <CancelRoundedIcon color="error" />
          )}
        </Typography>
      </ListItem>
      <ListItem>
        <Typography>
          Serwisowany w ASO:{" "}
          {serviced ? (
            <CheckCircleRoundedIcon color="primary" />
          ) : (
            <CancelRoundedIcon color="error" />
          )}
        </Typography>
      </ListItem>
      <ListItem>
        <Typography>Stan: {state}</Typography>
      </ListItem>
      <ListItem>
        <Typography>Kolor: {color}</Typography>
      </ListItem>
    </List>
  );
};

export default DetailsList;
