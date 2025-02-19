import React, { useState } from 'react'

const useOffer = () => {

    const [offers, setOffers] = useState([]);

    const addOffer = (newOffer) => {
        setOffers([...offers, { id: offers.length + 1, ...newOffer }]);
    };

    return {offers, addOffer};
};

export default useOffer
