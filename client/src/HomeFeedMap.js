import HomeFeedCheepMap from "./HomeFeedCheepMap";

function HomeFeedMap({cheep, users}) {
   
if(!users) {
    return(<h1> </h1>)
 
}
else{
    const cheepUser = users.find(user => user.id === cheep.user_id)
    return(
        <div>
            <HomeFeedCheepMap cheep={cheep} user={cheepUser}/>
        </div>
    )
}
}

export default HomeFeedMap;