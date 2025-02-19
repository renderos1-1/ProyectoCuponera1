import React, { useState } from 'react'


const CreateOffer = ({ addOffer }) => {

    const [offerData, setOfferData] = useState({
        title: '',
        regularPrice: '',
        offerPrice: '',
        startDate: '',
        endDate: '',
        expirationDate: '',
        couponLimit: '',
        description: '',
        details: '',
        image: null

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOfferData({ ...setOfferData, [name]: value });
    };

    const handleFileChange = (e) => {
        setOfferData({ ...offerData, image: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!offerData.title || !offerData.offerPrice || !offerData.startDate || !offerData.endDate) return;
        addOffer(offerData);
        setOfferData({
            title:'',
            regularPrice: '',
            offerPrice:'',
            startDate:'',
            endDate:'',
            expirationDate:'',
            couponLimit:'',
            description:'',
            details:'',
            image: null
        });
    };


    return (
        <div className='bg-white p-6 rounded-md shadow-md w-full max-w-3xl mx-auto'>
            <h2 className='text-xl font-bold mb-4 text-center'>Crear Oferta</h2>

            <form className='space-y-4' onSubmit={handleSubmit}>
                <input type='text' name='title' placeholder='Titulo de la oferta' className='w-full border p-2 rounded' value={offerData.title} onChange={handleChange} required />

                {/**inputs de precios */}
                <div className='flex gap-4'>
                    <input type="number" name='regularPrice' placeholder='Precio regular' className='w-1/2 border p-2 rounded' value={offerData.regularPrice} onChange={handleChange} required />

                    <input type="number" name='offerPrice' placeholder='Precio de la oferta' className='w-1/2 border p-2 rounded' value={offerData.offerPrice} onChange={handleChange} required />

                </div>

                {/**inpust de fechas de inicio, fin y fecha limite para usar el cupon */}
                <div className='flex gap-4'>
                    <input type="date" name='startDate' className='w-1/3 border p-2 rounded'
                        value={offerData.startDate} onChange={handleChange} required />
                    <input type="date" name='endDate' className='w-1/3 border p-2 rounded'
                        value={offerData.endDate} onChange={handleChange} required />
                    <input type="date" name='expirationDate' className='w-1/3 border p-2 rounded'
                        value={offerData.expirationDate} onChange={handleChange} required />

                </div>

                <input type="number" name='couponLimit' placeholder='Cantidad limite de cupones (opcional)'
                    className='w-full border p-2 rounded' value={offerData.couponLimit} onChange={handleChange} />
                <textarea name="description" placeholder='Descripcion de la oferta' rows='3'
                    className='w-full border p-2 rounded' value={offerData.description} onChange={handleChange} required></textarea>
                <textarea name="details" placeholder='Otros detalles' rows='3'
                    className='w-full border p-2 rounded' value={offerData.details} onChange={handleChange}></textarea>

                {/**Imagen */}
                <div className='border p-4 rounded-md flex flex-col items-center'>
                    <label className='text-gray-600 mb-2'>Subir imagen</label>
                    <input type="file" name='imageOffer' accept='image/*' className='w-full' onChange={handleFileChange} />
                </div>

                <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded w-full'>Enviar</button>

            </form>
        </div>
    );
};

export default CreateOffer
