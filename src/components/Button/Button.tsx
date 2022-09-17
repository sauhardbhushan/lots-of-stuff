import { locales } from "../../helpers/constants";

interface ButtonProps {
    updateLocale: (x: string) => void
}
export default function Button({ updateLocale }: ButtonProps) {

    return (
        <>
            {Object.entries(locales).map(([key, value], index) => (
                <button key={`button#${index}`} onClick={() => updateLocale(value)}>
                    {key}
                </button>
            ))
            }
        </>
    )
}
