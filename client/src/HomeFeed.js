import {useState, useEffect} from "react"
import HomeFeedMap from "./HomeFeedMap";

function HomeFeed({user, users, myCheeps}) {
    const [homeFeed, setHomeFeed] = useState([])

    useEffect(() => {
        fetch("/homefeed")
        .then((r) => {
            if (r.ok) {
            r.json().then((user) => setHomeFeed(user));
            }
        });
        }, [user]);


    // const homeFeedMap = homeFeed.map((u) => { return (u) => u.cheeps.map((c) => {
    //     return <HomeFeedMap 
    //     key={c.id} 
    //     user={u} 
    //     />
    //     })})

    const homeFeedMap = homeFeed.map((user)=> { return user.cheeps.map((cheep)=> {
        return cheep;
    })})

    let cheepArray = []

for (let i = 0; i < (homeFeedMap.length - 1); i++) {
    cheepArray = homeFeedMap[i].concat(homeFeedMap[i+1])
}

const forSorting = cheepArray.concat(myCheeps)

    // if (newCheep) {
    //     return addNewCheep = forSorting.push(newCheep)}
    // else {
    //     return addNewCheep = forSorting
    // }

  
  //console.log(newCheep)
//   console.log(addNewCheep);

 // console.log(cheepArray)

    const sorted = forSorting.sort((a,b) => a.id > b.id ? -1 : 1)

    const cheepDisplay = sorted.map((cheep) => {
        return <HomeFeedMap cheep ={cheep} users={users} user={user}  />
    })  

    console.log(sorted)

    // const homeFeedMap = homeFeed.map((user) => {
    //     return <HomeFeedMap
    //         key={user.id}
    //         user={user}
    //     />
    // })

  
    return (
        <div>
            <h1>homefeeeeeed</h1>
            <p>{cheepDisplay}</p>
        </div>
    );
}

export default HomeFeed