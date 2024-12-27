import { Col, Row } from "react-bootstrap";
import { LottieHandler } from "../../feedback";

type GridListProps<T> = {
    records: T[];
    massage:string;
    renderItem: (record: T) => React.ReactNode
}
type HasId = { id?: number }
const GridList = <T extends HasId>({ records, renderItem ,massage}: GridListProps<T>) => {
    const categoriesList = records.length > 0 ? records.map((record) =>
        <Col key={record.id} xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
            {renderItem(record)}
        </Col>
    ) : <LottieHandler width="200px" type="emptyCart" message={massage} />;
    return (
        <Row>
            {categoriesList}
        </Row>
    )
}

export default GridList