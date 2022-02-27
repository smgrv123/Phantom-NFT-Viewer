import React from "react";
import { Link } from "react-router-dom";
import Store from "../Store/Store";
type Props = {
  type: string;
  uri: string;
  imageMetaData: any;
  imageData: any;
  symbol: string;
  screen: string;
};

const Card = (props: Props) => {
  return (
    <Link
      to={
        props.screen === "SendLamport" ? "/collectionDetails" : "/itemDetails"
      }
      style={{
        width: "330px",
        height: "400px",
        margin: 25,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 0px 10px rgba(241, 234, 234, 0.5)",
      }}
      onClick={() => {
        if (props.screen === "SendLamport") {
          
          let Data: any = [];
          
          Data = props.imageData.filter(
            (image: any) => image.symbol === props.symbol
          );
          
          Store.setImageData(Data);
          Store.setMetadata(props.imageMetaData);

        } else if (props.screen === "CollectionDetails") {
          let Data: any[] = [];
          
          Data = props.imageData.filter(
            (image: any) => image.image === props.uri
          );
          
          Store.setImageData(Data);
        }
      }}
    >
      <img
        style={{
          width: "250px",
          height: "300px",
          margin: "10px",
          border: "1px solid black",
          borderRadius: "5px",
        }}
        src={props.uri}
      />
      <div style={{ color: "#fff", textAlign: "center" }}>{props.type}</div>
    </Link>
  );
};

export default Card;
