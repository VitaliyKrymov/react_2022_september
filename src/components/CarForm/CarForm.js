import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validators";
import {carService} from "../../services";

const CarForm = ({setCars}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: 'all'
    });

    useEffect(() => {
        setValue("model", "BMW")
        setValue("price", 0)
        setValue("year", 1990)
    }, [setValue])

    const submit = async (car) => {
        const {data} = await carService.create(car);
        setCars(cars => [...cars, data])
        reset();
    }
    return (
        // <form onSubmit={handleSubmit(submit)} onChange={() => console.log(errors)}>
        //     <input type="text" placeholder={'model'} {...register('model', {
        //         required: true,
        //         minLength: {value: 2, message: 'min 2 ch'}
        //     })}/>
        //     {errors.model && <span>{errors.model.message}</span>}
        //     <input type="number" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
        //     <input type="number" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
        //     <button disabled={!isValid}>Save</button>
        // </form>

        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            {errors.model && <span>{errors.model.message}</span>}
            <input type="number" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="number" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export {CarForm};