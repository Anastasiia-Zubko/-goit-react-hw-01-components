import React from 'react';
import './App.css';
import Profile from "../src/components/Profile/Profile"
import Statistics from "../src/components/Statistics/Statistics"
import FriendList from "../src/components/FriendList/FriendList"
import Transactions from "../src/components/TransactionHistory/TransactionHistory"

import user from "../src/data/user.json";
import data from "../src/data/data.json";
import friends from "../src/data/friends.json";
import transactions from "../src/data/transactions.json";

function App() {
	return (
		<>
			<Profile
				username={user.username}
				tag={user.tag}
				location={user.location}
				avatar={user.avatar}
				stats={user.stats}
			/>
			<Statistics 
				title="Upload stats" 
				stats={data} 
			/>
			<FriendList 
				friends={friends} 
			/>
			<Transactions 
				items={transactions}
			/>
		</>
	);
}

export default App;
