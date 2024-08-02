
import React from 'react';
import { Oval } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className="loader">
            <Oval
                height={80}
                width={80}
                color="#666"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#666"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        </div>
    );
};

export default Loader;
