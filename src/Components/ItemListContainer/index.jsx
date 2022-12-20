import React from "react";
import { ItemCard } from "../ItemCard";

export const ItemListContainer = ({ arrItems }) => {
	return (
		<>
			<div className="container pt-5">
        <h4 className="text-center">List products</h4>

        <div className="row mt-5">
          {arrItems.map((app) => (
            <div className="col-md-4 col-sm-12">
              <ItemCard item={app} key={app.id} />
            </div>
          ))}
        </div>
      </div>
		</>
	);
};
