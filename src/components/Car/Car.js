import css from './Car.module.css'

const Car = ({car,setCars}) => {
    const {id, model, price, year} = car;

    return (
        <div className={`${css.Car} ${css.tool}`}>
            <div>
                <div>id:{id}</div>
                <div>model:{model}</div>
                <div>price:{price}</div>
                <div>year:{year}</div>
            </div>
            <div>
                <button className={css.tools}>Update</button>
                <button className={css.tools}>Delete</button>
            </div>

        </div>
    );
}

export {Car};