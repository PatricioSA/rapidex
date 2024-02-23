interface TitlesProps {
    subTitle: string,
    mainTitle: string,
}

export default function Titles({subTitle, mainTitle}: TitlesProps) {
    return(
        <>
            <h3 className="uppercase text-gray-500 text-center font-semibold">
                {subTitle}
            </h3>
            <h2 className="text-primary font-bold text-4xl text-center italic">
                {mainTitle}
            </h2>
        </>
    )

}