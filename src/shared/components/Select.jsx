export default function Select({
    label,
    name,
    options = [],
    error
}){
    
    const errorSelect = (
        error && <p
            className="
                text-caption
                text-error
                place-self-start
            "
        >
        {error}
        </p>
    )

    return(
        <div
            className="
                w-80
            "
        >
            {label && (
                <label
                    className={`
                        block
                        text-caption
                        mb-1
                        place-self-start
                        ${error ? "text-red-800" : "text-text-primary"}
                    `}
                >
                    {label}
                </label>
            )}

            <select
                name={name}
                
                className={`
                    w-full
                    h-12
                    border 
                    border-border
                    px-4

                    hover:border-2
                    hover:border-focus-border
                    ${error ? "border-red-800" : "border border-border"}
                `}
            >
                <option
                    value=""
                >
                    Seleccione una opción
                </option>

                {   
                    options.map((opt) => (
                        <option
                            key={opt.id}
                            value={opt.id}
                        >
                            {opt.label}
                        </option>
                    ))
                }

            </select>

            {/* Feedback message */}
            {Select.value === "" && errorSelect}
            

        </div>
    )
}