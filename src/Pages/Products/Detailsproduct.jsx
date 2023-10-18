import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Detailsproduct = () => {
    let { name } = useParams();
    console.log(name);

    const lodeddata=useLoaderData();
    console.log(lodeddata);
    return (
        <div>
            ok{lodeddata.length}

            {
                lodeddata.filter(data=> data.brand===name).map(singleData=><div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                  <img src={singleData.img} class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title">{singleData.name}</h2>
                  {/* <p>{singleData.}</p> */}
                  <div class="card-actions">
                    <button class="btn btn-primary">Update</button>
                    <button class="btn btn-primary">Details</button>
                  </div>
                </div>
              </div>)
            }

        </div>
    );
};

export default Detailsproduct;