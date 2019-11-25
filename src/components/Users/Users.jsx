import React from 'react';
import styles from './Users.module.css';



let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 0,
                    photoUrl: "https://i.pinimg.com/236x/0c/65/bf/0c65bf2aa3ff35cb2ca908b229844205--emoticon-smiley.jpg",
                    followed: "true", fullName: 'Goooose', status: "I'm captain",
                    location: { city: 'Moscow', country: 'Russia' }
                },
                {
                    id: 1,
                    photoUrl: "https://i.pinimg.com/originals/d9/fc/60/d9fc60a472b78b7ed1a797d12eae0d19.jpg",
                    followed: "false", fullName: 'Wolf', status: "running",
                    location: { city: 'Riga', country: 'Russia' }
                },
                {
                    id: 2,
                    photoUrl: "https://i.pinimg.com/originals/9a/e3/06/9ae306f9e8fc656be596399de1ac2ac9.jpg",
                    followed: "false", fullName: 'Martlet', status: "Major Pain",
                    location: { city: "Rome", country: 'Italy' }
                },
                {
                    id: 3,
                    photoUrl: "https://s-media-cache-ak0.pinimg.com/originals/28/1e/b0/281eb0031d2286c031d9ff01ff18e543.jpg",
                    followed: "true", fullName: 'Pepper', status: "Soldjer",
                    location: { city: 'Warsawa', country: 'Poland' }
                },
            ]
        );
    }

    return <div>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photoUrl} className={styles.userPhoto} />
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(user.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;