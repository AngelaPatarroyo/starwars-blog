import React from "react";
import "../../styles/home.css";
import { Card } from "../component/Card"

export const Home = () => (
	<div className="overFlow-x">
		<h4 className="m-5" style={{color: "red"}}>Characters</h4>
	<div  className="text-center d-flex m-5 p-3">
		
		<Card title="Character" gender={'Male'} ></Card>
		<Card title="Character" gender={'Male'}></Card>
		<Card title="Character" gender={'Male'}></Card>
		<Card title="Character" gender={'Male'}></Card>
		<Card title="Character" gender={'Male'}></Card>
		<Card title="Character" gender={'Male'}></Card>
		
	</div>
	<h4 className="m-5" style={{color: "red"}}>Planets</h4>
	<div className="text-center d-flex m-5 p-3">
		<Card title="Character" planetInformation={{terrain: 200}}></Card>
		<Card title="Character" planetInformation={{terrain: 200}}></Card>
		<Card title="Character" planetInformation={{terrain: 200}}></Card>
		<Card title="Character" planetInformation={{terrain: 200}}></Card>
		<Card title="Character" planetInformation={{terrain: 200}}></Card>
		<Card title="Character" planetInformation={{terrain: 200}}></Card>
		
	</div>
	</div>
);
