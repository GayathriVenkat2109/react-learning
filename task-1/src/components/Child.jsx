const Child = ({name, age, phone, address}) => {
    return (
    <div>
        <ul>
            <li>{name}</li>
            <li>{age}</li>
            <li>{phone}</li>
            <li>{address}</li>
        </ul>
    </div>
    );
}

export default Child;