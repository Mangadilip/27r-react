function Food() {

    const food1= "banana";
    const food2= "grapes";
    const food3= "orange";
    return(
        <>
            <ul>
                <li>apple</li>
                <li>{food1}</li>
                <li>{food2}</li>
                <li>{food3}</li>
            </ul>
            <hr/>
            <table border="1">
                <tr>
                    <th>food</th>
                    <th>price</th>
                    <th>quantity</th>
                </tr>
                <tr>
                    <td>apple</td>
                    <td>10</td>
                    <td>250gm</td>

                </tr>
                <tr>
                    <td>{food1}</td>
                    <td>20</td>
                    <td>500gm</td>
                </tr>
                <tr>
                    <td>{food2}</td>
                    <td>30</td>
                    <td>1kg</td>
                </tr>
                <tr>
                    <td>{food3}</td>
                    <td>40</td>
                    <td>750gm</td>
                </tr>
            </table>
            <hr />
            </>
        
    )
}

export default Food;