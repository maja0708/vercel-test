import { ANIMALS } from "../data/liste";

function Animals() {
    return(
        <div>
            {ANIMALS.map(animal => (
                <h3>
                    {animal.name}
                </h3>
            ))}
        </div>
    )
}

export default Animals;