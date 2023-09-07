import Summary from "./Summary";

const SummaryCard = () => {

    return (
        <div className="card " style={{ height: "auto" }}>
            <div className="card-body">
                <div id="sectionfour" className="row justify-content-between">
                    <Summary />
                </div>
            </div>
        </div>
    );
}

export default SummaryCard;