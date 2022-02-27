import React from "react";
import Card from "../components/Card";
import Store from "../Store/Store";
import "../styles/GetNFT.css";

const CollectionDetails = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontWeight: "normal",
          fontSize: "50px",
          marginTop: "20px",
        }}
      >
        Collection Details
      </h1>
      <div className="NFTcontainer">
        {Store.imageData.map((image: any) => {
          console.log(image);
          return (
            <Card
              type={image.name}
              uri={image.image}
              imageMetaData={Store.metadata}
              imageData={Store.imageData}
              symbol={image.symbol}
              screen={"CollectionDetails"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CollectionDetails;
