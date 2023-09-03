
const StatisticsSummary = ({divClassName, spanClassName, h1ClassName, pClassName, id, h1Child, pChild}) => {

    return (
        <div
            className={`col-12 col-lg-6 col-xxl-3 text-center
                border-end-md p-2 ${divClassName}`}>
            <span className={`uil fs-3 lh-1 ${spanClassName}`}/>
            <h1 className={`fs-1 pt-3 text-break ${h1ClassName}`}>
                {h1Child.toLocaleString()}
            </h1>
            <p className={`fs--1 mb-0 ${pClassName}`}>{pChild}</p>
        </div>
    );
}

export default StatisticsSummary;