import React from 'react'
import Styles from './user.module.scss'
interface Props {
    data: UserData
}
interface UserData {
    id: number;
    image: string | any;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    gender: string;
    address: UserAddress;
}
interface UserAddress {
    id: number;
    map: any;
    buildingNumber: string;
    streetName: string;
    country: string;
}
function User(props: Props) {
    const data = props.data;
    return (
        <div className={Styles.userCard}>
            <div>
                <img src={data.image} alt={data.firstname} />
            </div>
            <h3> {data.firstname} {data.lastname}</h3>
            <ul>
                <li> <span> Address : </span> {data.address.buildingNumber} , {data.address.streetName} , {data.address.country}</li>
                <li> <span> Email : </span> <span> {data.email}</span> </li>
                <li> <span> Phone : </span> <span> {data.phone}</span> </li>
                <li> <span> Gender : </span> <span> {data.gender}</span> </li>
            </ul>
        </div>
    )
}

export default User 