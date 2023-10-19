
import { useLoaderData, useParams } from 'react-router-dom';
import Item from './item';

const ItemDetails = () => {

    const { name } = useParams();
    console.log(name);

    const loadedData = useLoaderData();
    console.log(loadedData);

    const filteredData = loadedData.filter(data => data._id === name);

    return (
        <div className='my-10'>
            {
                filteredData.map(Sdata => <Item key={Sdata._id} Sdata={Sdata}></Item>)
            }
        </div>
    );
};

export default ItemDetails;
